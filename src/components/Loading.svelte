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
	let intervalDuration: number = 1000;

	const dispatch = createEventDispatcher();

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

	const switchWord = () => {
		intervalDuration = 300 - index * 10;
		clearInterval(run);

		if (index >= words.length - 1) dispatch('close');
		else index++;

		word = words[index];
                animateCSS("#word", "backInUp");
		run = setInterval(switchWord, intervalDuration);
	};

	let run = setInterval(switchWord, intervalDuration);
</script>

<div class="grid place-items-center min-h-screen overflow-none no-scrollbar">
	<ol class="list-disc no-scrollbar">
		<li
                        id="word"
			class="animate__animated animate__backInDown text-warning-600 font-extrabold tracking-tight italic text-5xl no-scrollbar"
		>
			{word}
		</li>
	</ol>
</div>

<div class="hidden bg-gray-600 p-4" />
