<script type="ts" context="module">
	import PuzzlePiece from "svelte-heros-v2/PuzzlePiece.svelte"
	import { FolderPlusSolid, FileSolid, CodeBranchSolid } from "flowbite-svelte-icons"

	import CreateFile from "@/lib/createFile.svelte"
</script>

<div class="flex justify-end bg-black">
	<div class=" sidebar-icon absolute top-0 h-screen w-20 flex-col bg-blue-600 p-5 pt-8 shadow-lg">
		<!-- <div>Side Bar</div> -->
		<!-- <div class=""></div> -->

		<div>
			<CreateFile />
		</div>
		<!-- <button> -->
		<div>
			<FolderPlusSolid class="h-10 w-10 p-1 pt-1 " />
		</div>
		<!-- </button> -->
		<div><FileSolid class="h-10 w-10 pt-1" /></div>

		<div><CodeBranchSolid class="h-10 w-10 pt-1" /></div>

		<div class="pt-4">
			<!-- Extensions -->
			<PuzzlePiece variation="solid" class="h-10 w-10" />
		</div>
	</div>
	<div>
		<!-- <img src={file} alt="New File" width="50" /> -->
		<!-- <div>Home</div> -->
		<!-- <div>Profile</div> -->
		<!-- <div>Settings</div> -->
	</div>
</div>
