//import { getDownloadLink } from '$lib/downloadService';
import { json, type RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler<{
	jobId: string;
}> = async (event) => {
	const { jobId } = event.params;

	//const downloadLink = await getDownloadLink(jobId);
    const downloadLink = "https://example.com/download/" + jobId;

	return json({ jobId, downloadLink });
};
