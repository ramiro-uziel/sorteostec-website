<script>
  import Sidebar from "/src/components/Sidebar.svelte";
  import { userProfile } from "$lib/stores";
  let viewEdit = false;
  // const updatePersonalInformation = writable(false);

  let formData = {
    nombre: $userProfile.nombre,
    apellidoMaterno: $userProfile.apellidoMaterno,
    apellidoPaterno: $userProfile.apellidoPaterno,
    telefono: "",
    estado: "",
    ciudad: "",
    email: "",
    password: "",
  };

  function toggleSaldoBox() {
    viewEdit = !viewEdit;
    // updatePersonalInformation.update((value) => !value);
  }

  async function handleUpdate() {
    const opciones = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      console.log(opciones);
      toggleSaldoBox();
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
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
        Mi perfil
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
          class="bg-st-blue-light text-st-blue p-5 rounded-lg flex md:flex-row justify-between items-start w-full md:w-[520px]"
        >
          <div class="flex flex-col gap-1 pl-2">
            <h2 class="text-xl md:text-2xl font-semibold">
              Hola, {$userProfile.name}
            </h2>
            <p class="text-sm font-normal">{$userProfile.email}</p>
            <p class="text-sm font-mono">{$userProfile.phone}</p>
            <p class="text-sm font-normal">{$userProfile.city}</p>
          </div>
          <button
            on:click={toggleSaldoBox}
            class="rounded-lg p-3 px-6 border text-sm text-zinc-800 font-normal border-zinc-800 hover:bg-zinc-800 hover:text-white duration-100 self-start"
          >
            Editar
          </button>
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

    <div
      class={`fixed inset-0 flex items-center justify-center z-50 ${!viewEdit ? "hidden" : ""}`}
    >
      <div class="fixed inset-0 bg-black opacity-50"></div>
      <div class="relative bg-white rounded-lg p-8 sm:w-[500px] xs:w-[250px]">
        <div class="flex flex-row gap-4 p-1 pt-3 pb-3 text-st-blue">
          <button on:click={toggleSaldoBox}>
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </button>
        </div>

        <div class="p-3">
          <div class="mb-2">
            <input
              type="text"
              bind:value={formData.name}
              name="nombre"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Nombre"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              bind:value={formData.apellidoPaterno}
              name="apellidoPaterno"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Apellido Paterno"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              bind:value={formData.apellidoMaterno}
              name="apellidoMaterno"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Apellido Materno"
            />
          </div>
          <div class="mb-2">
            <input
              type="tel"
              bind:value={formData.telefono}
              name="telefono"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Teléfono"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              bind:value={formData.estado}
              name="estado"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Estado"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              bind:value={formData.ciudad}
              name="ciudad"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Ciudad"
            />
          </div>
          <div class="mb-2">
            <input
              type="email"
              bind:value={formData.email}
              name="email"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Correo electrónico"
            />
          </div>
          <div class="mb-2">
            <input
              type="password"
              bind:value={formData.password}
              name="password"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Contraseña"
            />
          </div>
          <div class="mb-2">
            <input
              type="password"
              bind:value={formData.passwordConfirm}
              name="passwordConfirm"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Confirmar Contraseña"
            />
          </div>
          <button
            type="button"
            on:click={handleUpdate}
            class="w-full bg-st-blue rounded p-4 text-white hover:bg-st-blue-light hover:text-st-blue duration-100"
          >
            Actualizar Informacion
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
