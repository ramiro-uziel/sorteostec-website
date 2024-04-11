<script>
  import Sidebar from "/src/components/Sidebar.svelte";
  let sidebarVisible = false;
  function toggleSidebar() {
    console.log("si");
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
        class="flex flex-col md:flex-row rounded-lg border border-gainsboro p-3 ml-3"
      >
        <div class="p-2 flex-col md:w-full">
          <div
            class="bg-st-blue-light text-st-blue p-2 rounded-lg flex flex-row justify-between md:gap-20"
          >
            <p class="font-semibold text-st-blue">Mi saldo actual</p>
            <p class="text-sm font-normal">$0.00</p>
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
            <button
              on:click={toggleSidebar}
              class="rounded-lg p-3 px-6 border text-sm text-zinc-800 font-normal border-zinc-800 hover:bg-zinc-800 hover:text-white duration-100"
            >
              Abonar saldo
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t-2 border-gray-300 w-full my-4"></div>
    <div class="p-6 ml-3">
      <div class="flex flex-col">
        <h2 class="text-xl md:text-2xl font-semibold text-st-blue mb-2">
          Estado de Cuenta
        </h2>
        <div class=" border border-gainsboro rounded-lg">
          <div class="flex flex-row p-2 justify-between px-5">
            <p class="text-sm font-normal">Movimiento</p>
            <p class="text-sm font-normal">Fecha</p>
            <p class="text-sm font-normal">Monto</p>
            <p class="text-sm font-normal">Metodo</p>
            <p class="text-sm font-normal">Factura</p>
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
  <div
    class={`fixed px-4 inset-y-0 right-0 transform ${!sidebarVisible ? "translate-x-full" : "-translate-x-100"} w-72 bg-white  z-10 transition-transform border-l border-gainsboro  duration-200 ease-in-out`}
  >
    <!-- {#if sidebarVisible} -->
    <div class="flex flex-col justify-between h-full">
      <div>
        <div class="flex flex-row gap-4 p-1 pt-3 pb-3 text-st-blue">
          <button on:click={toggleSidebar}>
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </button>
          <!-- <p class="text-sm font-normal pt-1">Volver</p> -->
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
    <!-- {/if} -->
  </div>
</div>
