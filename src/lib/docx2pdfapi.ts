async function uploadFile(file: File): Promise<string> {
	const formData = new FormData();
	formData.append('file', file);

	return fetch('http://localhost:3000/upload', {
		method: 'POST',
		body: formData
	})
		.then((response) => response.json())
		.then((data) => data.url);
}

async function convertDocxToPdf(docxUrl: string): Promise<string> {
	const formData = new FormData();
	formData.append('docxUrl', docxUrl);

	return fetch('http://localhost:3000/convert', {
		method: 'POST',
		body: formData
	})
		.then((response) => response.json())
		.then((data) => data.url);
}

enum ConversionStatus {
	Pending = 'pending',
	Done = 'done',
	Error = 'error'
}

async function checkConversionStatus(pdfUrl: string): Promise<boolean> {
	const formData = new FormData();
	formData.append('pdfUrl', pdfUrl);

	return fetch('http://localhost:3000/status', {
		method: 'POST',
		body: formData
	})
		.then((response) => response.json())
		.then((data) => data.done);
}

export { uploadFile, convertDocxToPdf, checkConversionStatus, ConversionStatus };