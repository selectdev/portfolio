<script lang="ts">
	export let Name: string;
	export let Description: string;
	export let Image: string | null = null;
	export let LongImage: string | null = null;
	export let Link: string | null = null;
	export let Flairs: string[] | null = null;

	const ImageLoadError = (err: any) => {
		err.target.src = '/logo.png';
	};
</script>

<div
	class="block max-w-sm p-3 border rounded-lg shadow-md bg-surface-700 border-surface-800 hover:bg-surface-600"
>
	<a href={Link || '/'}>
		{#if Flairs && Flairs.length != 0}
			<div class="flex">
				{#each Flairs as flair}
					<span
						class="first:ml-0 ml-2 bg-primary-600 text-white p-1 text-xs px-2 rounded-full font-monster uppercase font-bold"
						>{flair}</span
					>
				{/each}
			</div>
		{/if}

		<div class="{Flairs && Flairs.length != 0 ? 'mt-3' : ''} flex items-center">
			{#if Image}
				{#if Image.startsWith('fa-')}
					<i class="mb-0.5 fa-xl max-h-[25px] text-white rounded-full {Image}"></i>
				{:else}
					<img
						src={Image}
						class="max-h-[25px] bg-surface-700 rounded-full"
						alt="{Name} logo"
						loading="lazy"
						on:error={ImageLoadError}
					/>
				{/if}
			{/if}

			<h5
				class="{Image
					? 'ml-2'
					: ''} text-md font-monster font-semibold overflow-x-auto text-secondary-400"
			>
				{Name}
			</h5>
		</div>

		<p class="mt-1 text-base font-monster font-medium tracking-tight text-secondary-500">
			{Description}
		</p>

		{#if LongImage}
			<img
				src={LongImage}
				class="mt-3 w-full max-h-[200px] object-cover"
				alt="{Name} Image"
				loading="lazy"
				on:error={ImageLoadError}
			/>
		{/if}
	</a>
</div>
