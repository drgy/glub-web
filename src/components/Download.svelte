<script>
	import Container from './Container.svelte';
	import { name, version, description, resPath, srcPath, libraries } from '../store.ts';
	import JSZip from 'jszip';
	import * as FileSaver from 'file-saver';

	const defaults = {
		name: 'glub',
		version: '1.0.0',
		description: 'Project description',
		resPath: 'res/',
		srcPath: 'src/',
	};

	let timer;
	let status;

	libraries.subscribe(libraries => {
		debounce(libraries);
	});

	function debounce(libraries) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			getStatus(libraries);
		}, 3000);
	}

	async function getStatus(libraries) {
		status = await (await fetch(`${import.meta.env.VITE_GLUB_API}/compatible`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(libraries)
		})).text();
	}

	function getReqBody() {
		return {
			name: $name || defaults.name,
			version: $version || defaults.version,
			description: $description || defaults.description,
			resPath: $resPath || defaults.resPath,
			srcPath: $srcPath || defaults.srcPath,
			libraries: $libraries
		};
	}

	async function fetchData(cmake = true) {
		return await fetch(`${import.meta.env.VITE_GLUB_API}/${cmake ? 'cmake' : 'cpp'}`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(getReqBody())
		});
	}

	async function downloadCmake() {
		let cmake = await (await fetchData()).text();

		const element = document.createElement('a');
		element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(cmake)}`);
		element.setAttribute('download', 'CMakeLists.txt');
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	}

	async function downloadProject() {
		let cmake = fetchData(true);
		let cpp = fetchData(false);

		cmake = await (await cmake).text();
		cpp = await (await cpp).json();

		const zip = new JSZip();
		zip.file('CMakeLists.txt', cmake);
		zip.folder($srcPath || defaults.srcPath);

		for (const [ file, content ] of Object.entries(cpp)) {
			zip.file(`${$srcPath || defaults.srcPath}/${file}.${file === 'main' ? 'cpp' : 'h'}`, content);
		}

		zip.generateAsync({ type: "blob" }).then(content => {
			FileSaver.saveAs(content, `${$name || 'glub'}.zip`);
		});
	}
</script>

<Container title="Download">
	<div class="container">
		<img src="img/zip.svg" alt="Download project" on:click={downloadProject} />
		<img src="img/cmake.svg" alt="Download CMakeLists.txt" on:click={downloadCmake} />

		{#if status === 'compatible'}
			<img src="img/linux.png" alt="Linux compatible" />
		{/if}

		{#if status === 'compatible'}
			<img src="img/windows.svg" alt="Windows compatible" />
		{/if}

		<span>{status}</span>
	</div>
</Container>

<style lang="scss">
	.container {
		display: flex;
		justify-content: space-between;

		& > * {
			flex: 1;
		}

		img {
			height: 40px;
			padding: 8px;
			cursor: pointer;
			fill: $text-main;
		}
	}
</style>
