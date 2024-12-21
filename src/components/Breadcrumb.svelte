<script lang="ts">
	export let Title: string = '';
	export let Description: string = '';

	const ImageLoadError = (err: any) => {
		err.target.src = '/logo.png';
	};
</script>

<div class="flex">
	<!--<img
		class="h-10 rounded-full"
		src="/logo.png"
		alt="Selectdev Logo"
		height="40px"
		width="40px"
		on:error={ImageLoadError}
	/>-->

	<h2 class="text-primary-400 font-monster font-bold text-4xl">{Title}</h2>
</div>

<h6 class="text-primary-200 font-cabin font-medium text-base">
	{@html Description}
</h6>
