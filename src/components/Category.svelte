<script lang="ts">
	import Container from "./Container.svelte";
	import * as semver from "semver";
	import { libraries } from '../store.ts';

	export let category;
	export let libraryList;
	export let libraryData;

	function updateLibrary(name: string) {
		const version = libraryData[category][name].selectedVersion;
		libraries.updateVersion(name, version);
		libraryData[category][name].selected = true;
	}

	function toggleLibrary(name: string) {
		console.log('toggle');

		const version = libraryData[category][name].selectedVersion;
		libraries.toggle(name, version);
		libraryData[category][name].selected = !libraryData[category][name].selected;
	}

	function parseVersion(version: string): string {
		return semver.clean(version.replace(/[^0-9\.]/g, '').replace(/[^0-9]*$/, '').replace(/(?<=^[^0-9]*[0-9]+)\.?$/, '.0').replace(/(?<=^[^0-9]*[0-9]+\.[0-9]+)\.?$/, '.0'));
	}

</script>

<Container title={category}>
	<ul>
		{#each Object.entries(libraryList) as [ name, library ]}
			<li class="{libraryData[category][name].selected ? 'selected' : '' }">
				<span on:click="{() => toggleLibrary(name)}">{name}</span>
				<select bind:value={libraryData[category][name].selectedVersion} on:change="{() => updateLibrary(name)}">
					{#each library.versions as version}
						<option value={version}>{parseVersion(version)}</option>
					{/each}
				</select>
			</li>
		{/each}
	</ul>
</Container>

<style lang="scss">
  ul {
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;

    &.selected {
      background-color: $blue;
    }

    span {
      flex: 1;
      cursor: pointer;
      vertical-align: middle;
      line-height: 30px;
    }
  }
</style>
