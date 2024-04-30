<script>
  import { goto } from "$app/navigation";
  import { estados_municipios } from "$lib/estados";
  import Select from "svelte-select";

  let nombre;
  let apellidoPaterno;
  let apellidoMaterno;
  let telefono;
  let estado = null;
  let ciudad = null;
  let email;
  let password;
  let passwordConfirm;

  $: municipios = estado?.municipios || [];

  async function handleSubmit(event) {
    event.preventDefault();

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
    console.log("FormData is:");
    console.log(formData);

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
              class="p-3 w-full border placeholder:text-[#78848f] border-[#d8dbdf] hover:border-[#b2b8bf] rounded-lg"
              placeholder="Nombre"
              bind:value={nombre}
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              name="apellidoPaterno"
              class="p-3 w-full border placeholder:text-[#78848f] border-[#d8dbdf] hover:border-[#b2b8bf] rounded-lg"
              placeholder="Apellido Paterno"
              bind:value={apellidoPaterno}
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              name="apellidoMaterno"
              class="p-3 w-full border placeholder:text-[#78848f] border-[#d8dbdf] hover:border-[#b2b8bf] rounded-lg"
              placeholder="Apellido Materno"
              bind:value={apellidoMaterno}
            />
          </div>
          <div class="mb-2">
            <input
              type="tel"
              name="telefono"
              class="p-3 w-full border placeholder:text-[#78848f] border-[#d8dbdf] hover:border-[#b2b8bf] rounded-lg"
              placeholder="Teléfono"
              bind:value={telefono}
            />
          </div>
          <div class="mb-2">
            <Select
              --height="51px"
              --border-radius="0.5rem"
              inputAttributes={{ autocomplete: "off" }}
              items={estados_municipios}
              label="nombre"
              itemId="nombre"
              placeholder="Estado"
              class="p-5"
              bind:value={estado}
              on:change={() => (ciudad = null)}
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
              inputAttributes={{ autocomplete: "off" }}
              items={municipios}
              placeholder="Municipio"
              class="p-5"
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
              class="p-3 w-full border placeholder:text-[#78848f] border-[#d8dbdf] hover:border-[#b2b8bf] rounded-lg"
              placeholder="Correo"
              bind:value={email}
            />
          </div>

          <div class="mb-2">
            <input
              type="password"
              name="password"
              class="p-3 w-full border placeholder:text-[#78848f] border-[#d8dbdf] hover:border-[#b2b8bf] rounded-lg"
              placeholder="Contraseña"
              bind:value={password}
            />
          </div>
          <div class="mb-2">
            <input
              type="password"
              name="passwordConfirm"
              class="p-3 w-full border placeholder:text-[#78848f] border-[#d8dbdf] hover:border-[#b2b8bf] rounded-lg"
              placeholder="Confirmar Contraseña"
              bind:value={passwordConfirm}
            />
          </div>
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
