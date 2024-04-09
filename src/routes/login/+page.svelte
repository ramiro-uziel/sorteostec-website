<script>
  import { writable } from "svelte/store";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  const API_URL = import.meta.env.VITE_API_URL;

  let email;
  let password;
  let passwordVisibility;

  const userProfile = writable(null);
  const userLogged = writable(false);

  async function handleLogin(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const loginResponse = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (loginResponse.ok) {
      const profileResponse = await fetch(`${API_URL}/perfil`, {
        credentials: "include", // To send cookies with the request
      });

      if (profileResponse.ok) {
        const profileData = await profileResponse.json();
        userProfile.set(profileData);
        userLogged.set(true);

        if (browser) {
          goto("/cuenta/perfil"); // Navigate to profile page
        }
      }
    }
  }

  function togglePasswordVisibility() {
    passwordVisibility.type =
      passwordVisibility.type === "password" ? "text" : "password";
  }
</script>

<div
  class="flex justify-center items-center"
  style="min-height: calc(90vh - var(--header-height));"
>
  <div class="p-10 w-[600px]">
    <div class="p-10 mt-3 border border-zinc-300 bg-white shadow-xl rounded-lg">
      <h1 class="p-3 text-3xl md:text-4xl font-semibold text-st-blue">
        Iniciar sesión
      </h1>
      <div class="p-3">
        <form on:submit={handleLogin}>
          <div class="relative flex flex-row mb-2">
            <input
              type="email"
              bind:value={email}
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Correo electrónico"
            />
          </div>
          <div class="relative flex flex-row mb-2">
            <input
              bind:this={passwordVisibility}
              type="password"
              bind:value={password}
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Contraseña"
            />
          </div>
          <div class="relative flex flex-row py-2 mb-5">
            <label class="text-sm pl-2 text-gray-400 cursor-pointer">
              Mostrar contraseña
              <input
                type="checkbox"
                class="ml-2 form-checkbox size-4 text-st-blue"
                on:change={togglePasswordVisibility}
              />
            </label>
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
