<script lang="ts">
	import { onMount } from 'svelte';
	import { checkConversionStatus, JobStatus } from '$lib/docx2pdf-api';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export const jobId: string = $page.url.searchParams.get('jobId')!;

	let checkInterval: NodeJS.Timeout;

	onMount(() => {
		checkInterval = setInterval(checkStatus, 1000);
	});

	async function checkStatus() {
		const status = await checkConversionStatus(jobId);

		if (status === JobStatus.DONE) {
			clearInterval(checkInterval);
			goto(`/download?jobId=${jobId}`);
		} else if (status === JobStatus.FAILED) {
			clearInterval(checkInterval);
			alert('Conversion failed');
		}
	}
</script>

<div class="container mx-auto text-white w-96 text-center">
	<h2>Converting your files...</h2>
</div>
