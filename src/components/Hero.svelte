<script lang="ts">
	import type { PageData } from '../routes/$types';

	export let data: PageData;
</script>

<div id="about-me">
	<span
		class="bg-gradient-to-r font-cabin {data.availableForHire
			? 'from-secondary-500 via-secondary-600 to-secondary-700'
			: 'from-error-600 via-error-800 to-error-900'} text-white p-1 text-xs px-1.5 rounded-md font-bold uppercase"
		>{data.availableForHire ? 'Available for Hire!' : 'Not Available for Hire!'}</span
	>

	<h1 class="pt-1 text-primary-600 font-monster non-italic text-3xl md:text-4xl font-extrabold">
		Hello, there. I'm <span class="text-red-600">Zane</span>!
	</h1>
	<p
		class="text-primary-300 font-monster font-semibold tracking-tight md:text-xl md:w-3/4 md:text-wrap md:whitespace-normal"
	>
		I'm a {data.age}-year-old
		<span class="text-secondary-300 font-bold">full-stack developer</span>
		with
		<span class="text-secondary-300 font-bold">seven years of experience</span>, working with a
		variety of
		<span class="text-secondary-300 font-bold">programming languages</span>
		and <span class="text-secondary-300 font-bold">technologies</span>. I'm passionate about
		technology and excited to start a new project. {data.availableForHire
			? "Right now, I'm available for hire and ready to bring fresh ideas to your team."
			: ''}
	</p>
</div>

<div class="p-3" />
