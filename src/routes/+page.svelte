<script lang="ts">
	import Meta from '../components/Meta.svelte';

	const projects: {
        name: string;
        description: string;
        link: string;
        image: string;
        flair: string | null;
    }[] = [
		{
			name: 'Select List',
			description: "Discover top-tier bots for Discord and Revolt here. Elevate your server's capabilities with our curated picks. Plus, showcase your server with our listing service. Upgrade your server experience now!",
			link: 'https://select-list.xyz/',
			image: 'https://select-list.xyz/logo.png',
            flair: "MY PROJECT"
		},
        {
			name: 'Sparkyflight',
			description: "Hey, neurodivergent friends! Tired of your thoughts being dismissed? Welcome to Sparkyflight – the virtual haven where your ideas soar without fear of judgment. Speak your mind, share your brilliance, and let's fly high together!",
			link: 'https://sparkyflight.xyz/',
			image: 'https://sparkyflight.xyz/logo.png',
            flair: "MY PROJECT"
		},
        {
			name: 'AntiRaid',
			description: "AntiRaid is a Automatic Moderation Service created to protect your Discord Server from threats, unsafe bots and spamming using our advanced technology!",
			link: 'https://antiraid.xyz/',
			image: 'https://antiraid.xyz/logo.webp',
            flair: "OWNER"
		},
        {
			name: 'Infinity List',
			description: "Search our vast list of bots for an exciting start to your server.",
			link: 'https://infinitybots.gg/',
			image: 'https://cdn.infinitybots.gg/core/full_logo.webp',
            flair: "CONTRIBUTOR"
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
		<h1 class="text-warning-600 text-3xl font-bold tracking-tight">Hello, there. I'm Select!</h1>
		<p class="text-warning-300 font-bold tracking-tight">
			I'm a Full-Stack Software Developer (that occasionally touches grass.)
		</p>
	</div>

	<div class="p-5" />

	<div id="projects">
		<h1 class="text-warning-600 text-3xl font-bold tracking-tight">Projects</h1>
		<p class="text-warning-300 font-bold tracking-tight">
			Here are some of the projects I've worked on. (they are totally cool)
		</p>

		<div class="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
                <div class="self-auto">
					<div
						class="block max-w-sm p-3 border rounded-lg shadow bg-surface-800 border-surface-700 hover:bg-surface-700"
					>
						<a href={project.link}>
                            {#if project.flair}
                                <span class="bg-indigo-500 text-white p-1 text-xs rounded-full font-bold">{project.flair}</span>
                                <div class="p-2" />
                            {/if}

							<div class="flex">
								<img
									src={project.image}
									class="h-[30px] bg-gray-700 rounded-full"
									height="30px"
									alt="{project.name} logo"
								/>

								<h5 class="ml-2 text-lg font-bold overflow-x-auto tracking-tight text-secondary-400">
									{project.name}
								</h5>
							</div>
							<p class="mt-2 text-base font-semibold text-secondary-600">{project.description}</p>
						</a>
					</div>
				</div>
			{/each}
        </div>
	</div>
</main>
