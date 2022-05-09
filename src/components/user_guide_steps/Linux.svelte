<script>
	import NavigationButton from "./NavigationButton.svelte";
	import Clipboard from "../Clipboard.svelte";

	export let previous;

	const copy = (content) => {
		const app = new Clipboard({
			target: document.getElementById('clipboard'),
			props: { content },
		});
		app.$destroy();
	}
</script>

<div class="container">
	<NavigationButton isNext={false} onClick={previous} />
	<div class="content">
		<div class="vcenter">
			<div class="text">Open terminal in the project directory and enter following commands:</div>
			<div class="code">mkdir build && cd build <img src="img/clipboard.svg" alt="Copy to clipboard" on:click={() => copy('mkdir build && cd build')}/></div>
			<div class="code">cmake ../ && cmake --build . <img src="img/clipboard.svg" alt="Copy to clipboard" on:click={() => copy('cmake ../ && cmake --build .')}/></div>
			<div class="text2">After the compilation ended, an executable with the project name will be present in the build directory.</div>
		</div>
	</div>
	<div id="clipboard"></div>
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

    .code {
		    img {
				    cursor: pointer;
			    margin-left: 8px;
		    }
    }

    .text {
		    margin-bottom: 20px;
    }

    .text2 {
        margin-top: 20px;
    }
</style>
