import { v4 as uuidv4 } from 'uuid';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler<{
	fileId: string;
}> = async (event) => {
	const data = await event.request.formData();
	const file = data.get('file') as FormDataEntryValue;
	const fileId = uuidv4();

	// Create file entry in database

	// Send the file to azure blob storage

	// Return the fileId

	return json({ fileId }, { status: 201 });
};
