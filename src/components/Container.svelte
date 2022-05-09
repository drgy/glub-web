<script>
	export let title;
	export let data;
</script>

<div class="outline" id={title.toLowerCase().replace(/\s/g, '-')} data-container={data}>
	<h3>{title}</h3>
	<slot></slot>
</div>

<style lang="scss">
	.outline {
		border-radius: 10px;
		padding: 16px 24px;
		position: relative;
		margin-bottom: 22px;
		$border: 2px;
		background: $background;
    background-clip: padding-box;
    border: solid $border transparent;

    &:before {
      content: '';
      position: absolute;
      top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
      z-index: -1;
      margin: -$border;
      border-radius: inherit;
      background-color: $text-main;
    }
	}

	h3 {
		position: absolute;
		top: -32px;
		left: 16px;
		user-select: none;
		z-index: 5;
		background-color: $background;
	}

  @keyframes highlight-bg {
    0% {
      background-color: #0d47a1;
    }

    50% {
      background-color: #00296e;
    }

    100% {
      background-color: #0d47a1;
    }
  }

  @keyframes highlight-color {
    0% {
      color: #0d47a1;
    }

    50% {
      color: #00296e;
    }

    100% {
      color: #0d47a1;
    }
  }

	:global {
		.highlight-section:before {
			animation-name: highlight-bg;
			animation-duration: 2s;
			animation-iteration-count: infinite;
		}

    .highlight-section h3 {
      animation-name: highlight-color;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
	}
</style>
