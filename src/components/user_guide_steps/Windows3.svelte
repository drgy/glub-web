<script>
	import NavigationButton from "./NavigationButton.svelte";

	export let previous;
</script>

<div class="container">
	<NavigationButton isNext={false} onClick={previous} />
	<div class="content">
		<div class="vcenter">
			<span>After the configuration is finished, open the CMakeLists.txt in the Visual Studio. In the top bar the compilation options should update, by clicking the green compilation button the project will compile and execute.</span>
			<img src="img/vs-start.png" alt="Visual Studio run current document" />
		</div>
	</div>
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

    img {
		    display: block;
		    margin: 32px auto 0;
		    max-width: 100%;
    }
</style>
