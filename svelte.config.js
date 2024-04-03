/** OLD CONFIG
 import adapter from '@sveltejs/adapter-auto';
 import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
 @type {import('@sveltejs/kit').Config}
 const config = {
	 kit: {
		 adapter: adapter()
		},
		preprocess: vitePreprocess()
	};
	export default config;
**/

import adapter from '@sveltejs/adapter-static';
export default {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};