<script lang="ts">
	import Meta from '../components/Meta.svelte';
	import Footer from '../components/Footer.svelte';
	import Card from '../components/Card.svelte';
	import type { PageData } from './$types';
	import Section from '../components/Section.svelte';

	export let data: PageData;
</script>

<Meta
	Description="I'm a {data.age}-year-old full-stack developer with six years of experience, working with a variety of programming languages and technologies. I'm passionate about technology and excited to start a new project. {data.availableForHire
		? "Right now, I'm available for hire and ready to bring fresh ideas to your team."
		: ''}"
/>

<!-- Content -->
<main class="p-6">
	<!-- About Me -->
	<div id="about-me">
		<span
			class="bg-gradient-to-r font-cabin {data.availableForHire
				? 'from-secondary-500 via-secondary-600 to-secondary-700'
				: 'from-error-500 via-error-600 to-error-700'} text-white p-1 text-xs px-1.5 rounded-md font-bold"
			>{data.availableForHire ? 'Available for Hire!' : 'Not Available for Hire!'}</span
		>

		<h1 class="pt-5 text-primary-600 font-cursive non-italic text-3xl md:text-4xl font-extrabold">
			Hello, there. I'm <span class="text-red-600">Zane</span>!
		</h1>
		<p
			class="-mt-2 text-primary-300 font-monster font-semibold tracking-tight md:text-xl md:w-3/4 md:text-wrap md:whitespace-normal"
		>
			I'm a {data.age}-year-old
			<span class="text-secondary-300 font-bold">full-stack developer</span>
			with
			<span class="text-secondary-300 font-bold">six years of experience</span>, working with a
			variety of
			<span class="text-secondary-300 font-bold">programming languages</span>
			and <span class="text-secondary-300 font-bold">technologies</span>. I'm passionate about
			technology and excited to start a new project. {data.availableForHire
				? "Right now, I'm available for hire and ready to bring fresh ideas to your team."
				: ''}
		</p>
	</div>

	<div class="p-3" />

	<!-- Projects -->
	<Section Title="Projects" Description="Here are some of the projects I've worked on.">
		<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
			{#each data.projects as project}
				<div class="self-auto">
					<Card
						Name={project.name}
						Description={project.description}
						Image={project.image}
						Link={project.link}
						Flairs={project.flair}
					/>
				</div>
			{/each}
		</div>
	</Section>

	<!-- Companies -->
	<Section Title="Companies" Description="Hello, there. I work with these companies!">
		<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
			{#each data.companies as company}
				<div class="self-auto">
					<Card
						Name={company.name}
						Description={company.description}
						Image={company.image}
						Link={company.link}
						Flairs={company.flair}
					/>
				</div>
			{/each}
		</div>
	</Section>

	<!-- Tech Stack -->
	<Section
		Title="Tech Stack"
		Description="Oh, hello there. This is the stack, that i use when working on projects."
	>
		<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
			{#each data.stack as stack}
				<div class="self-auto">
					<Card
						Name={stack.name}
						Description={stack.description}
						Image={stack.image}
						Link={stack.link}
						Flairs={[]}
					/>
				</div>
			{/each}
		</div>
	</Section>

	<!-- Testimonials -->
	<Section
		Title="Testimonials"
		Description="Here are some testimonials provided by some of my clients!"
	>
		<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
			{#each data.testimonials as testimonial}
				<div class="self-auto">
					<Card
						Name={testimonial.name}
						Description={testimonial.description}
						Image={testimonial.image}
						Link={testimonial.link}
						Flairs={[]}
					/>
				</div>
			{/each}
		</div>
	</Section>

	<!-- PC Specs -->
	<Section Title="PC Specs" Description="Here are some of the specifications of my PC.">
		<ol class="ml-6 list-disc">
			{#each Object.entries(data.pcSpecs) as spec}
				<li class="ml-3 pt-1 text-primary-400 font-monster font-bold italic text-md md:text-xl">
					<span class="font-cabin text-primary-500 tracking-tight">{spec[0]}:</span>
					{spec[1]}
				</li>
			{/each}
		</ol>

		<p class="text-primary-300 font-cabin font-semibold tracking-tight">
			* Specifications are prone to change.
		</p>
	</Section>

	<!-- Peripherals -->
	<Section Title="Peripherals" Description="Here are some of my peripherals.">
		<ol class="ml-6 list-disc">
			{#each Object.entries(data.peripherals) as spec}
				<li class="ml-3 pt-1 text-primary-400 font-monster font-bold italic text-md md:text-xl">
					<span class="font-cabin text-primary-500 tracking-tight">{spec[0]}:</span>
					{spec[1]}
				</li>
			{/each}
		</ol>

		<p class="text-primary-300 font-cabin font-semibold tracking-tight">
			* Peripherals are prone to change.
		</p>
	</Section>
</main>

<!-- Footer -->
<Footer {data} />
