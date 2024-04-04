<script>
  import { onMount } from "svelte";

  // form stuff
  let formData = {
    email: "",
    password: "",
  };
  let formErrors = {};
  let loading = false;

  // password stuff
  let passwordVisibility;
  function togglePasswordVisibility() {
    passwordVisibility.type =
      passwordVisibility.type === "password" ? "text" : "password";
  }
  onMount(() => {
    passwordVisibility.type = "password";
  });

  // form submition stuff
  async function handleSubmit() {
    formErrors = {};
    if (formData.email.trim() === "") {
      formErrors.email = "Correo electrónico es requerido";
    }
    if (formData.password.trim() === "") {
      formErrors.password = "Contraseña es requerida";
    }

    if (Object.keys(formErrors).length === 0) {
      try {
        loading = true;
        const response = await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Error submitting form data");
        }

        const data = await response.json();
        console.log("Form submitted successfully:", data);
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        loading = false;
      }
    }
  }
</script>

<div
  class="flex justify-center items-center"
  style="min-height: calc(90vh - var(--header-height)); "
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
              bind:value={formData.email}
              class="p-3 w-full border border-gainsboro rounded-lg {formErrors.email
                ? 'input-error'
                : ''}"
              placeholder="Correo electrónico"
              data-error={formErrors.email}
              id="email"
            />
          </div>

          <div class="relative flex flex-row mb-2">
            <input
              bind:value={formData.password}
              bind:this={passwordVisibility}
              class="p-3 w-full border border-gainsboro rounded-lg {formErrors.password
                ? 'input-error'
                : ''}"
              placeholder="Contraseña"
              data-error={formErrors.password}
            />
          </div>
          <div class="relative flex flex-row py-2 mb-5">
            <p class="text-sm pl-2 text-gray-400">Mostrar contraseña</p>
            <div class="px-2 inset-y-0 right-0 flex items-center pr-3">
              <input
                type="checkbox"
                on:change={togglePasswordVisibility}
                class="form-checkbox size-4 text-st-blue"
              />
            </div>
          </div>

          <button
            type="submit"
            class="w-full bg-st-blue rounded p-4 text-white hover:bg-st-blue-light hover:text-st-blue duration-100"
            >Confirmar</button
          >
        </form>
      </div>
    </div>
  </div>
</div>

<style>
  .input-error {
    border-color: red;
  }
</style>
