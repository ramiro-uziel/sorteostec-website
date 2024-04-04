<script>
  let formData = {
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    correoElectronico: "",
    telefonoMovil: "",
    pais: "",
    estado: "",
    contrasena: "",
    confirmarContrasena: "",
    aceptarTerminos: false,
  };

  let formErrors = {};
  let loading = false;

  async function handleSubmit() {
    formErrors = {};

    if (formData.nombre.trim() === "") {
      formErrors.nombre = "Nombre es requerido";
    }
    if (formData.apellidoPaterno.trim() === "") {
      formErrors.apellidoPaterno = "Apellido paterno es requerido";
    }
    if (formData.apellidoMaterno.trim() === "") {
      formErrors.apellidoMaterno = "Apellido materno es requerido";
    }
    if (formData.correoElectronico.trim() === "") {
      formErrors.correoElectronico = "Correo electrónico es requerido";
    }
    if (formData.telefonoMovil.trim() === "") {
      formErrors.telefonoMovil = "Teléfono móvil es requerido";
    }
    if (formData.pais.trim() === "") {
      formErrors.pais = "País es requerido";
    }
    if (formData.estado.trim() === "") {
      formErrors.estado = "Estado es requerido";
    }
    if (formData.contrasena.trim() === "") {
      formErrors.contrasena = "Contraseña es requerida";
    }
    if (formData.confirmarContrasena.trim() === "") {
      formErrors.confirmarContrasena = "Confirmar contraseña es requerida";
    }
    if (!formData.aceptarTerminos) {
      formErrors.aceptarTerminos = "Debes aceptar los términos y condiciones";
    }

    if (Object.keys(formErrors).length === 0) {
      const formSubmitData = { ...formData };
      delete formSubmitData.aceptarTerminos;

      try {
        loading = true;
        const response = await fetch("/registro", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formSubmitData),
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
  class="flex flex-row bg-white justify-center"
  style="min-height: calc(100vh - var(--header-height));"
>
  <div class="p-10">
    <div class="p-6 mt-3 border border-zinc-300 bg-white shadow-xl rounded-lg">
      <h1 class="p-3 text-3xl md:text-4xl font-semibold text-st-blue">
        Crear Cuenta
      </h1>
      <div class="p-3">
        <p class="text-sm font-normal">
          Para brindarte mayor seguridad durante tu compra, crea una cuenta
          llenando todos los datos requeridos.
        </p>
        <div class="flex flex-row mb-3 py-3">
          <i class="fa fa-check-circle mr-2 mt-0.5" aria-hidden="true"></i>
          <p class="text-sm font-normal">
            Confirmo que soy mayor de 18 años y que los datos ingresados son
            iguales a los de mi INE.
          </p>
        </div>
        <form on:submit|preventDefault={handleSubmit}>
          <div class="relative flex flex-row mb-2">
            <input
              bind:value={formData.nombre}
              class="p-3 w-full border border-gainsboro rounded-lg {formErrors.nombre
                ? 'input-error'
                : ''}"
              placeholder="Nombre"
              data-error={formErrors.nombre}
            />
          </div>
          <div class="flex flex-row gap-2 mb-2">
            <div class="relative flex flex-row w-full">
              <input
                bind:value={formData.apellidoPaterno}
                class="p-3 w-full border border-gainsboro rounded-lg {formErrors.apellidoPaterno
                  ? 'input-error'
                  : ''}"
                placeholder="Apellido paterno"
                data-error={formErrors.apellidoPaterno}
              />
            </div>
            <div class="relative flex flex-row w-full">
              <input
                bind:value={formData.apellidoMaterno}
                class="p-3 w-full border border-gainsboro rounded-lg {formErrors.apellidoMaterno
                  ? 'input-error'
                  : ''}"
                placeholder="Apellido materno"
                data-error={formErrors.apellidoMaterno}
              />
            </div>
          </div>
          <div class="relative flex flex-row mb-2">
            <input
              bind:value={formData.correoElectronico}
              class="p-3 w-full border border-gainsboro rounded-lg {formErrors.correoElectronico
                ? 'input-error'
                : ''}"
              placeholder="Correo electrónico"
              data-error={formErrors.correoElectronico}
            />
          </div>
          <div class="relative flex flex-row mb-2">
            <input
              bind:value={formData.telefonoMovil}
              class="p-3 w-full border border-gainsboro rounded-lg {formErrors.telefonoMovil
                ? 'input-error'
                : ''}"
              placeholder="Teléfono móvil"
              data-error={formErrors.telefonoMovil}
            />
          </div>
          <div class="relative flex flex-row mb-2">
            <input
              bind:value={formData.pais}
              class="p-3 w-full border border-gainsboro rounded-lg {formErrors.pais
                ? 'input-error'
                : ''}"
              placeholder="Selecciona un pais"
              data-error={formErrors.pais}
            />
          </div>
          <div class="relative flex flex-row mb-2">
            <input
              bind:value={formData.estado}
              class="p-3 w-full border border-gainsboro rounded-lg {formErrors.estado
                ? 'input-error'
                : ''}"
              placeholder="Selecciona un estado"
              data-error={formErrors.estado}
            />
          </div>
          <div class="relative flex flex-row mb-2">
            <input
              type="password"
              bind:value={formData.contrasena}
              class="p-3 w-full border border-gainsboro rounded-lg {formErrors.contrasena
                ? 'input-error'
                : ''}"
              placeholder="Contraseña"
              data-error={formErrors.contrasena}
            />
          </div>
          <div class="relative flex flex-row mb-2">
            <input
              type="password"
              bind:value={formData.confirmarContrasena}
              class="p-3 w-full border border-gainsboro rounded-lg {formErrors.confirmarContrasena
                ? 'input-error'
                : ''}"
              placeholder="Confirma tu contraseña"
              data-error={formErrors.confirmarContrasena}
            />
          </div>
          <div class="flex flex-row mb-3 py-3">
            <input
              type="checkbox"
              bind:checked={formData.aceptarTerminos}
              class="mr-2"
            />
            <p
              class="text-xs font-normal {formErrors.aceptarTerminos
                ? 'text-red-500'
                : ''}"
            >
              He leído y acepto los términos y condiciones y políticas de
              privacidad.
            </p>
          </div>
          <button
            type="submit"
            class="w-full bg-st-blue rounded p-4 text-white hover:bg-st-blue-light hover:text-st-blue duration-100"
            >Crear Cuenta</button
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
