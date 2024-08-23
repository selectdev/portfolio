export async function GET() {
	let data;
	return new Response(JSON.stringify(data).trim(),
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
}
