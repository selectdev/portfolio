<script lang="ts">
	let ThemeMenuOpened: boolean = true;

	const navigation: {
		name: string;
		href?: string | (() => void);
		options?: {
			name: string;
			href: string | (() => void);
		}[];
		current?: boolean;
	}[] = [
		{
			name: 'Home',
			href: '/',
			current: true
		}
	];

	const themes: {
		name: string;
		href: string | (() => void);
	}[] = [
		{
			name: 'Skeleton',
			href: () => {
				document.cookie = 'theme=skeleton';
				document.body.setAttribute('data-theme', 'skeleton');
			}
		},
		{
			name: 'Wintry',
			href: () => {
				document.cookie = 'theme=wintry';
				document.body.setAttribute('data-theme', 'wintry');
			}
		},
		{
			name: 'Modern',
			href: () => {
				document.cookie = 'theme=modern';
				document.body.setAttribute('data-theme', 'modern');
			}
		},
		{
			name: 'Rocket',
			href: () => {
				document.cookie = 'theme=rocket';
				document.body.setAttribute('data-theme', 'rocket');
			}
		},
		{
			name: 'Seafoam',
			href: () => {
				document.cookie = 'theme=seafoam';
				document.body.setAttribute('data-theme', 'seafoam');
			}
		},
		{
			name: 'Vintage',
			href: () => {
				document.cookie = 'theme=vintage';
				document.body.setAttribute('data-theme', 'vintage');
			}
		},
		{
			name: 'Sahara (default)',
			href: () => {
				document.cookie = 'theme=sahara';
				document.body.setAttribute('data-theme', 'sahara');
			}
		},
		{
			name: 'Haml Indigo',
			href: () => {
				document.cookie = 'theme=hamlindigo';
				document.body.setAttribute('data-theme', 'hamlindigo');
			}
		},
		{
			name: 'Gold Nouveau',
			href: () => {
				document.cookie = 'theme=gold-nouveau';
				document.body.setAttribute('data-theme', 'gold-nouveau');
			}
		},
		{
			name: 'Crimson',
			href: () => {
				document.cookie = 'theme=crimson';
				document.body.setAttribute('data-theme', 'crimson');
			}
		}
	];

	const classNames = (...classes: string[]) => {
		return classes.filter(Boolean).join(' ');
	};

	const openMobileMenu = () => {
		const menu = document.getElementById('mobile-menu') as HTMLDivElement;
		const menuIcon: any = document.getElementById('menuIcon') as HTMLElement;
		const closeIcon: any = document.getElementById('closeIcon') as HTMLElement;
		const currentClass = menu.className;

		if (currentClass === 'hidden') {
			menu.className = 'block';
			menuIcon.className.baseVal = 'hidden h-6 w-6';
			closeIcon.className.baseVal = 'block h-6 w-6';
		} else {
			menu.className = 'hidden';
			menuIcon.className.baseVal = 'block h-6 w-6';
			closeIcon.className.baseVal = 'hidden h-6 w-6';
		}
	};
</script>

<div class="pt-2" />

<nav id="new-menu" class="mx-2 border border-surface-600 border-spacing-1 rounded-md py-2">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center">
			<img class="block h-10 w-auto rounded-full" src="/logo.png" alt="selectdev" height="40px" />
			<h1 class="ml-2 font-extrabold tracking-tight text-lg text-primary-600">SELECT</h1>

			<button
				type="button"
				class="inline-flex mt-0.5 rounded-md p-2 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-inset"
				on:click={() => {
					if (ThemeMenuOpened) ThemeMenuOpened = false;
					else ThemeMenuOpened = true;
				}}
				aria-controls="theme-menu"
				aria-expanded="false"><i class="fa-solid fa-palette fa-md"></i></button
			>

			{#if ThemeMenuOpened}
				<div
					class="absolute top-12 left-8 z-10 w-48 rounded-md bg-surface-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					aria-orientation="vertical"
					tabindex="-1"
				>
					{#each themes as option}
						<button
							class="block px-4 py-2 text-sm text-warning-600 font-semibold hover:text-warning-400 hover:underline"
							on:click={() => {
								if (typeof option.href === 'function') option.href();
								else if (typeof option.href === 'string') window.location.href = option.href;
								else return;
							}}
						>
							{option.name}
						</button>
					{/each}
				</div>
			{/if}

			<button
				type="button"
				class="inline-flex ml-auto rounded-md p-2 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-warning-500"
				on:click={openMobileMenu}
				aria-controls="mobile-menu"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="block h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
					id="menuIcon"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
				<svg
					class="hidden h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
					id="closeIcon"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>

		<div class="hidden" id="mobile-menu">
			<div class="space-y-1 px-2 pt-4 pb-3">
				{#each navigation as item}
					{#if item.options}
						<div class="relative">
							<button
								on:click={() => {
									if (ThemeMenuOpened) ThemeMenuOpened = false;
									else ThemeMenuOpened = true;
								}}
								class={classNames(
									item.current
										? 'bg-surface-800 text-warning-400 hover:bg-surface-700'
										: 'bg-surface-800 text-warning-400 hover:bg-surface-700',
									'px-3 py-2 rounded-md text-sm font-medium'
								)}
								aria-current={item.current ? 'page' : undefined}
							>
								{item.name}
								<i class="fas fa-angle-down ml-1" />
							</button>

							{#if ThemeMenuOpened}
								<div
									class="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-surface-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
									aria-orientation="vertical"
									tabindex="-1"
								>
									{#each item.options as option}
										<button
											class="block px-4 py-2 text-sm text-warning-600 font-semibold hover:text-warning-400 hover:underline"
											on:click={() => {
												if (typeof option.href === 'function') option.href();
												else if (typeof option.href === 'string')
													window.location.href = option.href;
												else return;
											}}
										>
											{option.name}
										</button>
									{/each}
								</div>
							{/if}
						</div>
					{:else}
						<button
							on:click={() => {
								if (typeof item.href === 'function') item.href();
								else if (typeof item.href === 'string') window.location.href = item.href;
								else return;
							}}
							class={classNames(
								item.current
									? 'bg-surface-800 text-warning-400 hover:bg-surface-700'
									: 'bg-surface-800 text-warning-400 hover:bg-surface-700',
								'px-3 py-2 rounded-md text-sm font-medium'
							)}
							aria-current={item.current ? 'page' : undefined}
						>
							{item.name}
						</button>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</nav>
