<script lang="ts">
	// Modules
	import Meta from '../../components/Meta.svelte';
	import Footer from '../../components/Footer.svelte';
	import type { LayoutData } from '../$types';
	import type { PageData } from './$types';
	import { type Terminal, Xterm, XtermAddon } from '@battlefieldduck/xterm-svelte';
	import {
		type ITerminalOptions,
		type ITerminalInitOnlyOptions
	} from '@battlefieldduck/xterm-svelte';

	// Get data from server.
	export let data: LayoutData & PageData;

	// Commands
	const commands: Map<
		string,
		{
			name: string;
			description: string;
			hidden: boolean;
			args: string[];
			execute: (terminal: Terminal, data: any) => void;
		}
	> = new Map();
	data.commands.map((p) => commands.set(p.name, p));

	const commandEntered = async (cmd: string) => {
		const parts = cmd.trim().split(' ');
		const command = parts[0];
		const args = parts.slice(1);

		if (commands.has(command)) {
			const { execute } = commands.get(command)!;
			execute(terminal, { args: args });
		} else terminal.writeln(`Error: Command "${command}" not found.\n`);
	};

	// Terminal Options
	let options: ITerminalOptions & ITerminalInitOnlyOptions = {
		fontFamily: 'Consolas',
		cursorBlink: true
	};

	// Page Load
	let terminal: Terminal;
	const onLoad = async (event: CustomEvent<{ terminal: Terminal }>) => {
		terminal = event.detail.terminal;

		const fitAddon = new (await XtermAddon.FitAddon()).FitAddon();
		terminal.loadAddon(fitAddon);
		fitAddon.fit();

		terminal.writeln('Connecting to server...');
		setTimeout(() => {
			terminal.clear();
			terminal.writeln('Welcome to selectdev-DOS!');
			terminal.writeln('Type "help" for a list of commands.\n');
			terminal.write('$: ');
		}, 4000);
	};

	// Data event
	const onData = (event: CustomEvent<string>) => {
		const data = event.detail;
	};

	// Key event
	let currentLine = '';
	let entries: string[] = [];
	const onKey = async (event: CustomEvent<{ key: string; domEvent: KeyboardEvent }>) => {
		const data = event.detail;

		// Enter
		if (data.domEvent.keyCode === 13) {
			entries.push(currentLine);

			if (currentLine != '') {
				terminal.write('\r\n');
				await commandEntered(currentLine);
				terminal.write('\r$: ');
			} else terminal.write('\r\n$: ');

			currentLine = '';
		}
		// Backspace
		else if (data.domEvent.keyCode === 8) {
			if (currentLine) {
				currentLine = currentLine.slice(0, currentLine.length - 1);
				terminal.write('\b \b');
			}
		}
		// Regular Input
		else {
			currentLine += data.key;
			terminal.write(data.key);
		}
	};
</script>

<Meta Title="Terminal" Description="Access my portfolio in a CLI!" />

<!-- Content -->
<main class="p-6">
	<h1 class="text-primary-600 text-3xl font-bold tracking-tight md:text-4xl">Terminal</h1>
	<p class="text-primary-300 font-semibold tracking-tight md:text-xl">
		Access my portfolio in a command-line interface. This is currently experimental, and is still
		being worked on. Hope you enjoy!
	</p>
	<Xterm {options} on:load={onLoad} on:data={onData} on:key={onKey} />
</main>

<!-- Footer -->
<Footer {data} />
