<script>
	import Metadata from "../components/Metadata.svelte";
	import Controls from "../components/Controls.svelte";
	import Libraries from "../components/Libraries.svelte";
</script>

<div class="container">
	<div>
		<Metadata />
		<Libraries />
	</div>
	<div>
		<Controls />
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		gap: 22px;

		& > div {
			flex-grow: 1;
			flex-basis: 0;
		}
	}
</style>
