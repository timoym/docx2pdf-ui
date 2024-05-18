<script lang="ts">
    import { onMount } from "svelte";
    import { checkConversionStatus, ConversionStatus } from "$lib/docx2pdf-api";
	import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    export const jobId: string = $page.url.searchParams.get('job')!;

    let checkInterval : number;

    onMount(() => {
        checkInterval = setInterval(checkStatus, 1000);
    });

    async function checkStatus() {
        const status = (await checkConversionStatus(jobId));

        if (status === ConversionStatus.Done) {
            clearInterval(checkInterval);
            goto(`/download?job=${jobId}`);
        } else if (status === ConversionStatus.Error) {
            clearInterval(checkInterval);
            alert('Conversion failed');
        }
    }
</script>

<div>
    <h2>
        Converting your files...
    </h2>
</div>