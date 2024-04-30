<script>
  import { writable } from "svelte/store";
  import { isAdmin } from "$lib/stores";
  import { goto } from "$app/navigation";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let errorMessages = writable({});

  let loginFailed = false;
  let apiFailed = false;

  let email;
  let password;
  let passwordVisibility;

  function togglePasswordVisibility() {
    passwordVisibility.type =
      passwordVisibility.type === "password" ? "text" : "password";
  }

  function updateError(field) {
    errorMessages.update((currentErrors) => {
      delete currentErrors[field];
      return currentErrors;
    });
  }

  function disableLoginFailed() {
    loginFailed = false;
  }

  function disableApiFailed() {
    apiFailed = false;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    let errors = {};

    if (!email) errors.email = "El correo electrónico es obligatorio.";
    if (!password) {
      errors.password = "La contraseña es obligatoria.";
    }
    errorMessages.set(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      if (response.ok) {
        const isAdminResponse = await fetch("/api/is_admin");
        const isAdminText = await isAdminResponse.text();
        const isAdminData = isAdminText.toLowerCase() === "true";
        console.log("[ ! ] User admin status:", isAdminData);
        isAdmin.set(isAdminData);
        goto("/").then(() => {
          location.reload();
        });
      } else if (response.status === 401) {
        loginFailed = true;
        console.error("Login attempt failed due to invalid credentials.");
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
  <div class="p-5 md:p-0 w-[500px]">
    <div
      class="p-5 py-10 sm:p-10 mt-3 border border-zinc-300 bg-white shadow-xl rounded-lg"
    >
      <h1 class="p-3 text-3xl md:text-4xl font-semibold text-st-blue">
        Iniciar sesión
      </h1>
      <div class="p-3">
        <form on:submit|preventDefault={handleSubmit}>
          <div class="relative flex flex-row mb-2">
            <input
              name="email"
              type="email"
              class="p-3 px-4 w-full border placeholder:text-[#78848f] rounded-lg {$errorMessages.email
                ? 'border-red-500 hover:border-red-800'
                : 'border-[#d8dbdf] hover:border-[#b2b8bf]'} rounded-lg"
              placeholder="Correo electrónico"
              bind:value={email}
              on:input={() => updateError("email")}
              on:input={(loginFailed = false)}
            />
          </div>
          <div class="relative flex flex-row mb-2">
            <input
              name="password"
              type="password"
              class="p-3 px-4 w-full border placeholder:text-[#78848f] rounded-lg {$errorMessages.password
                ? 'border-red-500 hover:border-red-800'
                : 'border-[#d8dbdf] hover:border-[#b2b8bf]'} rounded-lg"
              placeholder="Contraseña"
              bind:value={password}
              bind:this={passwordVisibility}
              on:input={() => updateError("password")}
              on:input={(loginFailed = false)}
            />
          </div>
          <div class="relative flex flex-row py-2">
            <label class="text-sm pl-2 text-gray-400 cursor-pointer">
              Mostrar contraseña
              <input
                type="checkbox"
                class="ml-2 form-checkbox size-4 text-st-blue"
                on:change={togglePasswordVisibility}
              />
            </label>
          </div>

          {#if loginFailed}
            <div
              transition:fly={{
                duration: 100,
                easing: quintOut,
                y: -10,
              }}
              class="flex flex-row mt-2 justify-between gap-2 px-5 text-sm bg-red-600 p-2 rounded text-white items-center"
            >
              <div class="flex flex-row gap-2 items-center">
                <i class="fa-solid fa-exclamation-circle"></i>
                <p>El correo o la contraseña son invalidos</p>
              </div>

              <button
                type="button"
                on:click={disableLoginFailed}
                class="bg-white rounded-full w-5 h-5 flex justify-center items-center"
              >
                <i class="fa-solid fa-close text-red-600"></i>
              </button>
            </div>
          {/if}

          {#if apiFailed}
            <div
              transition:fly={{
                duration: 100,
                easing: quintOut,
                y: -10,
              }}
              class="flex flex-row mt-2 justify-between gap-2 px-5 text-sm bg-orange-600 p-2 rounded text-white items-center"
            >
              <div class="flex flex-row gap-2 items-center">
                <i class="fa-solid fa-warning"></i>
                <p>Hubo un error con la conexión al servidor</p>
              </div>

              <button
                type="button"
                on:click={disableApiFailed}
                class="bg-white rounded-full w-5 h-5 flex justify-center items-center"
              >
                <i class="fa-solid fa-close text-red-600"></i>
              </button>
            </div>
          {/if}

          <button
            type="submit"
            class="w-full mt-5 bg-st-blue rounded p-4 text-white hover:bg-st-blue-light hover:text-st-blue duration-100"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
