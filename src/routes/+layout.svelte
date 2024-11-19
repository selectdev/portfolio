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
		<div class="min-h-screen bg-gradient-to-b from-surface-800 to-surface-500">
			<Header {data} />
			<slot />
		</div>
	{:else}
		<Meta
			Description="I'm a {data.age}-year-old full-stack developer with six years of experience, working with a variety of programming languages and technologies. I'm passionate about technology and excited to start a new project. {data.availableForHire
				? "Right now, I'm available for hire and ready to bring fresh ideas to your team."
				: ''}"
		/>
		<Loading on:close={() => (loaded = true)} />
	{/if}
</section>
