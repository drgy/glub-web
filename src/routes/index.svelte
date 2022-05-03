<script>
	import Metadata from "../components/Metadata.svelte";
	import Download from "../components/Download.svelte";
	import Contribute from "../components/Contribute.svelte";
	import Libraries from "../components/Libraries.svelte";
</script>

<div class="container">
	<div>
		<Metadata />
		<Libraries />
	</div>
	<div>
		<div class="container">
			<div>
				<Download />
			</div>
			<div>
				<Contribute />
			</div>
		</div>
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
