<script>
import { supermarket } from "../../src/store/supermarket";

  export let name;
  export let isGirl = false;
  export let stereotype;
  export let handleFamilyMeetingCall;

  function eatCandy(){
    supermarket.update(storeValue => {
      if (storeValue.candy > 0) storeValue.candy--;
      return storeValue;
    })
  }
</script>

<div
  class:girly={isGirl}
  class={stereotype || "beyond-any-stereotype"}
  on:click={handleFamilyMeetingCall(name)}
>
  <h3>Hi i am {name}</h3>
  <p>Pieces of candy in the store: {$supermarket.candy}</p>
  <button on:click={eatCandy}>Eat candy</button>
</div>

<style>
  .girly {
    background-color: pink;
  }

  .black-sheep {
    background-color: black;
    color: white;
  }
  .bright-kid {
    background: yellow;
  }
</style>
