<script>
    import Apple from "./Apple.svelte";

    let apples = ["🍎", "🍎", "🍎"];

    function pickApple() {
        apples.pop()
        apples = apples;
    }
</script>
<div id="tree">
<h2>I'm a tree</h2>
{#each apples as apple}
<Apple {apple}/>
{/each}

<button on:click={() => pickApple()}>Pick an apple</button>
</div>


<style>
    #tree {
        background-color: green;
        border-radius: 40px;
        border-style: solid;
        border-bottom-color: black;

    }

</style>