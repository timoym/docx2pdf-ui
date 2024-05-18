import { json, type RequestHandler } from '@sveltejs/kit';
import { ConversionStatus } from '$lib/docx2pdf-api';

export const POST: RequestHandler<{
	status: ConversionStatus;
}> = async (event) => {
	const data = await event.request.formData();
	const jobId = data.get('jobId') as string;

	// Get job from database

	// Check if job is done

	// Return the status

	return json({ status: ConversionStatus.Done }, { status: 201 });
};
