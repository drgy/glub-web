<script>
	import StepLayout from "./StepLayout.svelte";
	import {onMount} from "svelte";

	let doc;

	export function select() {
		doc.querySelectorAll('[data-container="category"]').forEach(category => {
			category.classList.add('highlight-section');
		});
	}

	export function deselect() {
		doc.querySelectorAll('[data-container="category"]').forEach(category => {
			category.classList.remove('highlight-section');
		});
	}

	export let next;
	export let previous;

	onMount(() => {
		doc = document;
	});
</script>

<StepLayout next={next} previous={previous}>
	<span class="vcenter">Continue with selecting the libraries that should be included in the generated project. Libraries with labeled releases contain a dropdown with available versions, deprecated patch version releases are not displayed.</span>
</StepLayout>