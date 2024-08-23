export async function GET({ data }) {
	return new Response(JSON.stringify(data).trim(),
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
}
