<script>
	/* eslint-disable svelte/no-at-html-tags */
	import DOMPurify from 'dompurify';

	export let html;

	let saveHtml = DOMPurify.sanitize(html);
</script>

{@html saveHtml}
