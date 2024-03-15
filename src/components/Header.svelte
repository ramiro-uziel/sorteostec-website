<script>
  import Boleto from "../assets/icons/boleto.svelte";
  import BoletoHover from "../assets/icons/boleto-hover.svelte";
  import Dropdown from "./Dropdown.svelte";
  import DropdownWide from "./DropdownWide.svelte";
  import DropdownItem from "./DropdownItem.svelte";

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

  let userTabs = [
    { name: "Perfil", icon: "fa-solid fa-user", link: "#foo" },
    { name: "E-wallet", icon: "fa-solid fa-wallet", link: "#foo" },
    { name: "Compras", icon: "fa-solid fa-shopping-bag", link: "#foo" },
  ];
</script>

<header class="sticky z-10 top-0 flex flex-col items-center">
  <nav
    class="duration-200 w-full px-8 flex justify-center border border-solid py-4 bg-st-blue border-transparent"
  >
    <div class="flex flex-row w-full max-w-6xl items-center justify-between">
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
        href="#foo"
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
    </div>
  </nav>
  <nav
    class="bg-st-blue-light text-slate-950 w-full flex justify-end lg:justify-center"
  >
    <div class="flex flex-column gap-2 xl:gap-40 justify-center items-center">
      <div class="hidden gap-0 justify-center items-center mx-auto lg:flex">
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
      <div class="px-4">
        <DropdownWide>
          <p slot="title" class="text-sm font-semibold">
            <i class="fa-solid fa-wallet text-st-blue pr-2"></i>
            $1000
          </p>
          <div class="flex flex-col gap-3 text-sm w-72">
            <div class="flex flex-row px-4 mt-4 gap-1 justify-between">
              <p class="text-st-blue font-semibold">Mi saldo actual</p>
              <p class="text-st-blue font-semibold">$1000</p>
            </div>
            <hr
              class="h-px mb-1 st-blue border-1 border-dotted border-st-blue"
            />

            <div class="flex flex-row gap-2 text-xs px-4 justify-between">
              <p class="text-gray-400">Saldo abonado</p>
              <p class="text-gray-400">$1000</p>
            </div>
            <div class="flex flex-row gap-2 text-xs px-4 justify-between">
              <p class="text-gray-400">Premios por cobrar</p>
              <p class="text-gray-400">$1000</p>
            </div>
            <div class=" flex flex-row justify-between gap-2 p-2 px-4">
              <a
                href="#foo"
                class="border border-st-blue p-2 rounded flex align-middle justify-center w-full text-st-blue hover:bg-st-blue-light hover:text-st-blue duration-200"
              >
                <p class="font-semibold px-1">E-wallet</p>
              </a>
              <a
                href="#foo"
                class="border border-st-blue bg-st-blue p-2 rounded flex align-middle justify-center w-full text-white hover:bg-st-blue-light hover:text-st-blue duration-200"
              >
                <p class="font-semibold px-1">Abonar</p>
              </a>
            </div>
          </div>
        </DropdownWide>
        <Dropdown>
          <p slot="title" class="text-sm font-semibold">
            <i class="fa-solid fa-user text-st-blue pr-2"></i>
            User
          </p>
          {#each userTabs as tab}
            <a href={tab.link}>
              <DropdownItem>
                <i class="{tab.icon} text-st-blue pr-2"></i>
                {tab.name}
              </DropdownItem>
            </a>
          {/each}
        </Dropdown>
      </div>
    </div>
  </nav>
</header>
