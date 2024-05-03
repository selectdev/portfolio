<script lang="ts">
	import { page } from '$app/stores';
	import Meta from '../components/Meta.svelte';

	export let subText: string =
		"But don't worry, you can find plenty of other things on our homepage.";
</script>

<Meta
	Title="Error {$page.status} - selectdev"
	Description={$page?.error?.message || 'Unknown Error'}
/>

<section class="flex items-center h-full p-16">
	<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div class="max-w-md text-center">
			<h2 class="mb-8 font-extrabold text-9xl text-white">
				<span class="sr-only">Error</span>{$page.status}
			</h2>
			<p class="text-2xl font-semibold md:text-3xl text-white">
				{$page?.error?.message || 'Unknown Error'}
			</p>
			<p class="mt-4 mb-8 text-white">{subText || 'Unknown Error!'}</p>
			<a
				rel="noopener noreferrer"
				href="/"
				class="px-8 py-3 font-semibold rounded bg-error-400 text-black">Back Home!</a
			>
		</div>
	</div>
</section>
