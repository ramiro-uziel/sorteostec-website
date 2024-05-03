<script>
  import Sidebar from "/src/components/Sidebar.svelte";
  import Select from "svelte-select";
  import { writable } from "svelte/store";
  import { userProfile, userInformation } from "$lib/stores";
  import { estados_municipios } from "$lib/estados";

  let viewEdit = false;

  let errorMessages = writable({});

  let formData = {
    nombre: "",
    apellido_m: "",
    apellido_p: "",
    telefono: "",
    estado: "",
    ciudad: "",
  };

  $: {
    formData = {
      nombre: $userInformation.nombre,
      apellido_m: $userInformation.apellido_m,
      apellido_p: $userInformation.apellido_p,
      telefono: $userInformation.telefono,
      estado: $userInformation.estado,
      ciudad: $userInformation.ciudad,
    };
  }

  $: municipios = formData.estado?.municipios || [];

  function toggleViewEditBox() {
    viewEdit = !viewEdit;
  }

  function updateError(field) {
    errorMessages.update((currentErrors) => {
      delete currentErrors[field];
      return currentErrors;
    });
  }

  async function handleUpdate() {
    let errors = {};
    if (!formData.nombre) errors.nombre = "El nombre es obligatorio.";
    if (!formData.apellido_p)
      errors.apellido_p = "El apellido paterno es obligatorio.";
    if (!formData.apellido_m)
      errors.apellido_m = "El apellido materno es obligatorio.";
    if (!formData.telefono) errors.telefono = "El teléfono es obligatorio.";
    if (!formData.estado || !formData.estado.nombre)
      errors.estado = "El estado es obligatorio.";
    if (!formData.ciudad || !formData.ciudad.label)
      errors.ciudad = "La ciudad es obligatoria.";

    errorMessages.set(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    formData.ciudad = formData.ciudad.label;
    formData.estado = formData.estado.nombre;

    const opciones = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      console.log(opciones);
      const response = await fetch("/api/registro", opciones);
      if (!response.ok) throw new Error("Failed to update profile.");

      const profileResponse = await fetch("/api/perfil");
      const profileData = await profileResponse.json();
      userProfile.set(profileData);

      toggleViewEditBox();
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
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
            on:click={toggleViewEditBox}
            class="rounded-lg p-3 px-6 border text-sm text-zinc-800 font-normal border-zinc-800 hover:bg-zinc-800 hover:text-white duration-100 self-start"
          >
            Editar
          </button>
        </div>
      </div>
    </div>
    <div class="border-t-2 border-gray-300 w-full my-4"></div>

    <div
      class={`fixed inset-0 flex items-center justify-center z-50 ${!viewEdit ? "hidden" : ""}`}
    >
      <div class="fixed inset-0 bg-black opacity-50"></div>
      <div class="relative bg-white rounded-lg p-8 sm:w-[500px] xs:w-[250px]">
        <div class="flex flex-col gap-4 p-1 text-st-blue">
          <button
            on:click={toggleViewEditBox}
            class="flex flex-row items-center gap-3"
          >
            <i class="fa fa-angle-left" aria-hidden="true"></i>
            <h1>Regresar</h1>
          </button>
          <h1 class="text-xl font-semibold pl-3 pt-3">Editar perfil</h1>
        </div>

        <div class="p-3">
          <div class="mb-2">
            <input
              type="text"
              bind:value={formData.nombre}
              name="nombre"
              class="p-3 px-4 w-full border placeholder:text-[#78848f] rounded-lg {$errorMessages.nombre
                ? 'border-red-500 hover:border-red-800'
                : 'border-[#d8dbdf] hover:border-[#b2b8bf]'} rounded-lg"
              placeholder="Nombre"
              on:input={() => updateError("nombre")}
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              bind:value={formData.apellido_p}
              name="apellido_p"
              class="p-3 px-4 w-full border placeholder:text-[#78848f] rounded-lg {$errorMessages.apellido_p
                ? 'border-red-500 hover:border-red-800'
                : 'border-[#d8dbdf] hover:border-[#b2b8bf]'} rounded-lg"
              placeholder="Apellido Paterno"
              on:input={() => updateError("apellido_p")}
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              bind:value={formData.apellido_m}
              name="apellido_m"
              class="p-3 px-4 w-full border placeholder:text-[#78848f] rounded-lg {$errorMessages.apellido_m
                ? 'border-red-500 hover:border-red-800'
                : 'border-[#d8dbdf] hover:border-[#b2b8bf]'} rounded-lg"
              placeholder="Apellido Materno"
              on:input={() => updateError("apellido_m")}
            />
          </div>
          <div class="mb-2">
            <input
              type="tel"
              bind:value={formData.telefono}
              name="telefono"
              class="p-3 px-4 w-full border placeholder:text-[#78848f] rounded-lg {$errorMessages.telefono
                ? 'border-red-500 hover:border-red-800'
                : 'border-[#d8dbdf] hover:border-[#b2b8bf]'} rounded-lg"
              placeholder="Teléfono"
              on:input={() => updateError("telefono")}
            />
          </div>

          <div class="mb-2">
            <Select
              --height="51px"
              --border-radius="0.5rem"
              --border={$errorMessages.estado ? "1px solid rgb(239 68 68)" : ""}
              --border-hover={$errorMessages.estado
                ? "1px solid rgb(153 27 27)"
                : ""}
              inputAttributes={{ autocomplete: "off" }}
              items={estados_municipios}
              label="nombre"
              itemId="nombre"
              placeholder="Estado"
              class="p-5"
              on:input={() => updateError("estado")}
              on:change={() => (formData.ciudad = null)}
              bind:value={formData.estado}
            >
              <svelte:fragment slot="input-hidden" let:value
                ><input type="text" class="hidden" />
                <div
                  slot="chevron-icon"
                  class="flex self-center pr-4 pl-2 mb-1"
                >
                  <i class="fa-solid fa-caret-down text-[#78848f]"></i>
                </div>
              </svelte:fragment></Select
            >
          </div>

          <div class="mb-2">
            <Select
              --height="51px"
              --border-radius="0.5rem"
              --border={$errorMessages.ciudad ? "1px solid rgb(239 68 68)" : ""}
              --border-hover={$errorMessages.ciudad
                ? "1px solid rgb(153 27 27)"
                : ""}
              inputAttributes={{ autocomplete: "off" }}
              items={municipios}
              placeholder="Municipio"
              class="p-5"
              on:input={() => updateError("ciudad")}
              bind:value={formData.ciudad}
            >
              <div slot="empty" class="p-5 flex justify-center text-gray-400">
                Elige un estado
              </div>
              <svelte:fragment slot="input-hidden" let:value
                ><input type="text" class="hidden" />
                <div
                  slot="chevron-icon"
                  class="flex self-center pr-4 pl-2 mb-1"
                >
                  <i class="fa-solid fa-caret-down text-[#78848f]"></i>
                </div>
              </svelte:fragment></Select
            >
          </div>

          <button
            type="button"
            on:click={handleUpdate}
            class="w-full mt-6 bg-st-blue rounded p-4 text-white hover:bg-st-blue-light hover:text-st-blue duration-100"
          >
            Actualizar Informacion
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
