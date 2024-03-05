<script>
	import { createEventDispatcher } from 'svelte';

	let files;
	const dispatch = createEventDispatcher();

	function handleDropFile(event) {
		files = event.dataTransfer.files;
	}

	$: if (files) dispatch('upload', { files });
</script>

<label
	on:dragover|preventDefault
	on:drop|preventDefault={handleDropFile}
	class="grid place-content-center border-2 border-dashed border-gray-300 bg-gray-100 max-w-[300px] h-[200px]"
>
	<span class="text-balance">Drag and drop or click here upload image</span>
	<input type="file" hidden accept="image/*" bind:files />
</label>
