<script>
  import { page } from "$app/stores";

  let tabs = [
    { name: "Mi Perfil", icon: "fa-solid fa-user", link: "/cuenta/perfil" },
    { name: "E-wallet", icon: "fa-solid fa-wallet", link: "/cuenta/ewallet" },
    {
      name: "Compras",
      icon: "fa-solid fa-shopping-bag",
      link: "/cuenta/compras",
    },
  ];
</script>

<div class="text-sm flex flex-col gap-2 w-16 xl:w-48">
  {#each tabs as tab}
    <a
      href={tab.link}
      class="flex flex-row items-center gap-4 rounded-tl-md rounded-bl-md border border-transparent text-st-blue p-4 hover:shadow-md hover:border-st-blue duration-200 hover-indicator {$page
        .url.pathname === tab.link
        ? 'active border-r-st-blue'
        : ''}"
    >
      <i class={tab.icon}></i>
      <p class="hidden lg:hidden xl:block text-sm">{tab.name}</p>
    </a>
  {/each}
</div>

<style>
  .hover-indicator::after,
  .active::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 1.5%;
    background-color: #1b3589;
    opacity: 0;
    transform: translateX(100%);
    transition:
      transform 0.2s,
      opacity 0.2s;
  }

  .hover-indicator:hover::after,
  .active::after {
    transform: translateX(0%);
    opacity: 1;
  }

  .hover-indicator,
  .active {
    position: relative;
    overflow: hidden;
  }
</style>
