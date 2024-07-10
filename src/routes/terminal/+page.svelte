<script lang="ts">
	import Meta from '../../components/Meta.svelte';
	import Footer from '../../components/Footer.svelte';
	import type { PageData } from './$types';

	import { type Terminal, Xterm, XtermAddon } from '@battlefieldduck/xterm-svelte';
	import {
		type ITerminalOptions,
		type ITerminalInitOnlyOptions
	} from '@battlefieldduck/xterm-svelte';

	let options: ITerminalOptions & ITerminalInitOnlyOptions = {
		fontFamily: 'Consolas',
		cursorBlink: true
	};

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
			terminal.writeln('Type "help" for a list of commands.');
			terminal.write('$: ');
		}, 4000);
	};

	const onData = (event: CustomEvent<string>) => {
		const data = event.detail;
	};

	const commandEntered = (cmd: string) => {
		console.log('[Command] =>', cmd);
	};

	let currentLine = '';
	let entries: string[] = [];
	const onKey = (event: CustomEvent<{ key: string; domEvent: KeyboardEvent }>) => {
		const data = event.detail;

		// Enter
		if (data.domEvent.keyCode === 13) {
			entries.push(currentLine);
			terminal.write('\r\n');

			if (currentLine != '') commandEntered(currentLine);
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

	export let data: PageData;
</script>

<Meta Title="Terminal" Description="Access my portfolio in a CLI!" />

<!-- Content -->
<main class="p-6">
	<Xterm {options} on:load={onLoad} on:data={onData} on:key={onKey} />
</main>

<!-- Footer -->
<Footer {data} />
