import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
		adapter: adapter(),
		paths: {
			base: '/dnd-character-creation-lite',
		}
	},
  
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
}
