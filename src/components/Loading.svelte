<script lang="ts">
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
	let intervalDuration: number = 300;

	const dispatch = createEventDispatcher();

	const switchWord = () => {
		intervalDuration = 300 - index * 10;
		clearInterval(run);

		if (index >= words.length - 1) dispatch('close');
		else index++;

		word = words[index];
		run = setInterval(switchWord, intervalDuration);
	};

        const animateCSS = (element, animation, prefix = 'animate__') =>
            new Promise((resolve, reject) => {
                const animationName = `${prefix}${animation}`;
                const node = document.querySelector(element);

                node.classList.add(`${prefix}animated`, animationName);

                const handleAnimationEnd = (event) => {
                    event.stopPropagation();
                    node.classList.remove(`${prefix}animated`, animationName);
                    resolve('Animation ended');
                };

                node.addEventListener('animationend', handleAnimationEnd, {once: true});
        });

	let run = setInterval(switchWord, intervalDuration);
</script>

<div class="grid place-items-center min-h-screen overflow-none no-scrollbar">
	<ol class="list-disc no-scrollbar">
		<li
			class="text-warning-600 font-extrabold tracking-tight italic text-5xl no-scrollbar"
		>
			{word}
		</li>
	</ol>
</div>

<div class="hidden bg-gray-600 p-4" />
