import { load as loadLayoutData } from '../../../+layout.server';

export async function GET() {
    const { data } = await loadLayoutData(); // Getting data from the layout's load function

    return new Response(JSON.stringify(data),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}
