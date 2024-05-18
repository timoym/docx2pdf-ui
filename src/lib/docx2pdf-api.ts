async function uploadFile(file: File): Promise<{ fileId: string }> {
	const formData = new FormData();
	formData.append('file', file);

	return fetch('api/v1/upload', {
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

	return fetch('api/v1/convert', {
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

async function checkConversionStatus(pdfUrl: string): Promise<ConversionStatus> {
	const formData = new FormData();
	formData.append('pdfUrl', pdfUrl);

	return fetch('api/v1/status', {
		method: 'POST',
		body: formData
	})
		.then((response) => response.json() as Promise<{ status: ConversionStatus }>)
		.then((data) => data.status);
}

export { uploadFile, convertDocxToPdf, checkConversionStatus, ConversionStatus };
