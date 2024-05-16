import { v4 as uuidv4 } from 'uuid';
//import { uploadFile, convertFile } from '$lib/conversionService';
import { json, type RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler<{
	jobId: string;
}> = async (event) => {
	const data = await event.request.formData();
	const file = data.get('file') as FormDataEntryValue;
	const jobId = uuidv4();

	//await uploadFile(file, jobId);
	//convertFile(jobId);

	return json({ jobId }, { status: 201 });
};
