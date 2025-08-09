import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		minify: 'terser',
		lib: {
			entry: resolve(__dirname, 'src/ckeditor.js'),
			name: 'ckeditor',
			formats: ['umd'],
			fileName: 'ckeditor',
		}
	},
	esbuild: {
		legalComments: 'external'
	}
});
