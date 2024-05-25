import { json, type RequestHandler } from '@sveltejs/kit';
import { JobStatus, checkConversionStatus } from '$lib/docx2pdf-api';
import { env } from '$env/dynamic/private';

const statusApiUrl = `${env.STATUS_API_URL}?code=${env.STATUS_API_KEY}`;

export const POST: RequestHandler<{
	status: JobStatus;
}> = async (event) => {
	const data = await event.request.formData();
	const jobId = data.get('jobId') as string;
	if (!jobId) {
		return json({ error: 'Missing jobId' }, { status: 400 });
	}

	const response = await fetch(`${statusApiUrl}&jobId=${jobId}`);
	const status = JSON.parse(await response.text()).status;

	return json({ status }, { status: 200 });
};
