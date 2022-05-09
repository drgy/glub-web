<script>
	import {lastLibraryUrl} from "../store.ts";
	import Container from "./Container.svelte";

	let url = '';

	lastLibraryUrl.subscribe(lastUrl => {
		url = lastUrl;
	});
</script>

{#if url}
	<Container title="Library preview">
		<iframe src={url} />
	</Container>
{/if}

<style>
	iframe {
			height: 500px;
			width: 100%;
			border: none;
	}
</style>
