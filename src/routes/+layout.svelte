<script lang="ts">
	import Header from '../components/Header.svelte';
	import Loading from '../components/Loading.svelte';

	import '@fortawesome/fontawesome-free/css/all.min.css';
	import '../app.css';
	import 'animate.css';

	let loaded: boolean = false;
</script>

<section id="content">
	{#if loaded}
		<header>
			<Header />
		</header>

		<div class="p-2" />

		<main class="m-4">
			<slot />
		</main>
	{:else}
		<Loading on:close={() => (loaded = true)} />
	{/if}
</section>
