import { json, type RequestHandler } from '@sveltejs/kit';
import { UPLOAD_API_KEY, UPLOAD_API_URL } from '$env/static/private';

const uploadApiUrl = `${UPLOAD_API_URL}?code=${UPLOAD_API_KEY}`;

export const POST: RequestHandler<{
	fileId: string;
}> = async (event) => {
	const data = await event.request.formData();
	const file = data.get('file') as FormDataEntryValue;

	// Send the file to the api
	const response = await fetch(uploadApiUrl, {
		method: 'POST',
		body: file
	});
	const fileId = JSON.parse(await response.text()).fileId;

	// Create file entry in database

	return json({ fileId }, { status: 201 });
};
