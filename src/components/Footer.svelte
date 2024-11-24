<script lang="ts">
	import type { LayoutData } from '../routes/$types';
	export let data: LayoutData;

	const categories: {
		name: string;
		items: {
			name: string;
			url: string;
		}[];
	}[] = [
		{
			name: 'Projects',
			items: data.projects.map((p) => {
				return {
					name: p.name,
					url: p.link
				};
			})
		},
		{
			name: 'Companies',
			items: data.companies.map((p) => {
				return {
					name: p.name,
					url: p.link
				};
			})
		},
		{
			name: 'Tech Stack',
			items: data.stack.map((p) => {
				return {
					name: p.name,
					url: p.link
				};
			})
		},
		{
			name: 'Follow Me!',
			items: data.socials.map((p) => {
				return {
					name: p.name,
					url: p.url
				};
			})
		}
	];
</script>

<footer class="bg-surface-900 text-primary-600">
	<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
		<div class="md:flex md:justify-between">
			<div class="mb-6 md:mb-0 lg:mb-0">
				<a href="https://selectdev.purrquinox.com/" class="flex items-center">
					<img src="/logo.png" class="h-8 me-3" alt="selectdev Logo" />
					<span class="self-center text-2xl font-semibold whitespace-nowrap">selectdev</span>
				</a>
			</div>

			<div class="md:ml-4 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
				{#each categories as category}
					<div>
						<h2 class="mb-3 text-sm font-semibold text-primary-600 uppercase">
							{category.name}
						</h2>

						<ul class="text-secondary-600 font-semibold">
							{#each category.items as item}
								<li class="mb-2">
									<a href={item.url} class="hover:underline">{item.name}</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>

			<hr class="my-6 border-gray-200 mx-auto md:my-8" />
			<div class="sm:flex sm:items-center sm:justify-between">
				<span class="text-sm text-primary-400 font-semibold sm:text-center"
					>© 2024 selectdev. All Rights Reserved.</span
				>

				<div class="flex mt-4 sm:justify-center sm:mt-0">
					{#each data.socials as social}
						<a href={social.url} class="text-secondary-600 hover:text-secondary-500 me-3">
							<i class="{social.icon} fa-lg" />
							<span class="sr-only">{social.name} icon</span>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</footer>
