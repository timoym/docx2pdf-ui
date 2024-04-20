<script lang="ts">
	let fileInput: HTMLInputElement;
	let files: FileList;

	async function onFileUpload(file: File) {}

	async function onDrop(ev: DragEvent) {
		ev.preventDefault();
		const file = ev.dataTransfer?.files[0];
		if (file) {
			onFileUpload(file);
		}
	}
</script>

<button id="drop-area" type="button" on:drop={(ev) => onDrop(ev)} on:click={() => fileInput.click()} on:dragover={(evt) => evt.preventDefault()}>
    <p>Drag and Drop a DOCX file here</p>
    <input
        type="file"
        id="file"
        accept=".docx"
        bind:this={fileInput}
        bind:files
        on:change={() => onFileUpload(files[0])}
    />
</button>

<style>
	#drop-area {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		border: 2px dashed #ccc;
		border-radius: 20px;
		background-color: #f8f8f8;
		color: #ccc;
	}

	#drop-area p {
		font-size: 1.5em;
		padding: 20px;
	}

	#drop-area input {
		display: none;
	}

	#drop-area:hover {
		border-color: #333;
		color: #333;
	}
</style>
