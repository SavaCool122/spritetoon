<script>
	import SaveHtml from './SaveHtml.svelte';

	export let icon;
	export let name;
</script>

<div class="flex flex-col items-center">
	<div class="w-[30px] h-[30px]">
		<SaveHtml html={icon} />
	</div>
	<div>
		{name}
	</div>
</div>
