<script>
	import StepLayout from "./StepLayout.svelte";
	import {onMount} from 'svelte';

	let downloadContainer;

	export function select() {
		downloadContainer.classList.add('highlight-section');
	}

	export function deselect() {
		downloadContainer.classList.remove('highlight-section');
	}

	export let next;
	export let previous;

	onMount(() => {
		downloadContainer = document.getElementById('download');
	});
</script>

<StepLayout next={next} previous={previous}>
	<span class="vcenter">At this point the project is configured and can be downloaded. Right next to the download buttons are located icons displaying the test results for the selected combination of libraries. If the tests for the particular combination of libraries failed, the selection should be changed as selected libraries are probably not compatible.</span>
</StepLayout>

