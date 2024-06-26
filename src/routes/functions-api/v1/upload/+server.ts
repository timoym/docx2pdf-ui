import { json, type RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const uploadApiUrl = `${env.UPLOAD_API_URL}?code=${env.UPLOAD_API_KEY}`;

export const POST: RequestHandler<{
	fileId: string;
}> = async (event) => {
	if (!env.UPLOAD_API_KEY || !env.UPLOAD_API_URL) {
		return json({ error: 'Upload API not configured' }, { status: 500 });
	}

	const data = await event.request.formData();
	const file = data.get('file') as FormDataEntryValue;
	if (!file) {
		return json({ error: 'Missing file' }, { status: 400 });
	}

	// Send the file to the api
	const response = await fetch(uploadApiUrl, {
		method: 'POST',
		body: file
	});
	const fileId = JSON.parse(await response.text()).fileId;

	// Create file entry in database

	return json({ fileId }, { status: 201 });
};
