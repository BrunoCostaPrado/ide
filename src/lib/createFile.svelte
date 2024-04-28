<script lang="ts" context="module">
	import {
		writeFile,
		type FsTextFileOption,
		writeTextFile,
		BaseDirectory
	} from "@tauri-apps/api/fs"
	import { message } from "@tauri-apps/api/dialog"

	const handleClick = async () => {
		const f: FsTextFileOption = { path: "./test.txt", contents: "Hello, World!" }

		await writeFile(f)
		await message("File Created")
	}
</script>

<main>
	<button on:click={handleClick}> Create File </button>
</main>
