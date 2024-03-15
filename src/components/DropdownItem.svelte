<script>
  import { getContext } from "svelte";

  const closeDropdown = getContext("closeDropdown");
</script>

<button
  class="text-st-blue block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
  role="menuitem"
  tabindex="0"
  id="menu-item-0"
  on:click={closeDropdown}
>
  <slot />
</button>
