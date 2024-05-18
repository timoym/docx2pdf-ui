import { v4 as uuidv4 } from 'uuid';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler<{
	jobId: string;
}> = async (event) => {
	const data = await event.request.formData();
    const fileIds = data.getAll('fileId') as string[];
	const jobId = uuidv4();

    // Create job entry in database
    
    // Add fileIds to job entry

    // Start the conversion job


	return json({ jobId }, { status: 201 });
};
