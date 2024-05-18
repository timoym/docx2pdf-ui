<script lang="ts">
	import { page } from '$app/stores';

	let jobId: string = '';

	$: {
		jobId = $page.params.jobId;
	}

	let downloadUrl: string = `/api/download/${jobId}`;
</script>

<div>
	<h2>Your download is ready!</h2>

	<a href={downloadUrl} download>Click here to download</a>
</div>
