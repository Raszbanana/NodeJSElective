<script>
import UserRegistration from './pages/userRegistration/UserRegistration.svelte';
import { onMount } from "svelte";
import Colors from "./pages/Colors/Colors.svelte"
let username;

onMount(async ()=>{
	const response = await fetch("api/fetchuser");
  const { data } = await response.json();

	username = data;
})

</script>

<main>
	{#if username}
	<span>Last person to change the color: {username || "unknown"}</span>
		<Colors/>
	{:else}
		<UserRegistration/>
	{/if}
</main>

<style>
	main {
		margin-top: 20%;
		text-align: center;
	}
</style>