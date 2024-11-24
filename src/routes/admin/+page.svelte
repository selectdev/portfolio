<script lang="ts">
	import Meta from '../../components/Meta.svelte';
	import Section from '../../components/Section.svelte';
	import Footer from '../../components/Footer.svelte';
	import Modal from '../../components/Modal.svelte';
	import type { PageData } from '../$types';
	import Card from '../../components/Card.svelte';

	// Post Modal Inputs
	const postModalInputs: {
		name: string;
		placeholder: string;
		type: string;
		extraClass: string | null;
	}[] = [
		{
			name: 'Title',
			placeholder: 'Enter your blog post title here',
			type: 'text',
			extraClass: null
		},
		{
			name: 'Short Description',
			placeholder: 'Describe your blog post in a few sentences',
			type: 'text',
			extraClass: null
		},
		{
			name: 'Long Description',
			placeholder: 'Write your blog post in an markdown format',
			type: 'text',
			extraClass: null
		},
		{
			name: 'Image URL',
			placeholder: 'Enter the URL of your blog post image',
			type: 'text',
			extraClass: null
		},
		{
			name: 'Flairs',
			placeholder: 'Enter comma-separated tags for your blog post',
			type: 'text',
			extraClass: null
		}
	];

	// Modify Profile Modal Inputs
	const modifyProfileModalInputs: {
		name: string;
		placeholder: string;
		type: string;
		extraClass: string | null;
	}[] = [
		{
			name: 'Name',
			placeholder: 'Enter your name',
			type: 'text',
			extraClass: null
		},
		{
			name: 'Biography',
			placeholder: 'Tell us about yourself',
			type: 'text',
			extraClass: null
		},
		{
			name: 'Image URL',
			placeholder: 'Enter the URL of your profile image',
			type: 'text',
			extraClass: null
		},
		{
			name: 'Badges',
			placeholder: 'Enter comma-separated badges for your profile',
			type: 'text',
			extraClass: null
		}
	];

	// Toggle post modal state
	let postModalOpen: boolean = false;
	let profileModifyModalOpen: boolean = false;
	const openPostModal = () => {
		postModalOpen = !postModalOpen;
	};
	const openProfileModifyModal = () => {
		profileModifyModalOpen = !profileModifyModalOpen;
	};

	// Import data for access here
	export let data: PageData;
</script>

<Meta
	Title="Admin Dashboard"
	Description="I'm a {data.age}-year-old full-stack developer with six years of experience, working with a variety of programming languages and technologies. I'm passionate about technology and excited to start a new project. {data.availableForHire
		? "Right now, I'm available for hire and ready to bring fresh ideas to your team."
		: ''}"
/>

<!-- Content -->
<main class="p-6">
	<Section Title="Admin" Description="Welcome to my extremely insecure admin dashboard. *pissbaby*">
		<!-- Blog -->
		<section class="mt-3 flex flex-col">
			<div class="flex">
				<h2 class="text-white font-monster text-2xl font-bold mb-4">
					Latest Blog Posts
					<button
						class="bg-black text-white text-base font-bold font-monster rounded-full px-3 py-1"
						on:click={openPostModal}>+ Create</button
					>
				</h2>
			</div>

			<!-- Create Blog Modal -->
			<Modal Title="Create Blog Post" Open={postModalOpen} on:close={openPostModal}>
				<form>
					{#each postModalInputs as inputD}
						<label
							class="text-black font-bold font-monster text-lg"
							for={inputD.name.replaceAll(' ', '-')}>{inputD.name}</label
						>
						<input
							type={inputD.type}
							placeholder={inputD.placeholder}
							id={inputD.name.replaceAll(' ', '-')}
							class="rounded-md text-base text-black font-semibold font-monster w-full {inputD.extraClass}"
						/>
						<div class="p-2" />
					{/each}

					<button
						class="bg-green-600 text-white text-base font-bold font-monster rounded-full px-3 py-1 mt-4"
						type="submit">Submit</button
					>
				</form>
			</Modal>

			<div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
				{#each data.blogPosts as post}
					<div class="self-auto">
						<Card
							Name={post.title}
							Description={post.short_description}
							Image={post.author.image}
							LongImage={post.image}
							Link="/blog/view/{post.id}"
							Flairs={post.flairs}
						/>
					</div>
				{/each}
			</div>
		</section>

		<!-- Manage Author Profile -->
		<section class="mt-3 flex flex-col">
			<div class="flex">
				<h2 class="text-white font-monster text-2xl font-bold mb-4">
					Manage Profile
					<button
						class="bg-black text-white text-base font-bold font-monster rounded-full px-3 py-1"
						on:click={openProfileModifyModal}>+ Modify</button
					>
				</h2>
			</div>

			<!-- Modify Profile Modal -->
			<Modal Title="Modify Profile" Open={profileModifyModalOpen} on:close={openProfileModifyModal}>
				<form>
					{#each modifyProfileModalInputs as inputD}
						<label
							class="text-black font-bold font-monster text-lg"
							for={inputD.name.replaceAll(' ', '-')}>{inputD.name}</label
						>
						<input
							type={inputD.type}
							placeholder={inputD.placeholder}
							id={inputD.name.replaceAll(' ', '-')}
							class="rounded-md text-base text-black font-semibold font-monster w-full {inputD.extraClass}"
						/>
						<div class="p-2" />
					{/each}

					<button
						class="bg-green-600 text-white text-base font-bold font-monster rounded-full px-3 py-1 mt-4"
						type="submit">Submit</button
					>
				</form>
			</Modal>
		</section>
	</Section>
</main>

<!-- Footer -->
<Footer {data} />
