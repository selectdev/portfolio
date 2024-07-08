export const load = async () => {
	type Question = {
		name: string;
		description: string;
		type: string;
		autocomplete: string | null;
		required: boolean;
		answer: any | null;
		options: string[] | null;
	};

	let apps: {
		name: string;
		description: string;
		id: string;
		questions: Question[];
	}[] = [
		{
			name: 'Purrquinox | Apply',
			description:
				'Apply to become a developer with Purrquinox! At Purrquinox, you will help develop a lot of our services such as Antiraid, Select List, Sparkyflight and more!',
			id: 'apply_purrstaff',
			questions: [
				{
					name: 'First Name',
					description: 'What is your First Name!',
					type: 'text',
					autocomplete: 'given-name',
					required: true,
					answer: null,
					options: null
				},
				{
					name: 'Last Name',
					description: 'What is your Last Name!',
					type: 'text',
					autocomplete: 'family-name',
					required: false,
					answer: null,
					options: null
				},
				{
					name: 'Email Address',
					description:
						'What is your Email Address? This will help us be able to respond back to you!',
					type: 'email',
					autocomplete: 'email',
					required: true,
					answer: null,
					options: null
				},
				{
					name: 'Discord Username',
					description:
						'What is your Discord Username? We will use this as a primary way to get in touch with you when working on projects!',
					type: 'text',
					autocomplete: null,
					required: true,
					answer: null,
					options: null
				}
			]
		},
		{
			name: 'Contact Me',
			description: 'Here, with this contact form; you can easily contact me.',
			id: 'contactme',
			questions: [
				{
					name: 'First Name',
					description: 'What is your First Name!',
					type: 'text',
					autocomplete: 'given-name',
					required: true,
					answer: null,
					options: null
				},
				{
					name: 'Last Name',
					description: 'What is your Last Name!',
					type: 'text',
					autocomplete: 'family-name',
					required: false,
					answer: null,
					options: null
				},
				{
					name: 'Email Address',
					description:
						'What is your Email Address? This will help me be able to respond back to you!',
					type: 'email',
					autocomplete: 'email',
					required: true,
					answer: null,
					options: null
				},
				{
					name: 'Message',
					description: 'What is your inquiry? We will try our best to respond to your questions!',
					type: 'text',
					autocomplete: null,
					required: true,
					answer: null,
					options: null
				}
			]
		}
	];

	return {
		apps: apps
	};
};
