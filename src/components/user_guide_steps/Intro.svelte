<script>
	import StepLayout from "./StepLayout.svelte";

	export let next;
	export let previous;
</script>

<StepLayout next={next} previous={previous}>
	<span class="vcenter">This tool can generate a working OpenGL project, with only few clicks. Before using glub please make sure there is <b>CMake</b> and a <b>C++ compiler</b> available on your machine.</span>
</StepLayout>
