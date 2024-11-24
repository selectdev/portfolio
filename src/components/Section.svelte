<script lang="ts">
	import Breadcrumb from './Breadcrumb.svelte';

	export let Title: string;
	export let Description: string;
</script>

<div id={Title.toLowerCase()}>
	<!-- Breadcrumb -->
	<Breadcrumb {Title} {Description} />

	<!-- Main content -->
	<slot />

	<!-- Seperate -->
	<div class="p-3" />
</div>
