<script>
	import StepLayout from "./StepLayout.svelte";

	export let next;
	export let previous;
</script>

<StepLayout next={next} previous={previous}>
	<span class="vcenter">Open the generated project as a local folder in the Visual Studio. Visual Studio will automatically detect the CMakeLists.txt and start the configuration process. All the configuration steps will be logged in the output window, wait until the configuration is finished.</span>
</StepLayout>
