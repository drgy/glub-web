<script>
	import Metadata from "../components/Metadata.svelte";
	import Download from "../components/Download.svelte";
	import Contribute from "../components/Contribute.svelte";
	import Libraries from "../components/Libraries.svelte";
	import UserGuide from "../components/UserGuide.svelte";
	import Preview from "../components/Preview.svelte";
</script>

<div class="main-container">
	<div>
		<Metadata />
		<Libraries />
	</div>
	<div>
		<div>
			<div class="container">
				<div>
					<Download />
				</div>
				<div>
					<Contribute />
				</div>
			</div>
			<UserGuide />
			<Preview />
		</div>
	</div>
</div>

<style lang="scss">
	.main-container {
		position: relative;

		& > div {
			display: inline-block;
			width: calc(50% - 11px);

      &:last-of-type {
        float: right;
      }

			@media (max-width: $lg-max) {
				display: block;
				width: 100%;
      }
		}
	}

	.container {
		display: flex;
		gap: 22px;

		& > div {
			flex-grow: 1;
			flex-basis: 0;
		}

    @media (max-width: $lg-max) {
      display: block;
    }
	}
</style>
