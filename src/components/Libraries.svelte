<script lang="ts">
	import Category from "./Category.svelte";

	let libraryData = [];

	(async () => {
		libraryData = await (await fetch(`${import.meta.env.VITE_GLUB_API}/libraries`)).json();

		Object.values(libraryData).forEach(category => {
			Object.values(category).forEach(library => {
				library.selectedVersion = library.versions[0] || '0.0.0';
				library.selected = false;
			});
		});
	})();
</script>

<div class="container">
	<div>
		{#each Object.entries(libraryData).slice(0, Math.ceil(Object.entries(libraryData).length / 2)) as [ category, libraryList ]}
			<Category category={category} libraryList={libraryList} libraryData={libraryData} />
		{/each}
	</div>
	<div>
		{#each Object.entries(libraryData).slice(Math.ceil(Object.entries(libraryData).length / 2), Object.entries(libraryData).length) as [ category, libraryList ]}
			<Category category={category} libraryList={libraryList} libraryData={libraryData} />
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 22px;

		& > * {
			flex: 1;
		}

		@media (max-width: $lg-max) {
			display: block;
		}
	}
</style>
