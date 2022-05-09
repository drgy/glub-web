<script lang="ts">
	import Container from "./Container.svelte";
	import Tooltip from "./Tooltip.svelte";
</script>

<Container title="Contribute">
	<div class="container">
		<Tooltip text="GitHub repository">
			<a href="https://github.com/drgy/glub" target="_blank">
				<img src="img/github.svg" alt="GitHub repository" />
			</a>
		</Tooltip>

		<Tooltip text="Report incorrect test results">
			<a href="https://github.com/drgy/glub/issues/new?assignees=&labels=compatibility+mismatch&template=compatibility-mismatch.md&title=Compatibility+mismatch+%5Binsert+names+of+selected+libraries%5D" target="_blank">
				<img src="img/bug.svg" alt="Bug report" />
			</a>
		</Tooltip>

		<Tooltip text="Submit a library request">
			<a href="https://github.com/drgy/glub/issues/new?assignees=&labels=library+request&template=request-a-library.md&title=Library+request+%5Binsert+library+name%5D" target="_blank">
				<img src="img/request.svg" alt="Library request" />
			</a>
		</Tooltip>
	</div>
</Container>

<style lang="scss">
	.container {
		display: flex;
		justify-content: space-between;
	}

	img {
		color: $text-main;
		height: 40px;
		padding: 8px;
	}
</style>
