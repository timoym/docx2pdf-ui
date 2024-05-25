import { json, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler<{
	url: string;
}> = async (event) => {
	const data = await event.request.formData();
	const jobId = data.get('jobId') as string;
	if (!jobId) {
		return json({ error: "Missing jobId" }, { status: 400 });
	}

	return json({ url: "https://google.com" }, { status: 201 });
};
