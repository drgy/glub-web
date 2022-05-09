<script>
	import Container from './Container.svelte';
	import Tooltip from "./Tooltip.svelte";
	import { name, version, description, resPath, srcPath, libraries } from '../store.ts';
	import JSZip from 'jszip';
	import * as FileSaver from 'file-saver';
	import { Jumper } from 'svelte-loading-spinners'

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
		status = 'loading';
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
		<Tooltip text="Download project">
			<img src="img/zip.svg" alt="Download project" on:click={downloadProject} />
		</Tooltip>

		<Tooltip text="Download CMakeLists.txt">
			<img src="img/cmake.svg" alt="Download CMakeLists.txt" on:click={downloadCmake} />
		</Tooltip>

		{#if status === 'loading'}
			<Jumper color="#c5c8c6" duration="1.5s" ></Jumper>
		{/if}

		{#if status === 'incompatible'}
			<Tooltip text="Selected libraries are not compatible">
				<img src="img/x.svg" alt="Incompatible" />
			</Tooltip>
		{/if}

		{#if status === 'not_tested'}
			<Tooltip text="Selected libraries were not tested">
				<img src="img/question.svg" alt="Not tested" />
			</Tooltip>
		{/if}

		{#if (status === 'compatible' || status === 'linux_compatible')}
			<Tooltip text="Libraries are compatible on Linux">
				<img src="img/linux.png" alt="Linux compatible" />
			</Tooltip>
		{/if}

		{#if (status === 'compatible' || status === 'windows_compatible')}
			<Tooltip text="Libraries are compatible on Windows">
				<img src="img/windows.svg" alt="Windows compatible" />
			</Tooltip>
		{/if}
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
