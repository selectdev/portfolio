export async function GET({ data }) {
	return new Response(JSON.stringify(data),
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
}
