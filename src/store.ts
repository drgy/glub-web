import { writable } from 'svelte/store';

export const name = writable('');
export const version = writable('');
export const description = writable('');
export const resPath = writable('');
export const srcPath = writable('');

function createLibraries() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		updateVersion: (name, version) => update(libraries => {
			const index = libraries.findIndex(library => library.name === name);

			if (index === -1) {
				return [ ...libraries, { name, version }];
			}

			libraries[index].version = version;

			return libraries;
		}),
		toggle: (name, version) => update(libraries => {
			const index = libraries.findIndex(library => library.name === name);

			if (index === -1) {
				return [ ...libraries, { name, version }];
			}

			return libraries.splice(index, 1);
		})
	};
}

export const libraries = createLibraries();
