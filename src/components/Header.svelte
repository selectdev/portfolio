<script lang="ts">
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
		},
		{
			name: 'Theme',
			options: [
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
			]
		}
	];

	let ThemeMenuOpened: boolean = false;

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

<nav>
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-primary-400 font-semibold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-400"
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

			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<img class="block h-8 w-auto rounded-full lg:hidden" src="/logo.png" alt="selectdev" />
					<img class="hidden h-8 w-auto rounded-full lg:block" src="/logo.png" alt="selectdev" />
					<h2 class="pl-2 text-primary-400 font-bold leading-6">selectdev</h2>
				</div>

				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						{#each navigation as item}
							{#if item.options}
								<div class="relative">
									<button
										on:click={() => {
											if (ThemeMenuOpened) ThemeMenuOpened = false;
											else ThemeMenuOpened = true;
										}}
										class={classNames(
											item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700',
											'px-3 py-2 rounded-md text-sm font-medium'
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
										<i class="fas fa-angle-down ml-1" />
									</button>

									{#if ThemeMenuOpened}
										<div
											class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-surface-800 py-1 shadow-lg ring-1 ring-surface-800 ring-opacity-5 focus:outline-none"
											aria-orientation="vertical"
											tabindex="-1"
										>
											{#each item.options as option}
												<button
													class="block px-4 py-2 text-sm text-primary-600 font-semibold hover:text-primary-400 hover:underline"
													on:click={() => {
														if (typeof option.href === 'function') option.href();
														else if (typeof item.href === 'string')
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
											? 'bg-surface-800 text-primary-600 hover:bg-surface-700'
											: 'text-primary-600 hover:bg-surface-600',
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
		</div>
	</div>

	<div class="hidden" id="mobile-menu">
		<div class="space-y-1 px-2 pt-2 pb-3">
			{#each navigation as item}
				{#if item.options}
					<div class="relative">
						<button
							on:click={() => {
								if (ThemeMenuOpened) ThemeMenuOpened = false;
								else ThemeMenuOpened = true;
							}}
							class={classNames(
								item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700',
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
										class="block px-4 py-2 text-sm text-primary-600 font-semibold hover:text-primary-400 hover:underline"
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
								? 'bg-surface-800 text-primary-400 hover:bg-surface-700'
								: 'text-primary-600 hover:bg-gray-600',
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
</nav>
