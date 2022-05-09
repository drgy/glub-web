<script lang="ts">
	import Container from "./Container.svelte";
	import * as semver from "semver";
	import { libraries, lastLibraryUrl } from '../store.ts';

	export let category;
	export let libraryList;
	export let libraryData;

	function updateLibrary(name: string, url: string) {
		const version = libraryData[category][name].selectedVersion;
		libraries.updateVersion(name, version);
		libraryData[category][name].selected = true;
		lastLibraryUrl.set(url);
	}

	function toggleLibrary(name: string, url: string) {
		const version = libraryData[category][name].selectedVersion;
		libraries.toggle(name, version);
		libraryData[category][name].selected = !libraryData[category][name].selected;
		lastLibraryUrl.set(url);
	}

	function parseVersion(version: string): string {
		return semver.clean(version
				.replace(/[^0-9\.]/g, '')
				.replace(/[^0-9]*$/, '')
				.replace(/(?<=^[^0-9]*[0-9]+)\.?$/, '.0')
				.replace(/(?<=^[^0-9]*[0-9]+\.[0-9]+)\.?$/, '.0')
				.replace(/(?<=[0-9]+\.[0-9]+\.[0-9]+)(\.[0-9]+)*/, ''));
	}

</script>

<Container title={category} data="category">
	<ul>
		{#each Object.entries(libraryList) as [ name, library ]}
			<li class="{libraryData[category][name].selected ? 'selected' : '' }">
				<span on:click="{() => toggleLibrary(name, library.url)}">{name}</span>
				{#if library.versions[0] !== '0.0.0'}
					<select bind:value={libraryData[category][name].selectedVersion} on:change="{() => updateLibrary(name, library.url)}">
						{#each library.versions as version}
							<option value={version}>{parseVersion(version)}</option>
						{/each}
					</select>
				{/if}
			</li>
		{/each}
	</ul>
</Container>

<style lang="scss">
  ul {
    padding: 0;
	  margin: 0;
  }

  select {
	  width: 80px;
  }

  li {
    display: flex;
    justify-content: space-between;
	  padding: 2px 8px;
	  margin: 4px 0;
	  border-radius: 4px;
    transition: all 180ms ease;
	  border: 2px solid transparent;

    &.selected {
      background-color: $blue !important;
    }

	  &:hover {
		  border: 2px solid $blue;
		  background-color: $transparent-blue;
	  }

    span {
      flex: 1;
      cursor: pointer;
      vertical-align: middle;
      line-height: 30px;
    }
  }
</style>
