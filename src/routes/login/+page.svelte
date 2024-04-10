<script>
  let email;
  let password;
  let passwordVisibility;

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
        <form name="registro" action="/api/login" method="POST">
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
