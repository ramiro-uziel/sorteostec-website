<script>
  import { getContext } from "svelte";

  const closeDropdown = getContext("closeDropdown");
</script>

<div
  class="text-st-blue block px-4 py-2 text-sm hover:bg-gray-200"
  role="menuitem"
  tabindex="-1"
  id="menu-item-0"
  on:click={closeDropdown}
>
  <slot />
</div>
