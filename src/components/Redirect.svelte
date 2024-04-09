<script>
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";

  export let passcondition;
  export let logout = false;
  export let redirect = "/";

  onMount(async () => {
    if (browser && !passcondition) {
      if (logout) {
        // Cleanup cookies
        goto("/login.html");
      } else goto(redirect);
    }
  });
</script>

{#if passcondition} <slot /> {/if}
