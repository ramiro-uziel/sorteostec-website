<script>
  import { goto } from "$app/navigation";
  import { estados, estados_municipios } from "$lib/estados";
  let nombre;
  let apellidoPaterno;
  let apellidoMaterno;
  let telefono;
  let estado = "Estado";
  let estadoAnswer;
  let ciudad;
  let ciudadAnswer;
  let email;
  let password;
  let passwordConfirm;

  let municipios;

  $: estado;

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);

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
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Nombre"
              bind:value={nombre}
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              name="apellidoPaterno"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Apellido Paterno"
              bind:value={apellidoPaterno}
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              name="apellidoMaterno"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Apellido Materno"
              bind:value={apellidoMaterno}
            />
          </div>
          <div class="mb-2">
            <input
              type="tel"
              name="telefono"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Teléfono"
              bind:value={telefono}
            />
          </div>
          <div class="mb-2">
            <select
              class="p-3 w-full border border-gainsboro rounded-lg"
              bind:value={estado}
              on:change={() => (estadoAnswer = "")}
            >
              {#each estados as estado}
                <option value={estado}>
                  {estado.nombre}
                </option>
              {/each}
            </select>
          </div>
          <div class="mb-2">
            <select
              class="p-3 w-full border border-gainsboro rounded-lg"
              bind:value={ciudad}
              on:change={() => (ciudadAnswer = "")}
            >
              {#each estados_municipios as municipios}
                <option value={municipios}>
                  {municipios}
                </option>
              {/each}
            </select>
          </div>
          <div class="mb-2">
            <input
              type="email"
              name="email"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Correo electrónico"
              bind:value={email}
            />
          </div>
          <div class="mb-2">
            <input
              type="password"
              name="password"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Contraseña"
              bind:value={password}
            />
          </div>
          <div class="mb-2">
            <input
              type="password"
              name="passwordConfirm"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Confirmar Contraseña"
              bind:value={passwordConfirm}
            />
          </div>
          <button
            type="submit"
            class="w-full bg-st-blue rounded p-4 text-white hover:bg-st-blue-light hover:text-st-blue duration-100"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
