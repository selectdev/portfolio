<script lang="ts">
	import Meta from '../components/Meta.svelte';

	const age: number = 17;
	const available: boolean = true;

	const projects: {
		name: string;
		description: string;
		link: string;
		image: string;
		flair: string | null;
	}[] = [
		{
			name: 'Select List',
			description:
				"Discover top-tier bots for Discord and Revolt here. Elevate your server's capabilities with our curated picks. Plus, showcase your server with our listing service. Upgrade your server experience now!",
			link: 'https://select-list.xyz/',
			image: 'https://select-list.xyz/logo.png',
			flair: 'FOUNDER'
		},
		{
			name: 'Sparkyflight',
			description:
				"Hey, neurodivergent friends! Tired of your thoughts being dismissed? Welcome to Sparkyflight – the virtual haven where your ideas soar without fear of judgment. Speak your mind, share your brilliance, and let's fly high together!",
			link: 'https://sparkyflight.xyz/',
			image: 'https://sparkyflight.xyz/logo.png',
			flair: 'FOUNDER'
		},
		{
			name: 'AntiRaid',
			description:
				'AntiRaid is a Automatic Moderation Service created to protect your Discord Server from threats, unsafe bots and spamming using our advanced technology!',
			link: 'https://antiraid.xyz/',
			image: 'https://antiraid.xyz/logo.webp',
			flair: 'EXECUTIVE DIRECTOR'
		},
		{
			name: 'Infinity List',
			description: 'Begin your Discord journey with our extensive directory.',
			link: 'https://infinitybots.gg/',
			image: 'https://cdn.infinitybots.gg/core/full_logo.webp',
			flair: 'LEAD DEVELOPER'
		},
		{
			name: 'CordX',
			description:
				'Discover seamless media sharing and storage. Experience the next generation of simplicity for all your digital moments.',
			link: 'https://cordx.lol/',
			image: '/cordx.png',
			flair: 'DEVELOPER'
		}
	];

	const stack: {
		name: string;
		description: string;
		link: string;
		image: string;
	}[] = [
		{
			name: 'Sveltekit',
			description: 'Svelte is a free and open-source component-based front-end software framework.',
			link: 'https://kit.svelte.dev/',
			image: 'https://a.storyblok.com/f/88751/1702x2049/619c584101/svelte_logo.png'
		},
		{
			name: 'NodeJS',
			description:
				'Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.',
			link: 'https://nodejs.org/',
			image: 'fa-brands fa-node-js'
		},
		{
			name: 'JavaScript',
			description:
				'JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS.',
			link: 'https://www.w3schools.com/js/DEFAULT.asp',
			image: 'fa-brands fa-js'
		},
		{
			name: 'Go',
			description:
				'Go is a statically typed, compiled high-level programming language designed at Google.',
			link: 'https://go.dev/',
			image: 'fa-brands fa-golang'
		},
		{
			name: 'Rust',
			description:
				'Rust is a multi-paradigm, general-purpose programming language that emphasizes performance, type safety, and concurrency.',
			link: 'https://www.rust-lang.org/',
			image: 'fa-brands fa-rust'
		},
		{
			name: 'Python',
			description:
				'Python is a high-level programming language that lets you work more efficiently and effectively.',
			link: 'https://www.python.org/',
			image: 'fa-brands fa-python'
		}
	];

	const specs: { [key: string]: string } = {
		Case: 'Corsair iCUE 4000X RGB',
		Storage: 'SAMSUNG 980 PRO (SSD) - 2TB',
		Motherboard: 'MSI MAG B550 Tomahawk MAX WiFi',
		//'Graphics Card': 'GeForce RTX 4060',
		CPU: 'AMD Ryzen 7 5700G',
		//'CPU Cooler': 'Corsair iCUE H100i Elite LCD',
		'Power Supply': 'Corsair RM750x',
		RAM: 'Corsair VENGEANCE RGB PRO (DDR4) - 16GB'
	};

	const testimonials: {
		name: string;
		description: string;
		project: string;
		link: string;
		image: string;
	}[] = [
		{
			name: 'Emil Ilieff',
			description:
				"I highly recommend Select, whose skills and dedication were crucial to our project's success. As a full stack developer, his expertise in both front-end and back-end development consistently delivered high-quality solutions. Select's problem-solving ability, proficiency in various programming languages, and exceptional collaboration skills ensured thorough execution and innovation. His clear communication and strategic mindset were invaluable. I am confident in his continued success in future projects.",
			project: 'AntiRaid',
			link: 'https://antiraid.xyz/',
			image: 'https://popkat.purrquinox.com/939058556a61a4efe6e07243c6b1732a_588'
		}
	];
