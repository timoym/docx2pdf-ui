async function uploadFile(file: File): Promise<{ fileId: string }> {
	const formData = new FormData();
	formData.append('file', file);

	return fetch('functions-api/v1/upload', {
		method: 'POST',
		body: formData
	})
		.then((response) => response.json() as Promise<{ fileId: string }>)
}

async function convertDocxToPdf(fileIds: string[]): Promise<{ jobId: string }> {
	const formData = new FormData();
	fileIds.forEach((fileId) => {
		formData.append('fileId', fileId);
	});

	return fetch('functions-api/v1/convert', {
		method: 'POST',
		body: formData
	})
		.then((response) => response.json() as Promise<{ jobId: string }>)
}

enum ConversionStatus {
	Pending = 'pending',
	Done = 'done',
	Error = 'error'
}

async function checkConversionStatus(jobId: string): Promise<ConversionStatus> {
	const formData = new FormData();
	formData.append('jobId', jobId);

	return fetch('functions-api/v1/status', {
		method: 'POST',
		body: formData
	})
		.then((response) => response.json() as Promise<{ status: ConversionStatus }>)
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

export { uploadFile, convertDocxToPdf, checkConversionStatus, ConversionStatus, getDownloadUrl };
