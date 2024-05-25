import { v4 as uuidv4 } from 'uuid';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler<{
	jobId: string;
}> = async (event) => {
	const data = await event.request.formData();
    const fileId = data.get('fileId') as string;
    if (!fileId) {
        return json({ error: 'Missing fileId' }, { status: 400 });
    }
	const jobId = uuidv4();

    // Create job entry in database
    
    // Add fileIds to job entry

    // Start the conversion job


	return json({ jobId }, { status: 201 });
};
