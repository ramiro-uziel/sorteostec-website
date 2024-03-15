<script>
  let tabs = [
    { name: "Mi Perfil", icon: "fa-solid fa-user", link: "#foo" },
    { name: "E-wallet", icon: "fa-solid fa-wallet", link: "#foo" },
    { name: "Compras", icon: "fa-solid fa-shopping-bag", link: "#foo" },
  ];
</script>

<div class="text-sm flex flex-col gap-2">
  {#each tabs as tab}
    <a
      href={tab.link}
      class={"border rounded p-4 shadow-md hover:bg-st-blue-light hover:text-st-blue duration-100 "}
    >
      <p class="text-sm font-bold">{tab.name}</p>
    </a>
  {/each}
</div>
