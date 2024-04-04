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
        <form name="registro" action="/api/registro" method="POST">
          <div class="mb-2">
            <input
              type="text"
              name="nombre"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Nombre"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              name="apellidoPaterno"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Apellido Paterno"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              name="apellidoMaterno"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Apellido Materno"
            />
          </div>
          <div class="mb-2">
            <input
              type="tel"
              name="telefono"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Teléfono"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              name="estado"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Estado"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              name="ciudad"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Ciudad"
            />
          </div>
          <div class="mb-2">
            <input
              type="email"
              name="email"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Correo electrónico"
            />
          </div>
          <div class="mb-2">
            <input
              type="password"
              name="password"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Contraseña"
            />
          </div>
          <div class="mb-2">
            <input
              type="password"
              name="passwordConfirm"
              class="p-3 w-full border border-gainsboro rounded-lg"
              placeholder="Confirmar Contraseña"
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
