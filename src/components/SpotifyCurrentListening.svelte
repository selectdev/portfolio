<script lang="ts">
	export let data: any;
</script>

{#if data}
	<div class="group">
		<!-- Minimal -->
		<a
			class="inline-block border shadow-md bg-black px-2 py-1 rounded-md group-hover:hidden opacity-100 group-hover:opacity-0 transition-opacity duration-300"
			href={data.item.external_urls.spotify}
		>
			<div class="flex items-center">
				<div class="boxContainer">
					<div class="box box1"></div>
					<div class="box box2"></div>
					<div class="box box3"></div>
					<div class="box box4"></div>
				</div>

				<img
					src={data.item.album.images[0].url}
					class="ml-2 rounded-md border border-white/75 shadow-sm h-8 w-8"
					alt="Cover Art"
				/>

				<div class="ml-2 flex flex-col justify-center">
					<p class="font-cabin font-bold text-white text-base">
						{data.item.name}
					</p>
					<p class="font-monster text-sm font-medium text-white/75">
						{data.item.artists[0].name}
					</p>
				</div>
			</div>
		</a>

		<!-- Card -->
		<a
			class="hidden bg-black max-w-sm p-3 border shadow-md rounded-md group-hover:block opacity-100 group-hover:opacity-100 transition-opacity duration-300"
			href={data.item.external_urls.spotify}
		>
			<div class="flex items-center justify-center">
				<div class="boxContainer">
					<div class="box box1"></div>
					<div class="box box2"></div>
					<div class="box box3"></div>
					<div class="box box4"></div>
				</div>
			</div>

			<div class="mt-2 flex items-center justify-center">
				<img
					src={data.item.album.images[0].url}
					class="flex ml-2 rounded-sm h-[120px] w-[120px] border border-white/75 shadow-sm"
					alt="Cover Art"
				/>
			</div>

			<div class="flex flex-col items-center justify-center mt-2">
				<p class="font-cabin text-center font-bold text-white text-base">
					{data.item.name}
				</p>
				<p class="font-monster text-center text-sm font-medium text-white/75">
					{data.item.artists[0].name}
				</p>
			</div>

			<div class="flex items-center justify-center">
				<button
					class="mt-2 bg-[#1ED760]/75 px-3 py-2 rounded-full text-white font-bold font-cabin border border-white border-opacity-5 hover:brightness-[80%] transition-all"
					>Listen on <span class="pl-0.5"><i class="fa-brands fa-spotify"></i> Spotify!</span></button
				>
			</div>
		</a>
	</div>
{/if}

<style>
	@keyframes quiet {
		25% {
			transform: scaleY(0.6);
		}
		50% {
			transform: scaleY(0.4);
		}
		75% {
			transform: scaleY(0.8);
		}
	}

	@keyframes normal {
		25% {
			transform: scaleY(1);
		}
		50% {
			transform: scaleY(0.4);
		}
		75% {
			transform: scaleY(0.6);
		}
	}

	@keyframes loud {
		25% {
			transform: scaleY(1);
		}
		50% {
			transform: scaleY(0.4);
		}
		75% {
			transform: scaleY(1.2);
		}
	}

	.boxContainer {
		display: flex;
		justify-content: space-between;
		height: 40px;
		--boxSize: 5px;
		--gutter: 2px;
		width: calc((var(--boxSize) + var(--gutter)) * 4);
	}

	.box {
		transform: scaleY(0.4);
		height: 100%;
		width: var(--boxSize);
		background: #12e2dc;
		animation-duration: 1.2s;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
		border-radius: 8px;
	}

	.box1 {
		animation-name: quiet;
	}

	.box2 {
		animation-name: normal;
	}

	.box3 {
		animation-name: quiet;
	}

	.box4 {
		animation-name: loud;
	}
</style>
