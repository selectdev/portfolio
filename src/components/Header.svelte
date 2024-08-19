<script lang="ts">
	import type { LayoutData } from '../routes/$types';
	export let data: LayoutData;

	const navigation: {
		name: string;
		href?: string | (() => void);
		options?: {
			name: string;
			href: string | (() => void);
		}[];
		menuOpen?: boolean;
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
			name: 'Sahara',
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
			name: 'Crimson (default)',
			href: () => {
				document.cookie = 'theme=crimson';
				document.body.setAttribute('data-theme', 'crimson');
			}
		}
	];

	navigation.push({
		name: 'Themes',
		href: () => {},
		options: themes.map((theme) => ({
			name: theme.name,
			href: theme.href
		})),
		menuOpen: false
	});

	navigation.push({
		name: 'Socials',
		href: () => {},
		options: data.socials.map((social) => ({
			name: social.name,
			href: social.url
		})),
		menuOpen: false
	});

	const classNames = (...classes: string[]) => {
		return classes.filter(Boolean).join(' ');
	};

	const openMobileMenu = () => {
		const menu = document.getElementById('mobile-menu') as HTMLDivElement;
		const menuIcon: any = document.getElementById('menuIcon') as HTMLElement;
		const closeIcon: any = document.getElementById('closeIcon') as HTMLElement;
		const currentClass = menu.className;

		if (currentClass === 'hidden md:hidden') {
			menu.className = 'block md:hidden';
			menuIcon.className.baseVal = 'hidden h-6 w-6';
			closeIcon.className.baseVal = 'block h-6 w-6';
		} else {
			menu.className = 'hidden md:hidden';
			menuIcon.className.baseVal = 'block h-6 w-6';
			closeIcon.className.baseVal = 'hidden h-6 w-6';
		}
	};
</script>

<nav class="bg-surface-900">
	<div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-4">
		<div class="flex h-16 items-center justify-between">
			<div class="flex">
				<img class="h-8 w-8" src="/logo.png" alt="SelectDev" />
				<span class="mt-3 ml-2 text-primary-400 font-cursive non-italic font-extrabold">SELECTDEV</span>
			</div>

			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-4">
					{#each navigation as item}
						{#if item.options}
							<div class="relative">
								<button
									on:click={() => {
										if (item.menuOpen) item.menuOpen = false;
										else item.menuOpen = true;
									}}
									class={classNames(
										item.current
											? 'bg-surface-800 text-secondary-400 hover:bg-surface-700'
											: 'bg-surface-800 text-secondary-400 hover:bg-surface-700',
										'px-3 py-2 rounded-md text-sm font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
									<i class="fas fa-angle-down ml-1" />
								</button>

								{#if item.menuOpen}
									<div
										class="absolute right-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-surface-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
										aria-orientation="vertical"
										tabindex="-1"
									>
										{#each item.options as option}
											<button
												class="block px-4 py-2 text-sm text-secondary-500 font-semibold hover:text-secondary-400 hover:underline"
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
										? 'bg-surface-800 text-secondary-400 hover:bg-surface-700'
										: 'bg-surface-800 text-secondary-400 hover:bg-surface-700',
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

			<div class="-mr-2 flex md:hidden">
				<button
					type="button"
					class="relative inline-flex items-center justify-center rounded-md bg-surface-900 p-2 text-white hover:bg-gray-700 outline-none"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={openMobileMenu}
				>
					<span class="absolute -inset-0.5"></span>
					<span class="sr-only">Open main menu</span>

					<svg
						class="block h-6 w-6"
						fill="none"
						id="menuIcon"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>

					<svg
						class="hidden h-6 w-6"
						fill="none"
						id="closeIcon"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<div class="hidden md:hidden" id="mobile-menu">
		<div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
			{#each navigation as item}
				{#if item.options}
					<div class="relative">
						<button
							on:click={() => {
								if (item.menuOpen) item.menuOpen = false;
								else item.menuOpen = true;
							}}
							class={classNames(
								item.current
									? 'bg-surface-800 text-secondary-400 hover:bg-surface-700'
									: 'bg-surface-800 text-secondary-400 hover:bg-surface-700',
								'px-3 py-2 rounded-md text-sm font-medium w-half'
							)}
							aria-current={item.current ? 'page' : undefined}
						>
							{item.name}
							<i class="fas fa-angle-down ml-1" />
						</button>

						{#if item.menuOpen}
							<div
								class="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-surface-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
								aria-orientation="vertical"
								tabindex="-1"
							>
								{#each item.options as option}
									<button
										class="block px-4 py-2 text-sm text-secondary-500 font-semibold hover:text-secondary-400 hover:underline w-half"
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
								? 'bg-surface-800 text-secondary-400 hover:bg-surface-700'
								: 'bg-surface-800 text-secondary-400 hover:bg-surface-700',
							'px-3 py-2 rounded-md text-sm font-medium w-half'
						)}
						aria-current={item.current ? 'page' : undefined}
					>
						{item.name}
					</button>
				{/if}
			{/each}
		</div>
	</div>
</nav>
