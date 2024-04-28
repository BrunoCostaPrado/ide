<script lang="ts">
	import { page } from "$app/stores"
	import { onMount } from "svelte"
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Drawer,
		CloseButton,
		SidebarDropdownWrapper
	} from "flowbite-svelte"
	import { Cog } from "svelte-heros-v2"
	import { sineIn } from "svelte/easing"

	// Append the following
	// Navigation component
	let drawerHidden: boolean = false
	const toggleDrawer = () => {
		drawerHidden = !drawerHidden
	}
	let divClass = "w-full md:block md:w-auto pr-8"
	let ulClass =
		"flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium"
</script>

<Navbar let:hidden let:toggle>
	<NavHamburger on:click={toggleDrawer} btnClass="ml-3 lg:hidden" />
	<NavBrand href="/" class="lg:ml-64">
		<!-- <Cog /> -->
		<span class="self-center whitespace-nowrap pl-4 text-xl font-semibold dark:text-white">
			My Website
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />

	<NavUl {hidden} {divClass} {ulClass}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/">About</NavLi>
		<NavLi href="/">GitHub</NavLi>
	</NavUl>
</Navbar>

<div class="mx-auto flex w-full px-4">
	<main class="mx-auto w-full lg:ml-72">
		<slot />
	</main>
</div>
