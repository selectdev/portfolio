<script lang="ts">
	import Meta from '../components/Meta.svelte';
	import Footer from '../components/Footer.svelte';
	import type { PageData } from './$types';

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
			class="bg-gradient-to-r {data.availableForHire
				? 'from-primary-500 via-primary-600 to-primary-700'
				: 'from-error-500 via-error-600 to-error-700'} text-white p-1 text-xs px-1.5 rounded-md font-bold"
			>{data.availableForHire ? 'Available for Hire!' : 'Not Available for Hire!'}</span
		>

		<h1 class="pt-1 text-primary-600 text-3xl md:text-4xl font-bold tracking-tight">
			Hello, there. I'm <span class="text-red-600">Zane</span>!
		</h1>
		<p
			class="text-primary-300 font-semibold tracking-tight md:text-xl md:w-3/4 md:text-wrap md:whitespace-normal"
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
	<div id="projects">
		<h1 class="text-primary-600 text-3xl font-bold tracking-tight md:text-4xl">Projects</h1>
		<p class="text-primary-300 font-semibold tracking-tight md:text-xl">
			Here are some of the projects I've worked on.
		</p>

		<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
			{#each data.projects as project}
				<div class="self-auto">
					<div
						class="block max-w-sm p-3 border rounded-md shadow bg-surface-700 border-surface-800 hover:bg-surface-600"
					>
						<a href={project.link}>
							{#if project.flair}
								<span class="bg-primary-600 text-white p-1 text-xs px-2 rounded-full font-bold"
									>{project.flair}</span
								>
							{/if}

							<div class="mt-4 flex">
								<img
									src={project.image}
									class="h-[30px] bg-surface-700 rounded-full"
									height="30px"
									alt="{project.name} logo"
								/>

								<h5
									class="ml-2 text-lg font-bold overflow-x-auto tracking-tight text-secondary-400"
								>
									{project.name}
								</h5>
							</div>

							<p class="mt-2 text-base font-semibold text-secondary-500">{project.description}</p>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="p-3" />

	<!-- Tech Stack -->
	<div id="tech-stack">
		<h1 class="text-primary-600 text-3xl font-bold tracking-tight md:text-4xl">Tech Stack</h1>
		<p class="text-primary-300 font-semibold tracking-tight md:text-xl">
			Oh, hello there. This is the stack, that i use when working on projects.
		</p>

		<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
			{#each data.stack as p}
				<div class="self-auto">
					<div
						class="block max-w-sm p-3 border rounded-md shadow bg-surface-700 border-surface-800 hover:bg-surface-600"
					>
						<a href={p.link}>
							<div class="flex">
								{#if p.image.startsWith('https://')}
									<img
										src={p.image}
										class="h-[30px] bg-surface-700 rounded-full"
										height="30px"
										alt="{p.name} logo"
									/>
								{:else}
									<i class="mt-3 {p.image} fa-xl max-h-[30px] text-white rounded-full" />
								{/if}

								<h5
									class="ml-2 text-lg font-bold overflow-x-auto tracking-tight text-secondary-400"
								>
									{p.name}
								</h5>
							</div>

							<p class="mt-2 text-base font-semibold text-secondary-500">{p.description}</p>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="p-3" />

	<!-- Testimonials -->
	<div id="testimonials">
		<h1 class="text-primary-600 text-3xl font-bold tracking-tight md:text-4xl">Testimonials</h1>
		<p class="text-primary-300 font-semibold tracking-tight md:text-xl">
			Here are some testimonials provided by some of my clients!
		</p>

		<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
			{#each data.testimonials as testimonial}
				<div class="self-auto">
					<div
						class="block max-w-sm p-3 border rounded-md shadow bg-surface-700 border-surface-800 hover:bg-surface-600"
					>
						<a href={testimonial.link}>
							<div class="flex">
								<img
									src={testimonial.image}
									class="h-[30px] bg-surface-700 rounded-full"
									height="30px"
									alt="{testimonial.name} logo"
								/>

								<h5
									class="ml-2 text-lg font-bold overflow-x-auto tracking-tight text-secondary-400"
								>
									{testimonial.name} <span class="opacity-60">(with {testimonial.project})</span>
								</h5>
							</div>

							<p class="mt-2 text-sm md:text-base font-semibold text-secondary-500">
								{testimonial.description}
							</p>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="p-3" />

	<!-- PC Specs -->
	<div id="pc-specs">
		<h1 class="text-primary-600 text-3xl font-bold tracking-tight md:text-4xl">PC Specs</h1>
		<p class="text-primary-300 font-semibold tracking-tight md:text-xl">
			Here are some of the specifications of my PC.
		</p>

		<div class="mt-2" />

		<ol class="ml-6 list-disc">
			{#each Object.entries(data.pcSpecs) as spec}
				<li class="ml-3 pt-1 text-primary-400 font-bold italic text-md md:text-xl">
					<span class="text-primary-500 tracking-tight">{spec[0]}:</span>
					{spec[1]}
				</li>
			{/each}
		</ol>

		<p class="text-primary-300 font-semibold tracking-tight">
			* Specifications are prone to change.
		</p>
	</div>

	<div class="p-3" />

	<!-- Peripherals -->
	<div id="peripherals">
		<h1 class="text-primary-600 text-3xl font-bold tracking-tight md:text-4xl">Peripherals</h1>
		<p class="text-primary-300 font-semibold tracking-tight md:text-xl">
			Here are some of my peripherals.
		</p>

		<div class="mt-2" />

		<ol class="ml-6 list-disc">
			{#each Object.entries(data.peripherals) as spec}
				<li class="ml-3 pt-1 text-primary-400 font-bold italic text-md md:text-xl">
					<span class="text-primary-500 tracking-tight">{spec[0]}:</span>
					{spec[1]}
				</li>
			{/each}
		</ol>

		<p class="text-primary-300 font-semibold tracking-tight">* Peripherals are prone to change.</p>
	</div>
</main>

<!-- Footer -->
<Footer {data} />
