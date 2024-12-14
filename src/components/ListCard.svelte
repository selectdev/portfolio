<script lang="ts">
	export let Data: { [key: string]: string };
</script>

<ol class="ml-6 list-disc">
	{#each Object.entries(Data) as i}
		<li class="ml-3 pt-1 text-gray-400 font-cabin font-bold italic text-md md:text-xl">
			<span class="font-monster text-gray-500 tracking-tight">{i[0]}:</span>
			{i[1]}
		</li>
	{/each}
</ol>
