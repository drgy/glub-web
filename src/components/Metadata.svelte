<script>
	import Container from './Container.svelte';
	import { name, version, description, srcPath, resPath } from '../store.ts';
</script>

<div>
	<Container title="Metadata" >
		<div class="row">
			<input type="text" placeholder="glub" bind:value={$name} />
			<input type="text" placeholder="1.0.0" bind:value={$version} />
		</div>
		<div class="row">
			<input type="text" placeholder="Project description" bind:value={$description} />
		</div>
		<div class="row">
			<label for="src-path">Source code directory</label>
			<input id="src-path" type="text" placeholder="src/" bind:value={$srcPath} />
		</div>
		<div class="row">
			<label for="res-path">Resource directory</label>
			<input id="res-path" type="text" placeholder="res/" bind:value={$resPath} />
		</div>
	</Container>
</div>

<style lang="scss">
	.row {
		display: flex;
		gap: 12px;
		margin: 8px;

    & > input {
      flex-grow: 1;
    }

		& > label {
			width: 220px;
			margin-top: 6px;
		}

		&:first-of-type {
			input:first-of-type {
				flex-grow: 3;
			}
		}
	}
</style>
