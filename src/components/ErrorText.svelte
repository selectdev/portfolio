<script lang="ts">
	export let Title: string;
	export let Description: string;
</script>

<div
	class="block max-w-sm p-3 border rounded-lg shadow-md bg-surface-700 border-surface-800 hover:bg-surface-600"
>
	<h2 class="text-primary-500 text-base font-monster font-bold">{Title}</h2>
	<p class="mt-2 text-base font-cabin font-semibold text-secondary-500">{Description}</p>
</div>
