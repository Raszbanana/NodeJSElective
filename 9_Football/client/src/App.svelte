<script>
	import { onMount } from "svelte";
	import { baseURL } from "./store/generalStore"

	let players = [];

	onMount(async () => {
		 const response = await fetch($baseURL + "/players");
		 const { data: playersArray } = await response.json();
		 players = playersArray;
	});
</script>

<main>
	<h1>{JSON.stringify(players)}</h1>
	<h1>{players[0]?.name}</h1>
</main>
<footer>
	@{new Date().getFullYear()}
	About 
	Contact
</footer>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		min-height: calc(100vh - 100px);
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	footer {
		background-color: teal;
		
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>