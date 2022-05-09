<script>
	import StepLayout from "./StepLayout.svelte";
	import { onMount } from 'svelte';

	let metadataContainer;

	export function select() {
		metadataContainer.classList.add('highlight-section');
	}

	export function deselect() {
		metadataContainer.classList.remove('highlight-section');
	}

	export let next;
	export let previous;

	onMount(() => {
		metadataContainer = document.getElementById('metadata');
	});
</script>

<StepLayout next={next} previous={previous}>
	<span class="vcenter">Start by editing the information about the project in the <b>Metadata</b> section. All the fields have default values for quick project generation, but setting at least the name of the project might be useful.</span>
</StepLayout>

