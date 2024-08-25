import { load as loadLayoutData } from '../../+layout.server';

export async function GET({ request }: any) {
    const data = await loadLayoutData({ request });

    return new Response(JSON.stringify(data).trim(),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}
