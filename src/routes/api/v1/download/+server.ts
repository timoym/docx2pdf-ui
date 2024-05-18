import { json, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler<{
	url: string;
}> = async (event) => {
	const data = await event.request.formData();
	const jobId = data.get('jobId') as string;

	return json({ url: "https://google.com" }, { status: 201 });
};
