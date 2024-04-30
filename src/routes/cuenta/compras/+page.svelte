<script>
  import { purchaseList, ticketList } from "$lib/stores";
  import Sidebar from "/src/components/Sidebar.svelte";
  import { formatDate, toTitleCase } from "$lib/helpers";
  let sidebarVisible = false;
  function toggleSidebar() {
    sidebarVisible = !sidebarVisible;
  }

  let sortedRecargas = [];

  $: {
    sortedRecargas =
      $purchaseList && Array.isArray($purchaseList.compras)
        ? [...$purchaseList.compras].sort(
            (a, b) => new Date(b.fecha) - new Date(a.fecha)
          )
        : [];
    console.log(sortedRecargas);
  }

  let sortedBoletos = [];

  $: {
    sortedBoletos =
      $ticketList && Array.isArray($ticketList)
        ? [...$ticketList].sort(
            (a, b) => new Date(b.fecha_exp) - new Date(a.fecha_exp)
          )
        : [];
    console.log(sortedBoletos);
  }
</script>

<div class="flex lg:flex-row max-w-7xl mx-auto">
  <div class="flex lg:flex-row items-start">
    <div class=" mt-10 w-[50px] xl:w-[192px]">
      <div class="fixed">
        <Sidebar />
      </div>
    </div>
    <div class="w-px bg-gray-300 h-screen"></div>
  </div>
  <div class="w-full">
    <div class="p-6 mt-3">
      <h1 class="p-3 text-3xl md:text-4xl font-semibold text-st-blue">
        Compras
      </h1>
    </div>
    <div class="px-6 py-2 ml-4">
      <div class="flex flex-col">
        <h2 class="text-xl md:text-2xl font-semibold text-st-blue mb-2">
          Compras en proceso
        </h2>
        <div class=" border border-gainsboro rounded-lg">
          <div
            class="grid grid-cols-3 p-2 justify-between px-5 bg-gray-200 rounded-t"
          >
            <p class="text-sm font-normal">Fecha</p>
            <p class="text-sm font-normal">Monto</p>
            <p class="text-sm font-normal">Movimiento</p>
          </div>
          {#if $purchaseList.compras.length < 1}
            <div
              class="flex flex-row border-t border-gainsboro p-2 justify-center"
            >
              <p class="text-sm font-normal">No se encontraron registros</p>
            </div>
          {:else}
            {#each sortedRecargas as compra}
              <div
                class="grid grid-cols-3 border-t border-gainsboro p-2 justify-between px-5"
              >
                <p class="text-sm font-normal">{formatDate(compra.fecha)}</p>
                <p class="text-sm font-normal">
                  ${compra.monto}
                </p>
                <p class="text-sm font-normal">
                  {toTitleCase(compra.movimiento)}
                </p>
              </div>
            {/each}
          {/if}
        </div>
        <!-- <div class=" border border-gainsboro rounded-lg">
          <div class="flex flex-row p-2 justify-between px-5">
            <p class="text-sm font-normal">Fecha</p>
            <p class="text-sm font-normal">Boletos</p>
            <p class="text-sm font-normal">Monto</p>
            <p class="text-sm font-normal">Folio</p>
            <p class="text-sm font-normal">Tipo de pago</p>
            <p class="text-sm font-normal">Estatus</p>
          </div>
          <div
            class="flex flex-row border-t border-gainsboro p-2 justify-center"
          >
            <p class="text-sm font-normal">No se encontraron registros</p>
          </div>
        </div> -->
      </div>
    </div>
    <div class="border-t-2 border-gray-300 w-full my-4"></div>
    <div class="px-6 py-2 ml-4">
      <div class="flex flex-col">
        <h2 class="text-xl md:text-2xl font-semibold text-st-blue mb-2">
          Mis boletos
        </h2>
        <div class=" border border-gainsboro rounded-lg">
          <div
            class="grid grid-cols-3 p-2 justify-between px-5 bg-gray-200 rounded-t"
          >
            <p class="text-sm font-normal">Fecha Expiracion</p>
            <p class="text-sm font-normal">Nombre</p>
            <p class="text-sm font-normal">Premio</p>
          </div>
          {#if sortedBoletos.length < 1}
            <div
              class="flex flex-row border-t border-gainsboro p-2 justify-center"
            >
              <p class="text-sm font-normal">No se encontraron registros</p>
            </div>
          {:else}
            {#each sortedBoletos as boleto}
              <div
                class="grid grid-cols-3 border-t border-gainsboro p-2 justify-between px-5"
              >
                <p class="text-sm font-normal">
                  {formatDate(boleto.fecha_exp)}
                </p>
                <p class="text-sm font-normal">
                  {toTitleCase(boleto.nombre)}
                </p>
                <p class="text-sm font-normal">
                  ${boleto.premio}
                </p>
              </div>
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </div>
  <div
    class={`fixed px-4 inset-y-0 right-0 transform ${!sidebarVisible ? "translate-x-full" : "-translate-x-100"} w-72 bg-white  z-10 transition-transform border-l border-gainsboro  duration-200 ease-in-out`}
  >
    <div class="flex flex-col justify-between h-full">
      <div>
        <div class="flex flex-row gap-4 p-1 pt-3 pb-3 text-st-blue">
          <button on:click={toggleSidebar}>
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </button>
        </div>
        <h2 class="text-xl md:text-2xl font-semibold text-st-blue mb-2 pt-2">
          Abonar a E-wallet
        </h2>
        <div
          class="flex flex-row justify-between text-st-blue p-1 border-b border-st-blue"
        >
          <div class="flex">
            <i class="fa fa-wallet pt-1 mr-2" aria-hidden="true"></i>
            <p>Mi saldo actual</p>
          </div>
          <p>$0.00</p>
        </div>
        <p class="text-sm font-normal pb-1 pt-4">Ingresa el monto por abonar</p>
        <input class="p-2 w-full border border-gainsboro rounded-lg" />
        <p class="text-sm font-normal pb-1 pt-2">Codigo de promocion</p>
        <input class="p-2 w-full border border-gainsboro rounded-lg" />
        <p class="mt-2">Selecciona tu método de abono</p>
        <div
          class="p-2 w-full border border-gainsboro rounded-md text-st-blue mb-2"
        >
          <i class="fa fa-credit-card mr-1" aria-hidden="true"></i> Tarjeta crédito
          o débito
        </div>
        <div class="p-2 w-full border border-gainsboro rounded-md text-st-blue">
          <i class="fa fa-gift mr-1" aria-hidden="true"></i> Tarjetas de regalo
        </div>
      </div>
      <div class="py-4 text-sm flex flex-col gap-2">
        <button
          on:click={toggleSidebar}
          class="bg-st-blue rounded p-4 text-white hover:bg-st-blue-light hover:text-st-blue duration-100"
        >
          <p class="text-sm font-bold">Abonar</p>
        </button>
      </div>
    </div>
  </div>
</div>
