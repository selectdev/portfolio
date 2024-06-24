import cookie from 'cookie';

export const load = async ({ request }: any) => {
	const cookies = cookie.parse(request.headers.get('cookie') || '');

	return {
		theme: cookies.theme
	};
};
