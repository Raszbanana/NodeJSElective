<script>
  import Parent from "../components/Parent/Parent.svelte";
  import Child from "../components/Child/Child.svelte";

  import { supermarket } from "../src/store/supermarket";

  console.log(supermarket);

  const parents = [
    {
      key: 1,
      name: "Adam",
    },
    {
      key: 2,
      name: "Eve",
    },
  ];

  const children = [
    {
      key: 1,
      name: "Hans",
    },
    {
      key: 2,
      name: "Bertha",
    },
    {
      key: 3,
      name: "Tomasz",
    },
  ];

  function onFamilyMeetingCalled(whoCalled) {
    console.log("Family meeting called by", whoCalled);
  }
  
</script>

<h1>Home of the Svelte fam</h1>

{#each parents as parent (parent.key)}
  <Parent handleFamilyMeetingCall={onFamilyMeetingCalled} name={parent.name} />
{/each}

<Child
  handleFamilyMeetingCall={onFamilyMeetingCalled}
  stereotype="black-sheep"
  name={children[0].name}
/>
<Child
  handleFamilyMeetingCall={onFamilyMeetingCalled}
  isGirl={true}
  name={children[1].name}
/>
<Child
  handleFamilyMeetingCall={onFamilyMeetingCalled}
  stereotype="bright-kid"
  name={children[2].name}
/>

<h1>This is the online portal for the supermarket</h1>
<p>{JSON.stringify($supermarket, null, 1)}</p>
