import cookie from 'cookie';
import { env } from '$env/static/private';

export const load = async ({ request }: any) => {
	// Cookies
	const cookies = cookie.parse(request.headers.get('cookie') || '');

	// Calculate Age
	const calculateAge = (birthday: string) => {
		const birthDate = new Date(birthday);
		const today = new Date();

		let p = today.getFullYear() - birthDate.getFullYear();
		if (
			today.getMonth() < birthDate.getMonth() ||
			(today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
		)
			p--;
		return p;
	};

	// Number = Word
	const numberWords: { [key: number]: string } = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine'
	};

	// Main
	const age: number = calculateAge('2006-07-11');
	const experience: string =
		numberWords[calculateAge('2017-12-11')] || String(calculateAge('2017-12-11'));
	const availableForHire: boolean = false;

	// Projects
	const projects: {
		name: string;
		description: string;
		link: string;
		image: string;
		flair: string[];
	}[] = [
		{
			name: 'Sparkyflight',
			description:
				"Hey, neurodivergent friends! Tired of your thoughts being dismissed? Welcome to Sparkyflight – the virtual haven where your ideas soar without fear of judgment. Speak your mind, share your brilliance, and let's fly high together!",
			link: 'https://sparkyflight.xyz/',
			image: 'https://sparkyflight.xyz/logo.png',
			flair: ['OWNER', 'FOUNDER']
		},
		{
			name: 'AntiRaid',
			description:
				'AntiRaid is a Automatic Moderation Service created to protect your Discord Server from threats, unsafe bots and spamming using our advanced technology!',
			link: 'https://antiraid.xyz/',
			image: 'https://antiraid.xyz/logo.webp',
			flair: ['OWNER', 'EXECUTIVE DIRECTOR']
		}
	];

	// Companies
	const companies: {
		name: string;
		description: string;
		link: string;
		image: string;
		flair: string[];
	}[] = [
		{
			name: 'Infinity List',
			description: 'Begin your Discord journey with our extensive directory.',
			link: 'https://infinitybots.gg/',
			image: 'https://cdn.infinitybots.gg/core/full_logo.webp',
			flair: ['LEAD DEVELOPER', 'HUMAN RESOURCES']
		},
		{
			name: 'CordX',
			description:
				'Discover seamless media sharing and storage. Experience the next generation of simplicity for all your digital moments.',
			link: 'https://cordx.lol/',
			image: '/cordx.png',
			flair: ['DEVELOPER']
		},
		{
			name: 'NodeByte LTD',
			description:
				'NodeByte LTD is your premier partner for top-tier services, dedicated to exceeding your expectations and driving your success.',
			link: 'https://nodebyte.co.uk/',
			image: 'https://nodebyte.co.uk/_next/image?url=%2Flogo.png&w=48&q=75',
			flair: ['SENIOR TECHNICAL ANALYST']
		},
		{
			name: 'NetSocial',
			description: 'Connect. Share. Grow.',
			link: 'https://netsocial.app/',
			image: 'https://cdn.netsocial.app/logos/netsocial.png',
			flair: ['HIGH TABLE', 'DODP']
		}
	];

	// Tech Stack
	const stack: {
		name: string;
		description: string;
		link: string;
		image: string;
	}[] = [
		{
			name: 'Sveltekit',
			description: 'Svelte is a free and open-source component-based front-end software framework.',
			link: 'https://kit.svelte.dev/',
			image: 'https://a.storyblok.com/f/88751/1702x2049/619c584101/svelte_logo.png'
		},
		{
			name: 'NextJS',
			description:
				'Next.js is a popular React framework that enables server-side rendering and static site generation.',
			link: 'https://nextjs.org/',
			image: 'fa-brands fa-react'
		},
		{
			name: 'NodeJS',
			description:
				'Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.',
			link: 'https://nodejs.org/',
			image: 'fa-brands fa-node-js'
		},
		{
			name: 'JavaScript',
			description:
				'JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS.',
			link: 'https://www.w3schools.com/js/DEFAULT.asp',
			image: 'fa-brands fa-js'
		},
		{
			name: 'Go',
			description:
				'Go is a statically typed, compiled high-level programming language designed at Google.',
			link: 'https://go.dev/',
			image: 'fa-brands fa-golang'
		},
		{
			name: 'Rust',
			description:
				'Rust is a multi-paradigm, general-purpose programming language that emphasizes performance, type safety, and concurrency.',
			link: 'https://www.rust-lang.org/',
			image: 'fa-brands fa-rust'
		},
		{
			name: 'Python',
			description:
				'Python is a high-level programming language that lets you work more efficiently and effectively.',
			link: 'https://www.python.org/',
			image: 'fa-brands fa-python'
		}
	];

	// Testimonials
	const testimonials: {
		name: string;
		description: string;
		project: string;
		link: string;
		image: string;
	}[] = [
		{
			name: 'Emil Ilieff',
			description:
				"I highly recommend Select, whose skills and dedication were crucial to our project's success. As a full stack developer, his expertise in both front-end and back-end development consistently delivered high-quality solutions. Select's problem-solving ability, proficiency in various programming languages, and exceptional collaboration skills ensured thorough execution and innovation. His clear communication and strategic mindset were invaluable. I am confident in his continued success in future projects.",
			project: 'AntiRaid',
			link: 'https://antiraid.xyz/',
			image: 'https://popkat.purrquinox.com/939058556a61a4efe6e07243c6b1732a_588'
		}
	];

	// Blog Posts
	const blogPosts: {
		id: number;
		title: string;
		image: string;
		author: {
			name: string;
			biography: string;
			image: string;
			badges: string[];
		};
		blogPostAuthorId: number;
		short_description: string;
		long_description: string;
		createdAt: Date;
		updatedAt: Date | null;
		flairs: string[];
	}[] = [];

	// PC Specs
	const pcSpecs: { [key: string]: string } = {
		Case: 'Corsair iCUE 4000X RGB',
		Storage: 'SAMSUNG 980 PRO (SSD) - 2TB',
		Motherboard: 'MSI MAG B550 Tomahawk MAX WiFi',
		CPU: 'AMD Ryzen 7 5700G',
		'CPU Cooler': 'NZXT Kraken Elite 240',
		'Power Supply': 'Corsair RM750x',
		RAM: 'Corsair VENGEANCE RGB PRO (DDR4) - 16GB'
	};

	// Peripherals
	const peripherals: { [key: string]: string } = {
		Microphone: 'MAONO DGM20S',
		'Keyboard/Mouse Combo': 'Logitech MK470',
		Mousepad: 'Logitech Desk Mat (Studio series - Mid Grey)'
	};

	// Social Media
	const socials: {
		name: string;
		url: string;
		icon: string;
	}[] = [
		{
			name: 'Discord',
			url: 'https://discord.com/users/564164277251080208',
			icon: 'fab fa-discord'
		},
		{
			name: 'Github',
			url: 'https://github.com/selectdev',
			icon: 'fab fa-github'
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/heypurrquinox',
			icon: 'fab fa-twitter'
		}
	];

	/* Spotify
	const params = new URLSearchParams();
	params.append('grant_type', 'refresh_token');
	params.append('refresh_token', import.meta.env.VITE_PRIVATE_REFRESH_TOKEN);

	const auth = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			Authorization: `Basic ${Buffer.from(`${import.meta.env.VITE_PRIVATE_CLIENT_ID}:${import.meta.env.VITE_PRIVATE_CLIENT_SECRET}`).toString('base64')}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: params.toString()
	}).then(async (a) => {
		if (!a.ok) {
			const errorData = await a.json();
			console.error('Failed to refresh access token:', errorData);
			throw new Error(`HTTP error! status: ${a.status}`);
		} else return await a.json();
	});

	let currentlyListening = await fetch(
		'https://api.spotify.com/v1/me/player/currently-playing?market=US',
		{
			headers: {
				Authorization: 'Bearer ' + auth.access_token
			}
		}
	).then(async (a) => {
		if (!a.ok) {
			const errorData = await a.json();
			console.error('Failed to refresh access token:', errorData);
			throw new Error(`HTTP error! status: ${a.status}`);
		} else {
			const d = await a.text();
			if (d === null || d === '') return null;
			else return JSON.parse(d);
		}
	}); */

	// Primary data
	const data = {
		age,
		experience,
		availableForHire,
		projects,
		companies,
		stack,
		testimonials,
		blogPosts,
		pcSpecs,
		peripherals,
		socials,
		currentlyListening: null,
        env: env
	};

	// Return everything, render page.
	return {
		...data,
		theme: cookies.theme
	};
};
