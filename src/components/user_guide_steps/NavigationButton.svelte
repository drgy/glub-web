<script>
	export let isNext = true;
	export let onClick;
</script>

<div class="{isNext ? '' : 'flip'}" on:click={onClick}></div>

<style lang="scss">
	.flip {
			transform: scaleX(-1);
			right: unset;
			left: 0;
		top: calc(50% - 20px) !important;
	}

	div {
		position: absolute;
	    display: inline-block;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      transition: color 180ms ease;
      background-image: url("data:image/svg+xml, #{$arrow-light}");
      background-size: cover;
      width: 40px;
      height: 40px;
      cursor: pointer;

      &:hover {
        background-image: url("data:image/svg+xml, #{$arrow-blue}");
      }
	}
</style>
