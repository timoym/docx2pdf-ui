<script lang="ts">
	import { page } from '$app/stores';
	import { getDownloadUrl } from '$lib/docx2pdf-api';

	export const jobId: string = $page.url.searchParams.get('jobId')!;

	async function download() {
		let downloadUrl: string = decodeURIComponent(await getDownloadUrl(jobId));
		window.location.href = downloadUrl;
	}
</script>

<div class="container mx-auto text-white w-96 text-center">
	<h2>Your download is ready!</h2>
	<br />
	<div class="w-full flex flex-row justify-center">
		<button
			class="px-4 md:px-8 py-2 md:py-4 rounded-md font-medium text-base flex items-center justify-center bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200"
			on:click={download}>Click here to download</button
		>
	</div>
</div>
