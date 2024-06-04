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
			flair: 'MY PROJECT'
		},
		{
			name: 'Sparkyflight',
			description:
				"Hey, neurodivergent friends! Tired of your thoughts being dismissed? Welcome to Sparkyflight – the virtual haven where your ideas soar without fear of judgment. Speak your mind, share your brilliance, and let's fly high together!",
			link: 'https://sparkyflight.xyz/',
			image: 'https://sparkyflight.xyz/logo.png',
			flair: 'MY PROJECT'
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
			description: 'Search our vast list of bots for an exciting start to your server.',
			link: 'https://infinitybots.gg/',
			image: 'https://cdn.infinitybots.gg/core/full_logo.webp',
			flair: 'LEAD DEVELOPER'
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
			image: 'https://tse4.mm.bing.net/th?id=OIP.9zN9M5IW0FwVUWiO-xOoMAHaHa&pid=15.1'
		},
		{
			name: 'Python',
			description:
				'Python is a high-level programming language that lets you work more efficiently and effectively.',
			link: 'https://www.python.org/',
			image: 'https://www.python.org/static/img/python-logo.png'
		}
	];
</script>

<Meta />

<main class="p-6">
	<div id="welcome">
		<h1 class="mt-5 ml-1 text-warning-600 text-3xl font-extrabold tracking-tighter">Welcome!</h1>

		<div id="logo">
			<img
				src="/logo.png"
				class="absolute h-[100px] mt-3 mr-2.5 p-1 top-0 right-0 bg-gray-700 rounded-full"
				height="100px"
				alt="selectdev logo"
			/>
		</div>
	</div>

	<div class="p-10" />

	<div id="about-me">
		{#if available}
			<span class="bg-green-500 text-white p-1 text-xs px-1.5 rounded-r-full font-bold"
				>Available for Hire!</span
			>
		{/if}

		<h1 class="text-warning-600 text-3xl font-bold tracking-tight">
			Hello, there. I'm <span class="text-red-600">Select</span>!
		</h1>
		<p class="text-warning-300 font-bold tracking-tight">
			I'm a {age} year old <span class="text-red-300">full-stack software developer</span>. {available
				? 'Now available for hire.'
				: ''} Don't worry, there aren't any bugs here &#128064;
		</p>
	</div>

	<div class="p-5" />

	<div id="projects">
		<h1 class="text-warning-600 text-3xl font-bold tracking-tight">Projects</h1>
		<p class="text-warning-300 font-bold tracking-tight">
			Here are some of the projects I've worked on.
		</p>

		<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<div class="self-auto">
					<div
						class="block max-w-sm p-3 border rounded-lg shadow bg-surface-800 border-surface-800 hover:bg-surface-600"
					>
						<a href={project.link}>
							{#if project.flair}
								<span class="bg-indigo-500 text-white p-1 text-xs px-1.5 rounded-r-full font-bold"
									>{project.flair}</span
								>
								<div class="p-2" />
							{/if}

							<div class="flex">
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

		<div id="tech-stack">
			<h1 class="text-warning-600 text-3xl font-bold tracking-tight">Tech Stack</h1>
			<p class="text-warning-300 font-bold tracking-tight">
				Oh, hello there. This is the stack, that i use when working on projects.
			</p>

			<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
				{#each stack as p}
					<div class="self-auto">
						<div
							class="block max-w-sm p-3 border rounded-lg shadow bg-surface-800 border-surface-800 hover:bg-surface-600"
						>
							<a href={p.link}>
								<div class="flex">
									<img
										src={p.image}
										class="h-[30px] bg-gray-700 rounded-full"
										height="30px"
										alt="{p.name} logo"
									/>

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
	</div>
</main>
