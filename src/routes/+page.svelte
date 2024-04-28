<script lang="ts">
	import Greet from "@/lib/Greet.svelte"
	import Hello from "@/lib/Hello.svelte"
	import SideBar from "@/layout/sideBar.svelte"
	import Bar from "@/layout/Bar.svelte"
</script>

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> 

<h1 class="text-3xl font-bold underline">Hello world!</h1>

-->
<!-- <Greet />  -->

<main class="bg-black">
	<br />
	<SideBar />

	<!-- <Hello /> -->

	<Bar />
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
