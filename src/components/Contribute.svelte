<script lang="ts">
	import Container from "./Container.svelte";
</script>

<Container title="Contribute">
	<div class="container">
		<a href="#" target="_blank"><img src="img/github.svg" alt="GitHub repository" /></a>
		<a href="#" target="_blank"><img src="img/bug.svg" alt="Bug report" /></a>
		<a href="#" target="_blank"><img src="img/request.svg" alt="Library request" /></a>
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
