<script>
  import { clickoutside } from "@svelte-put/clickoutside";
  import { quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  let menuOpen = false;
  let buttonActive = false; // State to track button's active style

  function toggleMenu() {
    menuOpen = !menuOpen;
    buttonActive = !buttonActive; // Toggle button active state
  }

  function closeMenu() {
    menuOpen = false;
    buttonActive = false; // Reset button active state on click outside
  }
</script>

<div
  class="relative inline-block text-left"
  use:clickoutside
  on:clickoutside={closeMenu}
>
  <div>
    <button
      on:click={toggleMenu}
      type="button"
      class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm duration-200 {buttonActive
        ? 'bg-gray-50'
        : 'hover:bg-gray-50'}"
      id="menu-button"
      aria-expanded={menuOpen}
      aria-haspopup="true"
    >
      <slot name="title" />
      <svg
        class="-mr-1 h-5 w-5 st-blue"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>

  {#if menuOpen}
    <div
      transition:fly={{
        y: -20,
        duration: 300,
        opacity: 0,
        easing: quintOut,
      }}
      class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        <slot />
        <!--
            <form method="POST" action="#" role="none">
                <button
                type="submit"
                class="text-st-blue block w-full px-4 py-2 text-left text-sm hover:bg-gray-200"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3">Sign out</button
                >
            </form>
        -->
      </div>
    </div>
  {/if}
</div>
