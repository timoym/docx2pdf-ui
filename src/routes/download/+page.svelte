<script lang="ts">
	import { page } from '$app/stores';
	import { getDownloadUrl } from '$lib/docx2pdf-api';

	export const jobId: string = $page.url.searchParams.get('jobId')!;

	async function download() {
		let downloadUrl: string = decodeURIComponent(await getDownloadUrl(jobId));
		window.location.href = downloadUrl;
	}
</script>

<div>
	<h2>Your download is ready!</h2>

	<button on:click={download}>Click here to download</button>
</div>
