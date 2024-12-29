<script lang="ts">
	import { Vibrant } from 'node-vibrant/browser';
	import chroma from 'chroma-js';

	const setColors = async (data: any, url: string) => {
		const vibrant = new Vibrant(url);
		const palette = await vibrant.getPalette();
		data['gradientStart'] =
			chroma((palette as any).DarkVibrant?.hex)
				.darken(1)
				.hex() || 'purple';
		data['gradientEnd'] =
			chroma((palette as any).DarkMuted?.hex)
				.darken(1)
				.hex() || 'magenta';

		data['textColor'] =
			chroma.contrast(data['gradientStart'], '#ffffff') < 4.5 ? '#000000' : '#ffffff';
	};

	export let recent: any;
	export let current: any;
	export let top: any;

	const getRecent = async (): Promise<any> => {
		if (recent) {
			for (const i of recent.items) await setColors(i, i.track.album.images[0].url);
			return new Promise((resolve) => resolve(recent));
		} else return new Promise((resolve) => resolve(null));
	};
	const getCurrent = async (): Promise<any> => {
		if (current) {
			await setColors(current, current.item.album.images[0].url);
			return new Promise((resolve) => resolve(current));
		} else return new Promise((resolve) => resolve(null));
	};
	const getTop = async (): Promise<any> => {
		if (top) {
			for (const i of top.items) await setColors(i, i.track.album.images[0].url);
			return new Promise((resolve) => resolve(top));
		} else return new Promise((resolve) => resolve(null));
	};
</script>

{#await getRecent()}
	<div>Loading...</div>
{:then d}
	<div class="p-2" />

	<div
		class="inline-block w-full p-2 rounded-md border shadow-md bg-gradient-to-r from-slate-900 to-stone-900"
	>
		<a
			class="inline-block text-sm font-monster tracking-tighter font-extrabold text-left text-white uppercase"
			href="https://open.spotify.com/"
		>
			<i class="fa-brands fa-spotify"></i> Music
			<i class="fa-solid fa-xs fa-up-right-from-square"></i>
		</a>

		{#await getCurrent()}
			<div>Loading...</div>
		{:then p}
			{#if p}
				<section class="mt-2">
					<h2
						class="text-sm font-monster tracking-tighter font-extrabold text-right text-white uppercase"
					>
						Current Vibes
					</h2>

					<div class="flex justify-center items-center">
						<a
							class="inline-block border shadow-md px-2 py-1 rounded-md bg-opacity-80 opacity-100 transition-opacity duration-300"
							style="background: linear-gradient(to right, {p.gradientStart}, {p.gradientEnd}); color: {p.textColor};"
							href={p.item.external_urls.spotify}
						>
							<div class="opacity-100">
								<div class="flex items-center">
									<div class="boxContainer">
										<div class="box box1"></div>
										<div class="box box2"></div>
										<div class="box box3"></div>
										<div class="box box4"></div>
									</div>

									<img
										src={p.item.album.images[0].url}
										class="ml-2 rounded-md border border-white/75 shadow-sm h-8 w-8"
										alt="Cover Art"
									/>

									<div class="ml-2 flex flex-col justify-center">
										<p class="font-cabin font-bold text-base">
											{p.item.name}
										</p>
										<p class="font-monster text-sm font-medium">
											{p.item.artists[0].name}
										</p>
									</div>
								</div>
							</div>
						</a>
					</div>
				</section>
			{/if}
		{/await}

		{#if d}
			<section class="mt-3">
				<h2
					class="text-sm font-monster tracking-tighter font-extrabold text-right text-white uppercase"
				>
					Recent Tunes
				</h2>

				<div class="grid grid-cols-2 gap-2">
					{#each d.items as i, d}
						<!-- Minimal -->
						<!-- group-hover:hidden group-hover:opacity-0 -->
						<a
							class="inline-block border shadow-md px-2 py-1 {d === 1 || d === 3
								? 'rounded-l-sm rounded-r-lg'
								: 'rounded-r-sm rounded-l-lg'} bg-opacity-80 opacity-100 transition-opacity duration-300"
							style="background: linear-gradient(to right, {i.gradientStart}, {i.gradientEnd}); color: {i.textColor};"
							href={i.track.external_urls.spotify}
						>
							<div class="opacity-100">
								<div class="flex items-center">
									<img
										src={i.track.album.images[0].url}
										class="rounded-md border border-white/75 shadow-sm h-8 w-8"
										alt="Cover Art"
									/>

									<div class="w-full ml-2 flex flex-col justify-center">
										<p
											class="max-w-[83%] font-cabin font-bold text-xs text-nowrap text-clip overflow-hidden"
										>
											{i.track.name}
										</p>
										<p
											class="max-w-[83%] font-monster font-medium text-xs text-nowrap text-clip overflow-hidden"
										>
											{i.track.artists[0].name}
										</p>
									</div>
								</div>
							</div>
						</a>
					{/each}
				</div>
			</section>
		{/if}

		{#await getTop()}
			<div>Loading...</div>
		{:then l}
			{#if l}
				<section class="mt-3">
					<h2
						class="text-sm font-monster tracking-tighter font-extrabold text-right text-white uppercase"
					>
						Vibe Highlights
					</h2>

					<div class="grid grid-cols-2 gap-2">
						{#each l.items as m, n}
							<!-- Minimal -->
							<!-- group-hover:hidden group-hover:opacity-0 -->
							<a
								class="inline-block border shadow-md px-2 py-1 {n === 1 || n === 3
									? 'rounded-l-sm rounded-r-lg'
									: 'rounded-r-sm rounded-l-lg'} bg-opacity-80 opacity-100 transition-opacity duration-300"
								style="background: linear-gradient(to right, {m.gradientStart}, {m.gradientEnd}); color: {m.textColor};"
								href={m.track.external_urls.spotify}
							>
								<div class="opacity-100">
									<div class="flex items-center">
										<img
											src={m.track.album.images[0].url}
											class="rounded-md border border-white/75 shadow-sm h-8 w-8"
											alt="Cover Art"
										/>

										<div class="w-full ml-2 flex flex-col justify-center">
											<p
												class="max-w-[83%] font-cabin font-bold text-xs text-nowrap text-clip overflow-hidden"
											>
												{m.track.name}
											</p>
											<p
												class="max-w-[83%] font-monster font-medium text-xs text-nowrap text-clip overflow-hidden"
											>
												{m.track.artists[0].name}
											</p>
										</div>
									</div>
								</div>
							</a>
						{/each}
					</div>
				</section>
			{/if}
		{/await}
	</div>
{/await}

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
