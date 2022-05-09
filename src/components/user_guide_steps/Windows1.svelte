<script>
	import StepLayout from "./StepLayout.svelte";

	export let next;
	export let goto;
</script>

<StepLayout next={next} previous={() => goto(5)}>
	<span class="vcenter">It is recommended to use Visual Studio for compiling the generated project. Make sure MSVC and C++ CMake tools for Windows are installed.</span>
</StepLayout>

