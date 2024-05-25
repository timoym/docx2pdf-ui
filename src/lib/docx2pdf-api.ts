async function uploadFile(file: File): Promise<{ fileId: string }> {
	const formData = new FormData();
	formData.append('file', file);

	return fetch('functions-api/v1/upload', {
		method: 'POST',
		body: formData
	}).then((response) => response.json() as Promise<{ fileId: string }>);
}

async function convertDocxToPdf(fileId: string): Promise<{ jobId: string }> {
	const formData = new FormData();
	formData.append('fileId', fileId);

	return fetch('functions-api/v1/convert', {
		method: 'POST',
		body: formData
	}).then((response) => response.json() as Promise<{ jobId: string }>);
}

enum JobStatus {
	IN_PROGRESS = 'inprogress',
	DONE = 'done',
	FAILED = 'failed'
}

async function checkConversionStatus(jobId: string): Promise<JobStatus> {
	const formData = new FormData();
	formData.append('jobId', jobId);

	return fetch('functions-api/v1/status', {
		method: 'POST',
		body: formData
	})
		.then((response) => response.json() as Promise<{ status: JobStatus }>)
		.then((data) => data.status);
}

async function getDownloadUrl(jobId: string): Promise<string> {
	const formData = new FormData();
	formData.append('jobId', jobId);

	return fetch('functions-api/v1/download', {
		method: 'POST',
		body: formData
	})
		.then((response) => response.json() as Promise<{ url: string }>)
		.then((data) => data.url);
}

export { uploadFile, convertDocxToPdf, checkConversionStatus, JobStatus, getDownloadUrl };
