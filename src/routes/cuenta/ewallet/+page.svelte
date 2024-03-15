<script>
  import Sidebar from "/src/components/Sidebar.svelte";
</script>

<div class="flex lg:flex-row max-w-7xl mx-auto">
  <div class="flex lg:flex-row items-start">
    <div class="mt-6">
      <Sidebar />
    </div>
    <div class="w-px bg-gray-300 h-full"></div>
  </div>
  <div class="mb-96 w-full">
    <div class="p-6">
      <h1 class="p-3 text-3xl md:text-4xl font-semibold text-st-blue">
        E-wallet
      </h1>
      <div class="flex flex-col md:flex-row">
        <div class="p-3 w-full md:w-80">
          <h2 class="text-xl md:text-2xl font-semibold text-st-blue">
            Datos personales
          </h2>
          <p class="text-sm font-normal">
            Para compras más rápidas y sencillas, actualiza todos tus datos.
          </p>
        </div>
        <div
          class="bg-st-blue-light text-st-blue p-5 rounded-lg flex flex-col md:flex-row gap-4 md:gap-40 items-start w-full md:w-[520px]"
        >
          <div class="flex flex-col">
            <h2 class="text-xl md:text-2xl font-semibold">Hola, Juan Juárez</h2>
            <p class="text-sm font-normal">juan@yahoo.com</p>
            <p class="text-sm font-normal">811234567</p>
            <p class="text-sm font-normal">Mérida</p>
          </div>
          <a
            href="#"
            class="rounded-lg p-3 px-6 border text-sm text-zinc-800 font-normal border-zinc-800 hover:bg-zinc-800 hover:text-white duration-100"
          >
            Editar
          </a>
        </div>
      </div>
    </div>
    <div class="border-t-2 border-gray-300 w-full my-4"></div>
    <div class="p-6">
      <div class="flex flex-col md:flex-row">
        <div class="p-3 w-full md:w-80">
          <h2 class="text-xl md:text-2xl font-semibold text-st-blue">
            Datos adicionales
          </h2>
        </div>
        <div
          class="bg-transparent border border-gray-300 text-st-blue p-5 rounded-lg flex flex-col md:flex-row gap-4 md:gap-40 items-start w-full md:w-[520px]"
        >
          <div class="flex flex-col gap-3 w-full">
            <p class="text-sm font-normal">¿Eres parte de la comunidad TEC?</p>
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
