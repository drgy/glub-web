<script>
	import NavigationButton from "./NavigationButton.svelte";
	import {onMount} from 'svelte';

	let downloadContainer;

	export function select() {
		downloadContainer.classList.add('highlight-section');
	}

	export function deselect() {
		downloadContainer.classList.remove('highlight-section');
	}

	export let next;
	export let previous;
	export let goto;

	onMount(() => {
		downloadContainer = document.getElementById('download');
	});
</script>

<div class="container">
	<NavigationButton isNext={false} onClick={previous} />
	<div class="content">
		<div class="vcenter">
			<span>After the project is downloaded and unpacked, it is ready to be compiled. Compilation is a platform-specific process, please select OS that will be used for compilation.</span>
			<div class="options">
				<img src="img/linux.png" alt="Linux" on:click={next} />
				<img src="img/windows.svg" alt="Windows" on:click={() => goto(7)}/>
			</div>
		</div>
	</div>
</div>


<style lang="scss">
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

    .options {
	    margin: 32px auto 0;
	    width: fit-content;

	    img {
		    height: 80px;
	        display: inline-block;
		    cursor: pointer;

		    &:first-of-type {
			    margin-right: 40px;
		    }
	    }
    }
</style>
