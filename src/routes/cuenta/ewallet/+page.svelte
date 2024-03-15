<script>
  import Sidebar from "/src/components/Sidebar.svelte";
  import { onMount, onDestroy } from "svelte";
  import Boleto from "../assets/icons/boleto.svelte";
  import BoletoHover from "../assets/icons/boleto-hover.svelte";
  import Dropdown from "./Dropdown.svelte";
  import DropdownWide from "./DropdownWide.svelte";
  import DropdownItem from "./DropdownItem.svelte";
  import DropdownWideItem from "./DropdownWideItem.svelte";

  let sidebarVisible = false;
  let headerElement;

  function toggleSidebar() {
    sidebarVisible = !sidebarVisible;
  }
</script>

<div class="flex lg:flex-row max-w-7xl mx-auto">
  <div class="flex lg:flex-row items-start">
    <div class="mt-10">
      <Sidebar />
    </div>
    <div class="w-px bg-gray-300 h-full"></div>
  </div>
  <div class="w-full">
    <div class="p-6 mt-3">
      <h1 class="p-3 text-3xl md:text-4xl font-semibold text-st-blue">
        E-wallet
      </h1>
      <div
        class="flex flex-col md:flex-row rounded-lg border border-gainsboro p-3"
      >
        <div class="p-2 flex-col md:w-full">
          <div
            class="bg-st-blue-light text-st-blue p-2 rounded-lg flex flex-row justify-between md:gap-20"
          >
            <p class="font-semibold text-st-blue">Mi saldo actual</p>
            <p class="text-sm font-normal">$0.00</p>
          </div>

          <div class="flex flex-row justify-between p-3">
            <div class="flex-col">
              <p class="text-sm font-normal mb-1">Saldo abonado</p>
              <p class="text-sm font-normal">Premios por cobrar</p>
            </div>
            <div class="flex-col">
              <p class="text-sm font-normal mb-1">$0.00</p>
              <p class="text-sm font-normal">$0.00</p>
            </div>
          </div>
        </div>
        <div
          class="p-3 flex-col border-t border-gainsboro md:border-none w-full"
        >
          <p class="text-sm font-normal mb-3">
            Agiliza tus compras abonando anticipadamente saldo a tu e-wallet
          </p>
          <div class="flex flex-row gap-3">
            <a
              href="#"
              class="rounded-lg p-3 px-6 border text-sm text-white bg-st-blue font-normal border-zinc-800 hover:text-st-blue-light duration-100"
            >
              Mis premios
            </a>
            <a
              href="#"
              class="rounded-lg p-3 px-6 border text-sm text-zinc-800 font-normal border-zinc-800 hover:bg-zinc-800 hover:text-white duration-100"
            >
              Abonar saldo
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t-2 border-gray-300 w-full my-4"></div>
    <div class="p-6">
      <div class="flex flex-col">
        <h2 class="text-xl md:text-2xl font-semibold text-st-blue mb-2">
          Estado de Cuenta
        </h2>
        <div class=" border border-gainsboro rounded-lg">
          <div class="flex flex-row p-2">
            <div class="flex-col w-full">
              <p class="text-sm font-normal">Movimiento</p>
            </div>
            <div class="flex-col w-full">
              <p class="text-sm font-normal">Fecha</p>
            </div>
            <div class="flex-col w-full">
              <p class="text-sm font-normal">Monto</p>
            </div>
            <div class="flex-col w-full">
              <p class="text-sm font-normal">Metodo</p>
            </div>
            <div class="flex-col w-full">
              <p class="text-sm font-normal">Factura</p>
            </div>
          </div>
          <div
            class="flex flex-row border-t border-gainsboro p-2 justify-center"
          >
            <p class="text-sm font-normal">No se encontraron registros</p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
