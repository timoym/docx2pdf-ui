import { json, type RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const downloadApiUrl = `${env.DOWNLOAD_API_URL}?code=${env.DOWNLOAD_API_KEY}`;

export const POST: RequestHandler<{
	url: string;
}> = async (event) => {
	const data = await event.request.formData();
	const jobId = data.get('jobId') as string;
	if (!jobId) {
		return json({ error: 'Missing jobId' }, { status: 400 });
	}

	const result = await fetch(`${downloadApiUrl}&jobId=${jobId}`, {
		method: 'POST',
		body: JSON.stringify({ jobId })
	});

	const response = await result.text();
	const url = JSON.parse(response).fileUrl;
	return json({ url }, { status: 201 });
};
