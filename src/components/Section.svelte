<script lang="ts">
	export let Title: string;
	export let Description: string;
</script>

<div id={Title.toLowerCase()}>
	<!-- Breadcrumb -->
	<h1 class="text-primary-600 text-3xl font-cabin font-bold tracking-tight md:text-4xl">{Title}</h1>
	<p class="text-primary-300 font-monster font-semibold tracking-tight md:text-xl">{Description}</p>

	<!-- Main content -->
	<slot />

	<!-- Seperate -->
	<div class="p-3" />
</div>
