<script>
	import Container from "./Container.svelte";
	import GetStarted from "./user_guide_steps/GetStarted.svelte";
	import Intro from "./user_guide_steps/Intro.svelte";
	import Metadata from "./user_guide_steps/Metadata.svelte";
	import Libraries from "./user_guide_steps/Libraries.svelte";
	import Download from "./user_guide_steps/Download.svelte";
	import PlatformOptions from "./user_guide_steps/PlatformOptions.svelte";
	import Linux from "./user_guide_steps/Linux.svelte";
	import Windows1 from "./user_guide_steps/Windows1.svelte";
	import Windows2 from "./user_guide_steps/Windows2.svelte";
	import Windows3 from "./user_guide_steps/Windows3.svelte";

	let steps = [
		{
			component: GetStarted
		},
		{
			component: Intro
		},
		{
			component: Metadata
		},
		{
			component: Libraries
		},
		{
			component: Download
		},
		{
			component: PlatformOptions
		},
		{
			component: Linux
		},
		{
			component: Windows1
		},
		{
			component: Windows2
		},
		{
			component: Windows3
		}
	];

	let current = 0;

	function next() {
		if (steps[current].binding.deselect) {
			steps[current].binding.deselect();
		}

		current++;

		if (steps[current].binding.select) {
			steps[current].binding.select();
		}
	}

	function previous() {
		if (steps[current].binding.deselect) {
			steps[current].binding.deselect();
		}

		current--;

		if (steps[current].binding.select) {
			steps[current].binding.select();
		}
	}

	function goto(index) {
		if (steps[current].binding.deselect) {
			steps[current].binding.deselect();
		}

		current = index;

		if (steps[current].binding.select) {
			steps[current].binding.select();
		}
	}

</script>

<Container title="User guide">
	<div class="carousel">
		<div class="steps" style={`width: ${steps.length}00%; transform: translateX(-${100 / steps.length * current}%)`}>
			{#each steps as step, i}
				<div class="step">
					<svelte:component this={step.component} bind:this={steps[i].binding} next={next} previous={previous} goto={goto} />
				</div>
			{/each}
		</div>
	</div>
</Container>

<style>
	.carousel {
			position: relative;
			height: 250px;
			overflow: hidden;
	}

	.step {
			width: 100%;
			height: 100%;
	}

	.steps {
			display: flex;
			gap: 25px;
			flex-direction: row;
			height: 100%;
      transition: transform 180ms ease;
	}

	img {
			position: absolute;
	}
</style>
