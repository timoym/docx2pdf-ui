//import { getConversionStatus } from '@/lib/conversion-status';
import { json, type RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler<{
	jobId: string;
}> = async (event) => {
	const { jobId } = event.params;

	//const status = await getConversionStatus(jobId);

	return json({ jobId, status: '200' });
};