</script>

<Meta
	Description="I'm a {age}-year-old full-stack developer with six years of experience, working with a variety of programming languages and technologies. I'm passionate about technology and excited to start a new project. {available
		? "Right now, I'm available for hire and ready to bring fresh ideas to your team."
		: ''}"
/>

<main class="p-6">
	<!-- About Me -->
	<div id="about-me">
		<span
			class="bg-gradient-to-r {available
				? 'from-primary-500 via-primary-600 to-primary-700'
				: 'from-error-500 via-error-600 to-error-700'} text-white p-1 text-xs px-1.5 rounded-md font-bold"
			>{available ? 'Available for Hire!' : 'Not Available for Hire!'}</span
		>

		<h1 class="pt-1 text-primary-600 text-3xl font-bold tracking-tight">
			Hello, there. I'm <span class="text-red-600">Zane</span>!
		</h1>
		<p class="text-primary-300 font-bold tracking-tight">
			I'm a {age}-year-old <span class="text-secondary-300">full-stack developer</span> with
			<span class="text-secondary-300">six years of experience</span>, working with a variety of
			<span class="text-secondary-300">programming languages</span>
			and <span class="text-secondary-300">technologies</span>. I'm passionate about technology and
			excited to start a new project. {available
				? "Right now, I'm available for hire and ready to bring fresh ideas to your team."
				: ''}
		</p>
	</div>

	<div class="p-3" />

	<!-- Projects -->
	<div id="projects">
		<h1 class="text-primary-600 text-3xl font-bold tracking-tight">Projects</h1>
		<p class="text-primary-300 font-bold tracking-tight">
			Here are some of the projects I've worked on.
		</p>

		<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<div class="self-auto">
					<div
						class="block max-w-sm p-3 border rounded-md shadow bg-surface-700 border-surface-800 hover:bg-surface-600"
					>
						<a href={project.link}>
							{#if project.flair}
								<span class="bg-surface-400 text-white p-1 text-xs px-1.5 rounded-r-full font-bold"
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
		<h1 class="text-primary-600 text-3xl font-bold tracking-tight">Tech Stack</h1>
		<p class="text-primary-300 font-bold tracking-tight">
			Oh, hello there. This is the stack, that i use when working on projects.
		</p>

		<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
			{#each stack as p}
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
		<h1 class="text-primary-600 text-3xl font-bold tracking-tight">Testimonials</h1>
		<p class="text-primary-300 font-bold tracking-tight">
			Here are some testimonials provided by some of my clients!
		</p>

		<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
			{#each testimonials as testimonial}
				<div class="self-auto">
					<div
						class="block max-w-sm p-3 border rounded-md shadow bg-surface-700 border-surface-800 hover:bg-surface-600"
					>
						<a href={testimonial.link}>
							<span class="bg-surface-400 text-white p-1 text-xs px-1.5 rounded-r-full font-bold"
								>VERIFIED</span
							>

							<div class="mt-3 flex">
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

							<p class="mt-2 text-sm lg:text-base font-semibold text-secondary-500">
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
		<h1 class="text-primary-600 text-3xl font-bold tracking-tight">PC Specs</h1>
		<p class="text-primary-300 font-bold tracking-tight">
			Here are some of the specifications of my PC.
		</p>

		<div class="mt-2" />

		<ol class="ml-6 list-disc">
			{#each Object.entries(specs) as spec}
				<li class="ml-3 pt-1 text-primary-400 font-bold italic text-md">
					<span class="text-primary-500 tracking-tight">{spec[0]}:</span>
					{spec[1]}
				</li>
			{/each}
		</ol>

		<p class="text-primary-300 font-bold tracking-tight">* Specifications are prone to change.</p>
	</div>
</main>
