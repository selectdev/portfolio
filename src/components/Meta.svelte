<script lang="ts">
	import { page } from '$app/stores';

	export let Title: string = 'selectdev. a full-stack developer';
	export let Description: string =
		"Hello, i'm Select. I'm a full-stack developer that occasionally touches grass.";
	export let Logo: string = '/logo.png';
	export let Image: string | null = null;
</script>

<svelte:head>
	<title>{Title}</title>
	<meta name="og:title" content={Title} />
	<meta name="og:site_name" content="selectdev" />
	<meta name="og:type" content="website" />
	<meta name="og:url" content="{$page.url.protocol}//{$page.url.host}/" />
	<meta name="og:image" content={Logo} />
	<meta name="og:description" content={Description} />

	<meta name="title" content={Title} />
	<meta name="site_name" content="selectdev" />
	<meta name="type" content="website" />
	<meta name="url" content="{$page.url.protocol}//{$page.url.host}/" />
	<meta name="description" content={Description} />
	<meta name="sitemap" content="/sitemap.xml" />
	<meta name="keywords" content="selectdev, full stack developer" />

	<meta name="theme-color" content="#edafb8" />
	<meta name="apple-mobile-web-app-status-bar" content="#edafb8" />

	{#if Image}
		<meta name="image" content={Image} />
	{/if}
</svelte:head>
