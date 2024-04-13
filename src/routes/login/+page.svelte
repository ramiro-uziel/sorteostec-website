<script>
  import { isAdmin } from "$lib/stores";
  import { goto } from "$app/navigation";

  let email;
  let password;
  let passwordVisibility;

  function togglePasswordVisibility() {
    passwordVisibility.type =
      passwordVisibility.type === "password" ? "text" : "password";
  }

  async function handleSubmit(event) {
    event.preventDefault();

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
        goto("/cuenta/perfil").then(() => {
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
        Iniciar sesión
      </h1>
      <div class="p-3">
        <form on:submit|preventDefault={handleSubmit}>
          <div class="relative flex flex-row mb-2">
            <input
              name="email"
              type="email"
              bind:value={email}
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Correo electrónico"
            />
          </div>
          <div class="relative flex flex-row mb-2">
            <input
              name="password"
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
