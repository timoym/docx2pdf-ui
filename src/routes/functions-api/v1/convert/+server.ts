import { json, type RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const convertApiUrl = `${env.CONVERT_API_URL}?code=${env.CONVERT_API_KEY}`;

export const POST: RequestHandler<{
	jobId: string;
}> = async (event) => {
	const data = await event.request.formData();
	const fileId = data.get('fileId') as string;
	if (!fileId) {
		return json({ error: 'Missing fileId' }, { status: 400 });
	}

	const response = await fetch(convertApiUrl, {
		method: 'POST',
		body: JSON.stringify({ fileId })
	});
	const jobId = JSON.parse(await response.text()).jobId;

	return json({ jobId }, { status: 201 });
};
