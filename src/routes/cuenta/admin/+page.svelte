<script>
  import Sidebar from "/src/components/Sidebar.svelte";
  import PlaceholderChart from "/src/components/PlaceholderChart.svelte";
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
      <h1 class="p-3 text-3xl md:text-4xl font-semibold text-st-blue">Admin</h1>
      <div class="flex flex-col">
        <div class="p-3 w-full md:w-80">
          <h2 class="text-xl md:text-2xl font-semibold text-st-blue">
            Reportes
          </h2>
        </div>
        <div class="flex flex-col md:flex-row gap-4">
          <div
            class="bg-st-blue-light text-st-blue p-5 rounded-lg flex flex-col lg:flex-row justify-between gap-4 max-w-80"
          >
            <h2 class="text-xl font-semibold items-center gap-2">
              Vistas <p class="text-sm">mes</p>
            </h2>
            <h2 class="text-4xl md:text-6xl font-semibold text-st-blue">240</h2>
          </div>
          <div
            class="bg-st-blue-light text-st-blue p-5 rounded-lg flex flex-col lg:flex-row justify-between gap-4 max-w-80"
          >
            <h2 class="text-xl font-semibold items-center gap-2">
              Compras <p class="text-sm">mes</p>
            </h2>
            <h2 class="text-4xl font-semibold text-st-blue">$30,512</h2>
          </div>
          <div
            class="bg-st-blue-light text-st-blue p-5 rounded-lg flex flex-col lg:flex-row justify-between gap-4 max-w-80"
          >
            <h2 class="text-xl font-semibold items-center gap-2">
              Usuarios <p class="text-sm">nuevos en el mes</p>
            </h2>
            <h2 class="text-4xl font-semibold text-st-blue">204</h2>
          </div>
          <div
            class="bg-st-blue-light text-st-blue p-5 rounded-lg flex flex-col lg:flex-row justify-between gap-4 max-w-80"
          >
            <h2 class="text-xl font-semibold items-center gap-2">
              Registros <p class="text-sm">mes</p>
            </h2>
            <h2 class="text-4xl font-semibold text-st-blue">182</h2>
          </div>
        </div>
      </div>
      <div class="p-6 w-full">
        <PlaceholderChart></PlaceholderChart>
      </div>
    </div>
    <div class="border-t-2 border-gray-300 w-full my-4"></div>
    <div class="p-6">
      <div class="flex flex-col md:flex-row">
        <div class="p-3 w-full md:w-80">
          <h2 class="text-xl md:text-2xl font-semibold text-st-blue">
            Descarga reporte
          </h2>
          <p>En formato PDF</p>
        </div>
        <div
          class="bg-transparent border border-gray-300 text-st-blue p-5 rounded-lg flex flex-col md:flex-row gap-4 md:gap-40 items-start w-full md:w-[520px]"
        >
          <div class="flex flex-col gap-3 w-full">
            <p class="text-sm font-normal">Elige el periodo del reporte</p>
            <a
              href="#"
              class="rounded-lg p-3 px-3 border text-sm text-st-blue font-normal border-zinc-400"
            >
              Editar
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
