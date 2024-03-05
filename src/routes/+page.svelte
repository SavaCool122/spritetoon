<script>
	import Icon from '$lib/components/Icon.svelte';
	import Upload from '$lib/components/FileUploader.svelte';
	import { svgSpriteParser } from '$lib/ast/parser.js';
	import { astToListIcons } from '$lib/ast/content.js';
	import SvgItem from './SvgItem.svelte';

	let list = [];

	async function handleUpload(event) {
		const { files } = event.detail;
		const file = files[0];

		const ast = await svgSpriteParser(file);
		list = await astToListIcons(ast);
	}
</script>

<header>
	<div class="flex items-center justify-between py-4 px-8">
		<div>
			<span class="text-2xl">Sprite Tools</span>
		</div>
		<div>
			<a href="https://github.com/"><Icon size="40" name="github" /></a>
		</div>
	</div>
</header>
<main class="max-w-[1440px] m-auto text-center">
	<div class="my-24">
		<h1 class="text-5xl font-bold">Sprite Tools</h1>
		<p class="mt-4 text-lg">Upload sprite to get started separate icons</p>
	</div>

	{#if list.length > 0}
		<div class="grid grid-cols-6 gap-4">
			{#each list as item}
				<SvgItem icon={item.svg} name={item.params.id} />
			{/each}
		</div>
	{:else}
		<section class="grid place-content-center">
			<Upload on:upload={handleUpload} />
		</section>
	{/if}
</main>
