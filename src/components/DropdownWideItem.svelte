<script>
  import { getContext } from "svelte";

  const closeDropdown = getContext("closeDropdown");
</script>

<div on:click={closeDropdown}>
  <slot />
</div>
