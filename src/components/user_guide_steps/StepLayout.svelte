<script>
	import NavigationButton from "./NavigationButton.svelte";

	export let next;
	export let previous;
</script>

<div class="container">
	<NavigationButton isNext={false} onClick={previous} />
	<div class="content">
		<slot></slot>
	</div>
	<NavigationButton onClick={next} />
</div>

<style>
    .container {
        position: relative;
        height: 100%;
    }

    .content {
		    position: relative;
		    height: 100%;
		    width: calc(100% - 120px);
		    margin: auto;
    }
</style>