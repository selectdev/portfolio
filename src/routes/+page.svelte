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
		'Graphics Card': 'GeForce RTX 4060',
		CPU: 'AMD Ryzen 7 5700G',
		'CPU Cooler': 'Corsair iCUE H100i Elite LCD',
		'Power Supply': 'Corsair RM750x',
		RAM: 'Corsair VENGEANCE RGB PRO (DDR4) - 16GB'
	};
</script>

<Meta />

<main class="p-6">
	<!-- About Me -->
	<div id="about-me">
		<span
			class="bg-gradient-to-r {available
				? 'from-green-500 via-green-600 to-green-700'
				: 'from-red-400 via-red-500 to-red-600'} text-white p-1 text-xs px-1.5 rounded-lt-md rounded-rb-full font-bold"
			>{available ? 'Available for Hire!' : 'Not Available for Hire!'}</span
		>

		<h1 class="pt-1 text-warning-600 text-3xl font-bold tracking-tight">
			Hello, there. I'm <span class="text-red-600">Zane</span>!
		</h1>
                <p class="text-warning-300 font-bold tracking-tight">
                    I'm a {age}-year-old <span class="text-red-300">full-stack developer</span> with <span class="text-red-300">six years of experience</span>, working with a variety of <span class="text-red-300">programming languages</span> and <span class="text-red-300">technologies</span>. I'm passionate about technology and excited to start a new project. {available ? "Right now, I'm available for hire and ready to bring fresh ideas to your team." : ""}
		</p>
	</div>

	<div class="p-5" />

	<!-- Projects -->
	<div id="projects">
		<h1 class="text-warning-600 text-3xl font-bold tracking-tight">Projects</h1>
		<p class="text-warning-300 font-bold tracking-tight">
			Here are some of the projects I've worked on.
		</p>

		<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<div class="self-auto">
					<div
						class="block max-w-sm p-3 border rounded-br-lg hover:rounded-tl-lg shadow bg-surface-800 border-surface-800 hover:bg-surface-600"
					>
						<a href={project.link}>
							{#if project.flair}
								<span
									class="bg-indigo-500 text-white p-1 text-xs px-1.5 rounded-l-md rounded-r-full font-bold"
									>{project.flair}</span
								>
							{/if}

							<div class="mt-4 flex">
								<img
									src={project.image}
									class="h-[30px] bg-gray-700 rounded-full"
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

		<div class="p-5" />

		<!-- Tech Stack -->
		<div id="tech-stack">
			<h1 class="text-warning-600 text-3xl font-bold tracking-tight">Tech Stack</h1>
			<p class="text-warning-300 font-bold tracking-tight">
				Oh, hello there. This is the stack, that i use when working on projects.
			</p>

			<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
				{#each stack as p}
					<div class="self-auto">
						<div
							class="block max-w-sm p-3 border rounded-br-lg hover:rounded-tl-lg shadow bg-surface-800 border-surface-800 hover:bg-surface-600"
						>
							<a href={p.link}>
								<div class="flex">
									{#if p.image.startsWith('https://')}
										<img
											src={p.image}
											class="h-[30px] bg-gray-700 rounded-full"
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

		<div class="p-5" />

		<!-- PC Specs -->
		<div id="pc-specs">
			<h1 class="text-warning-600 text-3xl font-bold tracking-tight">PC Specs</h1>
			<p class="text-warning-300 font-bold tracking-tight">Here are some of the specs of my PC.</p>

			<div class="mt-2" />

			{#each Object.entries(specs) as spec}
				<p class="ml-3 pt-1 text-warning-400 font-bold italic text-md">
					- <span class="text-warning-500 tracking-tight">{spec[0]}:</span>
					{spec[1]}
				</p>
			{/each}
		</div>
	</div>
</main>
