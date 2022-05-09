<script>
	import { fly } from 'svelte/transition';

	export let text;

	let show = false;
</script>

<div on:mouseover={() => show = true} on:mouseleave={() => show = false}>
	<slot></slot>
</div>

{#if show}
	<div class="container" transition:fly="{{ y: 250, duration: 500 }}">
		<span>{text}</span>
	</div>
{/if}

<style lang="scss">
	.container {
			position: absolute;
			border: 2px solid $text-main;
    background: $background;
		border-radius: 6px;
		top: 100%;
		padding: 16px 24px;
		z-index: 10;
		left: -50%;
		transform: translateX(calc(50% + 25px));
	}
</style>
