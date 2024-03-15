<script>
  import { getContext } from "svelte";

  const closeDropdown = getContext("closeDropdown");
</script>

<button on:click={closeDropdown}>
  <slot />
</button>
