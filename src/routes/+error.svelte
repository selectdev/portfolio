<script lang="ts">
	import { page } from '$app/stores';
	import Meta from '../components/Meta.svelte';
	import Footer from '../components/Footer.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	export let subText: string =
		"But don't worry, you can find plenty of other things on our homepage.";
</script>

<Meta
	Title="Error {$page.status} - selectdev"
	Description={$page?.error?.message || 'Unknown Error'}
/>

<section class="flex items-center h-full p-16">
	<div class="container flex flex-col items-center justify-center px-3 mx-auto my-4">
		<div class="max-w-md text-center">
			<h2 class="mb-3 font-extrabold text-9xl text-primary-600">
				<span class="sr-only">Error</span>{$page.status}
			</h2>
			<p class="text-2xl font-bold tracking-tight md:text-3xl text-primary-400">
				{$page?.error?.message || 'Unknown Error'}
			</p>
			<p class="mt-2 mb-8 font-semibold text-secondary-400">{subText || 'Unknown Error!'}</p>
			<a
				rel="noopener noreferrer"
				href="/"
				class="px-8 py-3 font-semibold rounded bg-gradient-to-r from-primary-600 to-primary-400 text-white hover:underline"
				>Back Home!</a
			>
		</div>
	</div>
</section>

<!-- Footer -->
<Footer {data} />
