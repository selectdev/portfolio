<script lang="ts">
	import Swal from 'sweetalert2';
	import Meta from '../../components/Meta.svelte';
	import Footer from '../../components/Footer.svelte';
	import type { LayoutData } from '../$types';
	import type { PageData } from './$types';

	type Question = {
		name: string;
		description: string;
		type: string;
		autocomplete: string | null;
		required: boolean;
		answer: any | null;
		options: string[] | null;
	};

	export let data: LayoutData & PageData;

	let apps = data.apps;

	const setValue = (id: string, question: Question, answer: any) => {
		const form = apps.find((i) => i.id === id);
		if (!form) throw new Error('Form could not be found.');

		const questionIndex = form.questions.findIndex((q) => q.name === question.name);

		if (questionIndex !== -1) form.questions[questionIndex].answer = answer;
		else throw new Error('Question could not be found.');
	};

	const sendApp = (id: string) => {
		const form = apps.find((i) => i.id === id);
		if (!form) throw new Error('Form could not be found.');

		const questions = form.questions;
		if (!questions) throw new Error('Questions could not be found.');

		const requirementCheck: boolean = questions.every((p) => {
			if (p.required) {
				if (!p.answer || p.answer === '') return false;
				else return true;
			} else return true;
		});

		if (requirementCheck) {
			console.log(questions);

			Swal.fire({
				title: 'Form Submitted',
				text: 'Your form has been submitted successfully.',
				icon: 'success'
			});
		} else {
			Swal.fire({
				title: 'Incomplete Form',
				text: 'Please fill out all required fields before submitting.',
				icon: 'warning',
				confirmButtonText: 'Continue'
			});

			throw new Error(
				'Some questions were NOT filled, as required. To continue, finish answering the questions.'
			);
		}
	};
</script>

<Meta
	Title="Applications!"
	Description="Access all of the available applications for selectdev and Purrquinox services!"
/>

<main class="p-4">
	<!-- Applications / Forms -->
	{#each data.apps as app}
		<div id={app.id}>
			<h1 class="text-primary-600 text-3xl font-bold tracking-tight">{app.name}</h1>
			<p class="text-primary-300 font-bold tracking-tight">{app.description}</p>

			<div class="pt-5" />

			<form>
				<div class="px-2 grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2">
					{#each app.questions as question}
						<div>
							<label
								for={question.name.replaceAll(' ', '_')}
								class="block text-sm font-semibold leading-6 text-secondary-300"
								>{question.name}{question.required ? '*' : ''}</label
							>

							<div class="mt-2.5">
								<input
									type={question.type}
									name={question.name.replaceAll(' ', '_')}
									id={question.name.replaceAll(' ', '_')}
									autocomplete={question.autocomplete}
									required={question.required}
									class="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-600 text-warning-300 selection:shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									on:input={(i) => setValue(app.id, question, i.currentTarget.value)}
								/>
							</div>
						</div>
					{/each}
				</div>

				<button
					type="button"
					class="mt-3 text-white bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-400 font-semibold rounded-lg text-base px-4 py-2.5 text-center me-2 mb-2"
					on:click={() => sendApp(app.id)}>Submit</button
				>
			</form>
		</div>

		<div class="p-5" />
	{/each}
</main>

<!-- Footer -->
<Footer {data} />
