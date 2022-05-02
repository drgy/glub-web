<script>
	export let title;
</script>

<div class="outline">
	<h3>{title}</h3>
	<slot></slot>
</div>

<style lang="scss">
	.outline {
		border: 2px solid $text-main;
		border-radius: 10px;
		padding: 16px 24px;
		position: relative;
		margin-bottom: 22px;
	}

	h3 {
		position: absolute;
		top: -32px;
		left: 16px;
		user-select: none;
		z-index: 5;
		background-color: $background;
	}
</style>
