<script lang="ts">
    import { fade } from 'svelte/transition';
	import { humanFileSize } from '$lib/utils';
	import { uploadFile } from '$lib/docx2pdfapi';

	let fileInput: HTMLInputElement;
	let files: FileList;

	let addedFiles: File[] = [];

	async function onFileAdded(file: File) {
		console.log('File added:', file);
		addedFiles = [...addedFiles, file];
	}

	async function onDrop(ev: DragEvent) {
		ev.preventDefault();
		const file = ev.dataTransfer?.files[0];
		if (file) {
			onFileAdded(file);
		}
	}

	async function onPressNext() {
		console.log('Next button pressed');
		const responses: Promise<string>[] = [];
		addedFiles.forEach((file) => {
			responses.push(uploadFile(file));
		});
		const results = await Promise.all(responses);
	}
</script>

<div class="upload-dialog">
	<div class="title">
		<p>Upload file</p>
	</div>
	<button
		class="drop-area"
		type="button"
		on:drop={(ev) => onDrop(ev)}
		on:click={() => fileInput.click()}
		on:dragover={(evt) => evt.preventDefault()}
	>
		<p>Drag and Drop a DOCX file here</p>
		<input
			type="file"
			id="file"
			accept=".docx"
			bind:this={fileInput}
			bind:files
			on:change={() => onFileAdded(files[0])}
		/>
	</button>
	<div class="description-area">
		<div class="description-left">
			<p>Supported file types: DOCX</p>
		</div>
		<div class="description-right">
			<p>Max file size: 10MB</p>
		</div>
	</div>
	<div>
		{#each addedFiles as file, index}
			<div class="file-card" transition:fade={{ duration: 100 }}>
				<div class="file-info">
					<p class="file-title">{file.name}</p>
					<p class="file-subtitle">{humanFileSize(file.size)}</p>
				</div>
				<div class="file-actions">
                    <button class="btn" on:click={() => addedFiles = addedFiles.filter((_, i) => i !== index)}>Remove</button>
				</div>
			</div>
		{/each}
	</div>
	<div class="controls-area">
		<button class="btn" disabled={addedFiles.length <= 0} on:click={() => onPressNext()}>Next</button>
	</div>
</div>

<style>
	.upload-dialog {
		padding: 1em;
		background-color: #f8f8f8;
		border-radius: 1em;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
	.title {
		margin-bottom: 2em;
	}
	.title p {
		font-size: 1.5em;
		font-weight: bold;
	}
	.drop-area {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		border: 0.2em dashed #ccc;
		border-radius: 0.5em;
		background-color: #f8f8f8;
		color: #ccc;
	}

	.drop-area p {
		font-size: 1.5em;
	}

	.drop-area input {
		display: none;
	}

	.drop-area:hover {
		border-color: #25ace9;
		background-color: #f2f7ff;
		color: #333;
	}

	.description-area {
		margin: 0.2em;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.description-area p {
		font-size: 0.75em;
		color: #ccc;
	}

	.file-card {
        margin-top: 0.5em;
		padding: 1em;
		background-color: #f3f5f7;
		border-radius: 0.5em;
		display: flex;
		justify-content: space-between;
	}

	.file-title {
		font-size: 1em;
		font-weight: bold;
		margin: 0;
	}

	.file-subtitle {
		font-size: 0.75em;
		color: #ccc;
		margin: 0;
	}


	.controls-area {
		margin-top: 1em;
		display: flex;
		justify-content: flex-end;
	}

	.btn {
		background-color: #ffffff;
		border: 1px solid rgb(209, 213, 219);
		border-radius: 0.5rem;
		box-sizing: border-box;
		color: #111827;
		font-size: 0.875rem;
		font-weight: 300;
		line-height: 1.25rem;
		padding: 0.5rem 1rem;
		text-align: center;
		text-decoration: none #d1d5db solid;
		text-decoration-thickness: auto;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		cursor: pointer;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	.btn:hover {
		background-color: rgb(249, 250, 251);
	}

	.btn:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	.btn:focus-visible {
		box-shadow: none;
	}

	.btn:active {
		background-color: rgb(243, 244, 246);
		border-color: rgb(209, 213, 219);
	}

	.btn:disabled {
		background-color: rgb(243, 244, 246);
		border-color: rgb(209, 213, 219);
		color: rgb(107, 114, 128);
		cursor: not-allowed;
	}
</style>
