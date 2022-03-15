<script>
    export let name;
    export let handleFamilyMeetingCall;

</script>

<h1 class="parent" on:click={handleFamilyMeetingCall(name)}>Hi i am a Svelte parent, my name is {name}</h1>

<style>
    .parent{
        user-select:none;
    }
</style>