<script lang="ts">
	import Loading from '../components/Loading.svelte';

	import '@fortawesome/fontawesome-free/css/all.min.css';
	import '../app.css';
	import 'animate.css';
	import { page } from '$app/stores';

	let loaded: boolean = false;
	if ($page.url.pathname != '/') loaded = true;
</script>

<section id="content">
	{#if loaded}
		<div class="min-h-screen bg-gray-800">
			<slot />
		</div>
	{:else}
		<Loading on:close={() => (loaded = true)} />
	{/if}
</section>
