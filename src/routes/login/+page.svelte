<script>
  import { writable } from "svelte/store";
  import { isAdmin } from "$lib/stores";
  import { goto } from "$app/navigation";

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
              class="flex flex-row gap-2 text-sm bg-red-500 p-2 mt-2 rounded text-white items-center justify-center"
            >
              <i class="fa-solid fa-exclamation-circle"></i>
              El correo o la contraseña son invalidos.
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
            class="w-full mt-5 bg-st-blue rounded p-4 text-white hover:bg-st-blue-light hover:text-st-blue duration-100"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
