<script>
  import { writable } from "svelte/store";
  import { goto } from "$app/navigation";
  import { estados_municipios } from "$lib/estados";
  import Select from "svelte-select";

  let errorMessages = writable({});

  let passwordFailed = false;
  let apiFailed = false;

  let nombre;
  let apellidoPaterno;
  let apellidoMaterno;
  let telefono;
  let estado;
  let ciudad;
  let email;
  let password;
  let passwordConfirm;

  $: municipios = estado?.municipios || [];

  function handleError() {
    console.log("Placeholder");
  }

  function updateError(field) {
    errorMessages.update((currentErrors) => {
      delete currentErrors[field];
      return currentErrors;
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    let errors = {};

    if (!nombre) errors.nombre = "El nombre es obligatorio.";
    if (!apellidoPaterno)
      errors.apellidoPaterno = "El apellido paterno es obligatorio.";
    if (!apellidoMaterno)
      errors.apellidoMaterno = "El apellido materno es obligatorio.";
    if (!telefono) errors.telefono = "El teléfono es obligatorio.";
    if (!estado || !estado.nombre) errors.estado = "El estado es obligatorio.";
    if (!ciudad || !ciudad.value) errors.ciudad = "La ciudad es obligatoria.";
    if (!email) errors.email = "El correo electrónico es obligatorio.";
    if (!password) errors.password = "La contraseña es obligatoria.";
    if (password !== passwordConfirm) {
      errors.passwordConfirm = "Las contraseñas no coinciden.";
      passwordFailed = true;
    }

    errorMessages.set(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    // Prepare form data for submission
    const formData = new URLSearchParams();
    formData.append("nombre", nombre);
    formData.append("apellidoPaterno", apellidoPaterno);
    formData.append("apellidoMaterno", apellidoMaterno);
    formData.append("telefono", telefono);
    formData.append("estado", estado.nombre);
    formData.append("ciudad", ciudad.value);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("passwordConfirm", passwordConfirm);

    try {
      const response = await fetch("/api/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      if (response.ok) {
        goto("/").then(() => {
          location.reload();
        });
      } else {
        apiFailed = true;
        console.error("Failed to submit the form:", response.status);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
</script>

<div
  class="flex justify-center items-center"
  style="min-height: calc(90vh - var(--header-height));"
>
  <div class="p-10 w-[600px]">
    <div class="p-10 mt-3 border border-zinc-300 bg-white shadow-xl rounded-lg">
      <h1 class="p-3 text-3xl md:text-4xl font-semibold text-st-blue">
        Registrate
      </h1>
      <div class="p-3">
        <form name="registro" on:submit|preventDefault={handleSubmit}>
          <div class="mb-2">
            <input
              type="text"
              name="nombre"
              class="p-3 px-4 w-full border placeholder:text-[#78848f] rounded-lg {$errorMessages.nombre
                ? 'border-red-500 hover:border-red-800'
                : 'border-[#d8dbdf] hover:border-[#b2b8bf]'} rounded-lg"
              placeholder="Nombre"
              bind:value={nombre}
              on:input={() => updateError("nombre")}
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              name="apellidoPaterno"
              class="p-3 px-4 w-full border placeholder:text-[#78848f] rounded-lg {$errorMessages.apellidoPaterno
                ? 'border-red-500 hover:border-red-800'
                : 'border-[#d8dbdf] hover:border-[#b2b8bf]'} rounded-lg"
              placeholder="Apellido Paterno"
              bind:value={apellidoPaterno}
              on:input={() => updateError("apellidoPaterno")}
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              name="apellidoMaterno"
              class="p-3 px-4 w-full border placeholder:text-[#78848f] rounded-lg {$errorMessages.apellidoMaterno
                ? 'border-red-500 hover:border-red-800'
                : 'border-[#d8dbdf] hover:border-[#b2b8bf]'} rounded-lg"
              placeholder="Apellido Materno"
              bind:value={apellidoMaterno}
              on:input={() => updateError("apellidoMaterno")}
            />
          </div>
          <div class="mb-2">
            <input
              type="tel"
              name="telefono"
              class="p-3 px-4 w-full border placeholder:text-[#78848f] rounded-lg {$errorMessages.telefono
                ? 'border-red-500 hover:border-red-800'
                : 'border-[#d8dbdf] hover:border-[#b2b8bf]'} rounded-lg"
              placeholder="Teléfono"
              bind:value={telefono}
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
              on:error={handleError}
              on:input={() => updateError("estado")}
              on:change={() => (ciudad = null)}
              bind:value={estado}
            >
              <svelte:fragment slot="input-hidden" let:value
                ><input type="text" class="hidden" />
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
              on:error={handleError}
              on:input={() => updateError("ciudad")}
              bind:value={ciudad}
            >
              <div slot="empty" class="p-5 flex justify-center text-gray-400">
                Elige un estado
              </div>
              <svelte:fragment slot="input-hidden" let:value
                ><input type="text" class="hidden" />
              </svelte:fragment></Select
            >
          </div>
          <div class="mb-2">
            <input
              type="text"
              name="email"
              class="p-3 px-4 w-full border placeholder:text-[#78848f] rounded-lg {$errorMessages.email
                ? 'border-red-500 hover:border-red-800'
                : 'border-[#d8dbdf] hover:border-[#b2b8bf]'} rounded-lg"
              placeholder="Correo"
              on:input={() => updateError("email")}
              bind:value={email}
            />
          </div>

          <div class="mb-2">
            <input
              type="password"
              name="password"
              class="p-3 px-4 w-full border placeholder:text-[#78848f] rounded-lg {$errorMessages.password
                ? 'border-red-500 hover:border-red-800'
                : 'border-[#d8dbdf] hover:border-[#b2b8bf]'} rounded-lg"
              placeholder="Contraseña"
              on:input={() => updateError("password")}
              on:input={(passwordFailed = false)}
              bind:value={password}
            />
          </div>
          <div class="mb-2">
            <input
              type="password"
              name="passwordConfirm"
              class="p-3 px-4 w-full border placeholder:text-[#78848f] rounded-lg {$errorMessages.password
                ? 'border-red-500 hover:border-red-800'
                : 'border-[#d8dbdf] hover:border-[#b2b8bf]'} rounded-lg"
              placeholder="Confirmar Contraseña"
              on:input={() => updateError("password")}
              on:input={(passwordFailed = false)}
              bind:value={passwordConfirm}
            />
          </div>

          {#if passwordFailed}
            <div
              class="flex flex-row gap-2 text-sm bg-red-200 p-2 mt-2 rounded text-gray-600 items-center justify-center"
            >
              <i class="fa-solid fa-exclamation-circle"></i>
              Las contraseñas no coinciden
            </div>
          {/if}

          {#if apiFailed}
            <div
              class="flex flex-row gap-2 text-sm bg-orange-600 p-2 mt-2 rounded text-white items-center justify-center"
            >
              <i class="fa-solid fa-warning"></i>
              Hubo un error con la conexión al servidor.
            </div>
          {/if}

          <button
            type="submit"
            class="w-full mt-6 bg-st-blue rounded p-4 text-white hover:bg-st-blue-light hover:text-st-blue duration-100"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
