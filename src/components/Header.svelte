<script>
  import { onMount } from "svelte";
  import Boleto from "../assets/icons/boleto.svelte";
  import BoletoHover from "../assets/icons/boleto-hover.svelte";
  import Dropdown from "./Dropdown.svelte";
  import DropdownWide from "./DropdownWide.svelte";
  import DropdownItem from "./DropdownItem.svelte";
  import DropdownWideItem from "./DropdownWideItem.svelte";

  let sidebarVisible = false;
  let headerElement;
  let userLogged = true;

  function toggleSidebar() {
    sidebarVisible = !sidebarVisible;
  }

  let tabs = [
    { name: "Sorteos", link: "#" },
    { name: "Boletos", link: "#" },
    { name: "Historias", link: "#" },
    { name: "Juegos", link: "#" },
  ];

  let userTabs = [
    { name: "Perfil", icon: "fa-solid fa-user", link: "/cuenta/perfil" },
    { name: "E-wallet", icon: "fa-solid fa-wallet", link: "/cuenta/ewallet" },
    {
      name: "Compras",
      icon: "fa-solid fa-shopping-bag",
      link: "/cuenta/compras",
    },
  ];

  function updateHeaderHeight() {
    const height = headerElement.clientHeight;
    document.documentElement.style.setProperty(
      "--header-height",
      `${height}px`
    );
  }

  onMount(() => {
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  });
</script>

<header
  bind:this={headerElement}
  class="sticky top-0 z-10 px-6 flex py-4 bg-st-blue"
>
  <div
    class="flex flex-row w-full items-center justify-between max-w-[1500px] mx-auto"
  >
    <div class="flex flex-row gap-4 justify-start">
      <button on:click={toggleSidebar} class="relative mdsm:hidden">
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
          src="/images/Principal-Blanco.png"
          class="w-[150px]"
        />
      </a>
    </div>
    <div
      class="flex flex-column gap-2 xl:gap-42 justify-center items-center mx-auto"
    >
      <div
        class="hidden gap-0 pl-5 justify-center items-center mx-auto mdsm:flex"
      >
        {#each tabs as tab}
          <a
            href={tab.link}
            class="z-9 text-white py-2 rounded-md border-x-slate-50 md:px-3 lg:px-4 duration-200 text-sm hover:text-slate-950 hover:bg-white hover:shadow-md hover:scale-[105%]"
          >
            <p class="text-sm font-semibold">{tab.name}</p>
          </a>
        {/each}

        <div />
      </div>
    </div>

    <div class="flex flex-row items-center xl:flex-1 justify-end">
      {#if !userLogged}
        <div class="flex flex-row pr-6">
          <a
            href="/login"
            class="z-9 text-white py-2 rounded-md border-x-slate-50 px-2 lg:px-4 duration-200 text-sm hover:text-slate-950 hover:bg-white hover:shadow-md hover:scale-[105%]"
          >
            <p class="text-sm font-semibold">Iniciar sesion</p>
          </a>
          <a
            href="/registro"
            class="z-9 text-white py-2 rounded-md border-x-slate-50 px-2 lg:px-4 duration-200 text-sm hover:text-slate-950 hover:bg-white hover:shadow-md hover:scale-[105%]"
          >
            <p class="text-sm font-semibold">Registro</p>
          </a>
        </div>
      {/if}
      {#if userLogged}
        <div class="px-0 mdsm:px-4">
          <DropdownWide>
            <div
              slot="title"
              class="text-sm font-semibold flex flex-row items-center gap-1"
            >
              <i class="fa-solid fa-wallet pr-2"></i>
              <p class="mdsm:hidden xs-mdsm:flex mdxl:flex">$1000</p>
            </div>
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
              <DropdownWideItem>
                <div class=" flex flex-row justify-between gap-2 p-2 px-4">
                  <a
                    href="/cuenta/ewallet"
                    class="border border-st-blue p-2 rounded flex align-middle justify-center w-full text-st-blue hover:bg-st-blue-light hover:text-st-blue duration-200"
                  >
                    <p class="font-semibold px-1">E-wallet</p>
                  </a>
                  <a
                    href="/cuenta/ewallet"
                    class="border border-st-blue bg-st-blue p-2 rounded flex align-middle justify-center w-full text-white hover:bg-st-blue-light hover:text-st-blue duration-200"
                  >
                    <p class="font-semibold px-1">Abonar</p>
                  </a>
                </div>
              </DropdownWideItem>
            </div>
          </DropdownWide>
          <Dropdown>
            <div
              slot="title"
              class="text-sm font-semibold flex flex-row items-center gap-1"
            >
              <i class="fa-solid fa-user pr-2"></i>
              <p class="hidden xs-mdsm:flex mdxl:flex">User</p>
            </div>
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
      {/if}

      <a
        href="#"
        class="relative hidden mdsm:flex gap-2 border-2 overflow-hidden px-5 py-1.5 group rounded-full bg-white text-st-blue hover:scale-[102%] hover:bg-transparent hover:border-white hover:text-white duration-100"
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
  </div>
</header>
