import { json, type RequestHandler } from '@sveltejs/kit';
import { JobStatus, checkConversionStatus } from '$lib/docx2pdf-api';

export const POST: RequestHandler<{
	status: JobStatus;
}> = async (event) => {
	const data = await event.request.formData();
	const jobId = data.get('jobId') as string;
	if (!jobId) {
		return json({ error: 'Missing jobId' }, { status: 400 });
	}

	return json({ status: checkConversionStatus(jobId) }, { status: 201 });
};
