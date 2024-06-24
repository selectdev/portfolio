<script lang="ts">
	import Loading from '../components/Loading.svelte';
	import Header from '../components/Header.svelte';

	import '@fortawesome/fontawesome-free/css/all.min.css';
	import '../app.css';
	import 'animate.css';
	import { page } from '$app/stores';
	import Meta from '../components/Meta.svelte';
	import type { PageData } from './$types';
	import { browser } from '$app/environment';

	let loaded: boolean = false;
	if ($page.url.pathname != '/') loaded = true;

	export let data: PageData;

	if (browser) {
		if (data.theme) document.body.setAttribute('data-theme', data.theme);
	}
</script>

<section id="content">
	{#if loaded}
		<div class="min-h-screen bg-surface-800">
			<Header />
			<slot />
		</div>
	{:else}
		<Meta />
		<Loading on:close={() => (loaded = true)} />
	{/if}
</section>
