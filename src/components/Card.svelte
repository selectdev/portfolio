<script lang="ts">
	export let Name: string;
	export let Description: string;
	export let Image: string | null = null;
        export let LongImage: string | null = null;
	export let Link: string | null = null;
	export let Flairs: string[] | null = null;
</script>

<div
	class="block max-w-sm p-3 border rounded-md shadow bg-surface-700 border-surface-800 hover:bg-surface-600"
>
	<a href={Link || '/'}>
                {#if Flairs && Flairs.length != 0}
		<div class="flex">
			{#each Flairs as flair}
				<span
					class="first:ml-0 ml-2 bg-primary-600 text-white p-1 text-xs px-2 rounded-md font-cabin font-bold"
					>{flair}</span
				>
			{/each}
		</div>
                {/if}

		<div class="{Flairs && Flairs.length != 0 ? 'mt-4': ''} flex">
			{#if Image}
				{#if Image.startsWith('fa-')}
					<i class="mt-3 fa-xl max-h-[30px] text-white rounded-full {Image}"></i>
				{:else}
					<img src={Image} class="max-h-[30px] bg-surface-700 rounded-full" alt="{Name} logo" />
				{/if}
			{/if}

			<h5
				class="{Image ? 'ml-2' : ''} text-lg font-cabin font-bold overflow-x-auto tracking-tight text-secondary-400"
			>
				{Name}
			</h5>
		</div>

		<p class="mt-2 text-base font-monster font-semibold text-secondary-500">{Description}</p>
	</a>
</div>
