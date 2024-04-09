import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const API_BASE_URL = 'http://20.57.127.87';  // Your external API URL

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		watch: {
			usePolling: true
		},
		proxy: {
			'/api': {
				target: `${API_BASE_URL}/api`,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
});
