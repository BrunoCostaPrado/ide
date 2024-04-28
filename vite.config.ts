import { defineConfig } from "vitest/config"
import { enhancedImages } from "@sveltejs/enhanced-img"
import { sveltekit } from "@sveltejs/kit/vite"

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	},
	clearScreen: false,
	// Tauri expects a fixed port, fail if that port is not available
	server: {
		strictPort: true
	},
	build: {
		// Tauri uses Chromium on Windows and WebKit on macOS and Linux
		// target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
		// don't minify for debug builds
		minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
		// produce sourcemaps for debug builds
		sourcemap: !!process.env.TAURI_DEBUG
	}
})
