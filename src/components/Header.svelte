<script>
  import Menu from "../components/Menu.svelte";
  import MenuItem from "../components/MenuItem.svelte";
  import Boleto from "../assets/icons/boleto.svelte";
  import BoletoHover from "../assets/icons/boleto-hover.svelte";

  export let y;

  let sidebarVisible = false;

  function toggleSidebar() {
    sidebarVisible = !sidebarVisible;
    console.log(sidebarVisible);
  }

  let tabs = [
    { name: "Sorteos", link: "#foo" },
    { name: "Consulta de ganadores", link: "#foo" },
    { name: "Membresias", link: "#foo" },
    { name: "Historias", link: "#foo" },
    { name: "Líderes del Mañana", link: "#foo" },
    { name: "Juegos", link: "#foo" },
  ];
</script>

<header class="sticky z-10 top-0">
  <nav
    class={"duration-200 px-8 xl:px-80 lg:px-32 md:px-8 flex items-center justify-between border border-solid " +
      (y > 0
        ? "py-4 bg-st-blue border-blue-800 bg-opacity-100 "
        : "py-4 bg-st-blue border-transparent")}
  >
    <div class="flex flex-row gap-4">
      <button on:click={toggleSidebar} class="relative lg:hidden">
        <i class="fa-solid fa-bars text-white text-2xl"></i>
      </button>
      <div
        class={`fixed px-4 inset-y-0 left-0 transform ${sidebarVisible ? "translate-x-0" : "-translate-x-full"} w-72 bg-st-blue    text-white z-10 transition-transform  duration-200 ease-in-out`}
      >
        {#if sidebarVisible}
          <div class="flex flex-row gap-4 p-4">
            <button on:click={toggleSidebar}>
              <i class="fa-solid fa-bars text-white text-2xl"></i>
            </button>
            <a href="/">
              <img
                alt="logotipo"
                src="../src/assets/images/Principal-Blanco.png"
                class="w-[150px]"
              />
            </a>
          </div>
          <div class="py-4 text-sm flex flex-col gap-2">
            {#each tabs as tab}
              <a
                href={tab.link}
                class="bg-st-blue rounded-xl p-4 hover:bg-st-blue-light hover:text-st-blue duration-100"
              >
                <p class="text-sm font-bold">{tab.name}</p>
              </a>
            {/each}
          </div>
        {/if}
      </div>

      <a href="/">
        <img
          alt="logotipo"
          src="../src/assets/images/Principal-Blanco.png"
          class="w-[150px]"
        />
      </a>
    </div>
    <a
      href="#"
      class="relative hidden lg:flex gap-2 border-2 overflow-hidden px-5 py-1.5 group rounded-full bg-white text-st-blue hover:scale-[102%] hover:bg-transparent hover:border-white hover:text-white duration-100"
    >
      <div class="relative w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]">
        <div class=" absolute w-full h-full icon-transition icon-effect">
          <Boleto />
        </div>
        <div
          class="text-white absolute w-full h-full icon-transition icon-effect-hover"
        >
          <BoletoHover />
        </div>
      </div>

      <h4 class="font-semibold relative z-9">Comprar boletos</h4>
    </a>
  </nav>
  <nav
    class="bg-st-blue-light text-slate-950 items-center justify-center hidden lg:flex"
  >
    <div class="flex flex-column gap-16 justify-center items-center">
      <div class="flex gap-0 justify-center items-center mx-auto">
        {#each tabs as tab}
          <a
            href={tab.link}
            class="z-9 text-st-blue py-2 rounded-md border-x-slate-50 md:px-3 lg:px-4 duration-200 text-sm hover:text-slate-950 hover:bg-white hover:shadow-md hover:scale-[105%]"
          >
            <p class="text-sm font-semibold">{tab.name}</p>
          </a>
        {/each}

        <div />
      </div>
      <Menu>
        <div
          slot="toggle"
          class="flex flex-row gap-2 z-9 text-st-blue py-2 rounded-md border-x-slate-50 md:px-3 lg:px-4 duration-200 text-sm hover:text-slate-950 hover:bg-white"
        >
          <p class="text-sm font-semibold">
            <i class="fa-solid fa-user text-st-blue pr-2"></i>
            User
          </p>
        </div>
        <MenuItem><a href="#?">Perfil</a></MenuItem>
        <MenuItem><a href="#?">E-wallet</a></MenuItem>
        <MenuItem><a href="#?">Compras</a></MenuItem>
      </Menu>
    </div>
  </nav>

  <nav class="bg-st-blue-light text-slate-950 px-5 lg:hidden">
    <div class="flex flex-column gap-16 justify-end">
      <Menu>
        <div
          slot="toggle"
          class="gap-2 z-9 text-st-blue py-2 rounded-md border-x-slate-50 md:px-3 lg:px-4 duration-200 text-sm hover:text-slate-950 hover:bg-white"
        >
          <p class="text-sm font-semibold">
            <i class="fa-solid fa-user text-st-blue pr-2"></i>
            User
          </p>
        </div>
        <MenuItem><a href="#?">Perfil</a></MenuItem>
        <MenuItem><a href="#?">E-wallet</a></MenuItem>
        <MenuItem><a href="#?">Compras</a></MenuItem>
      </Menu>
    </div>
  </nav>
</header>
