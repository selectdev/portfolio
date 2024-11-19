<script lang="ts">
	import { browser } from '$app/environment';
	import { createEventDispatcher, onMount } from 'svelte';

	let words: String[] = [
		'Hello',
		'નમસ્તે',
		'CIAO',
		'こんにちは',
		'Hola',
		'안녕',
		'Bonjour',
		'Olá',
		'Hallo',
		'你好',
		'नमस्ते'
	];

	let index: number = 0;
	let word: String = words[index];
	let intervalDuration: number = 200;

	const dispatch = createEventDispatcher();
	const switchWord = () => {
		intervalDuration = 200 - index * 10;

		clearInterval(run);

		if (index >= words.length - 1) {
			if (browser) close();
		} else index++;

		word = words[index];
		run = setInterval(switchWord, intervalDuration);
	};

	const close = () => {
		const cum = document.getElementById('bar');
		cum?.classList.remove('hidden');
		cum?.classList.add('stretch');

		setTimeout(() => dispatch('close'), 2000);
	};

	let run = setInterval(switchWord, intervalDuration);
	onMount(() => {
		document.body.addEventListener('click', close);
	});
</script>

<div class="bg-purple-600/50 grid place-items-center min-h-screen overflow-none">
	<ol class="list-disc">
		<li class="text-white font-cursive non-italic font-extrabold text-5xl no-scrollbar">
			{word}
		</li>
	</ol>
</div>

<div id="bar" class="hidden bg-surface-700 p-4" />
