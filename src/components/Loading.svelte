<script lang="ts">
	import { browser } from '$app/environment';
	import { createEventDispatcher } from 'svelte';

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
	let intervalDuration: number = 1000;

	const dispatch = createEventDispatcher();

	const animateCSS = (element: string, animation: string, prefix: string = 'animate__') =>
		new Promise((resolve, reject) => {
			const animationName = `${prefix}${animation}`;
			const node = document.querySelector(element);

			node?.classList.add(`${prefix}animated`, animationName);

			const handleAnimationEnd = (event: any) => {
				event.stopPropagation();
				node?.classList.remove(`${prefix}animated`, animationName);
				resolve('Animation ended');
			};

			node?.addEventListener('animationend', handleAnimationEnd, { once: true });
		});

	const switchWord = () => {
		intervalDuration = 300 - index * 10;
		clearInterval(run);

		if (index >= words.length - 1) {
			if (browser) {
				const cum = document.getElementById('bar');
				cum?.classList.remove('hidden');
				cum?.classList.add('stretch');

				setTimeout(() => dispatch('close'), 1800);
			}
		} else index++;

		word = words[index];
		run = setInterval(switchWord, intervalDuration);
	};

	let run = setInterval(switchWord, intervalDuration);
</script>

<div class="grid place-items-center min-h-screen overflow-none no-scrollbar">
	<ol class="list-disc no-scrollbar">
		<li
			class="animate__animated animate__bounce animate__infinite animate__fast text-warning-600 font-extrabold tracking-tight italic text-5xl no-scrollbar"
		>
			{word}
		</li>
	</ol>
</div>

<div id="bar" class="hidden bg-gray-800 p-4" />
