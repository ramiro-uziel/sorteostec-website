<script>
  import Sidebar from "/src/components/Sidebar.svelte";
  let sidebarVisible = false;
  let viewFormTarjeta = false;
  let listaTarjetas = [
    { tarjeta: "1234 5678 8765", cv: "123", fechaVencimiento: "01/02" },
    { tarjeta: "8765 4321 1234", cv: "123", fechaVencimiento: "01/02" },
  ];

  let formData = {
    monto: "",
    metodo: "",
    nroTarjeta: "",
    cvv: "",
    fechaVencimiento: "",
  };
  function showFormTarjeta() {
    viewFormTarjeta = !viewFormTarjeta;
  }
  function formatCreditCardNumber(value) {
    value = value.replace(/\s/g, "");
    return value.replace(/(.{4})/g, "$1 ").trim();
  }
  function validateInput(event) {
    const value = event.target.value;
    const regex = /^\d*\.?\d{0,2}$/;
    if (!regex.test(value)) {
      event.preventDefault();
      formData.monto = formData.monto;
    }
  }
  function handleSubmit(event) {
    formData.nroTarjeta = Number(formData.nroTarjeta.replace(/\s/g, ""));
    formData.cvv = Number(formData.cvv);
    formData.monto = Number(formData.monto);
    event.preventDefault();
    console.log(formData);
    toggleSidebar();
  }
  function toggleSidebar() {
    sidebarVisible = !sidebarVisible;
  }
</script>

<div class="flex lg:flex-row max-w-7xl mx-auto">
  <div class="flex lg:flex-row items-start">
    <div class="mt-10">
      <Sidebar />
    </div>
    <div class="w-px bg-gray-300 h-full"></div>
  </div>
  <div class="w-full">
    <div class="p-6 mt-3">
      <h1 class="p-3 text-3xl md:text-4xl font-semibold text-st-blue">
        E-wallet
      </h1>
      <div
        class="flex flex-col md:flex-row rounded-lg border border-gainsboro p-3 ml-3"
      >
        <div class="p-2 flex-col md:w-full">
          <div
            class="bg-st-blue-light text-st-blue p-2 rounded-lg flex flex-row justify-between md:gap-20"
          >
            <p class="font-semibold text-st-blue">Mi saldo actual</p>
            <p class="text-sm font-normal">$0.00</p>
          </div>
        </div>
        <div
          class="p-3 flex-col border-t border-gainsboro md:border-none w-full"
        >
          <p class="text-sm font-normal mb-3">
            Agiliza tus compras abonando anticipadamente saldo a tu e-wallet
          </p>
          <div class="flex flex-row gap-3">
            <a
              href="#"
              class="rounded-lg p-3 px-6 border text-sm text-white bg-st-blue font-normal border-zinc-800 hover:text-st-blue-light duration-100"
            >
              Mis premios
            </a>
            <button
              on:click={toggleSidebar}
              class="rounded-lg p-3 px-6 border text-sm text-zinc-800 font-normal border-zinc-800 hover:bg-zinc-800 hover:text-white duration-100"
            >
              Abonar saldo
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t-2 border-gray-300 w-full my-4"></div>
    <div class="p-6 ml-3">
      <div class="flex flex-col">
        <h2 class="text-xl md:text-2xl font-semibold text-st-blue mb-2">
          Estado de Cuenta
        </h2>
        <div class=" border border-gainsboro rounded-lg">
          <div class="flex flex-row p-2 justify-between px-5">
            <p class="text-sm font-normal">Movimiento</p>
            <p class="text-sm font-normal">Fecha</p>
            <p class="text-sm font-normal">Monto</p>
            <p class="text-sm font-normal">Metodo</p>
            <p class="text-sm font-normal">Factura</p>
          </div>
          <div
            class="flex flex-row border-t border-gainsboro p-2 justify-center"
          >
            <p class="text-sm font-normal">No se encontraron registros</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class={`fixed inset-0 flex items-center justify-center z-50 ${!sidebarVisible ? "hidden" : ""}`}
  >
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <div class="relative bg-white rounded-lg p-8 sm:w-[500px] xs:w-[250px]">
      <div class="flex flex-col justify-between h-full">
        <form
          name="registro"
          on:submit={handleSubmit}
          action="/api/compra"
          method="POST"
        >
          <div>
            <div class="flex flex-row gap-4 p-1 pt-3 pb-3 text-st-blue">
              <button on:click={toggleSidebar}>
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </button>
            </div>
            <h2
              class="text-xl md:text-2xl font-semibold text-st-blue mb-2 pt-2"
            >
              Abonar a E-wallet
            </h2>

            <div
              class="flex flex-row justify-between text-st-blue p-1 border-b border-st-blue"
            >
              <div class="flex">
                <i class="fa fa-wallet pt-1 mr-2" aria-hidden="true"></i>
                <p>Mi saldo actual</p>
              </div>
              <p>$0.00</p>
            </div>
            <p class="text-sm font-normal pb-1 pt-4">
              Ingresa el monto por abonar
            </p>
            <input
              type="text"
              name="monto"
              on:input={validateInput}
              bind:value={formData.monto}
              class="p-2 w-full border border-gainsboro rounded-lg"
              placeholder="0.00"
            />
            <div
              class="flex flex-row justify-between text-st-blue p-1 mt-2 mb-1 border-b border-st-blue"
            >
              <div class="flex">
                <i class="fa fa-credit-card pt-1 mr-2" aria-hidden="true"></i>
                <p>Tarjeta de débito</p>
              </div>
              <button type="button" on:click={showFormTarjeta}>+ Nueva</button>
            </div>
            {#if listaTarjetas.length < 1 || viewFormTarjeta}
              <div>
                <p class="text-sm font-normal pb-1 pt-2">Nro de Tarjeta</p>

                <input
                  type="text"
                  name="nroTarjeta"
                  bind:value={formData.nroTarjeta}
                  on:input={(event) =>
                    (formData.nroTarjeta = formatCreditCardNumber(
                      event.target.value
                    ))}
                  class="p-2 w-full border border-gainsboro rounded-lg"
                  maxlength="19"
                />
                <div class="flex gap-1">
                  <div class="w-full">
                    <p class="text-sm font-normal pb-1 pt-2">
                      Fecha de Vencimiento
                    </p>
                    <input
                      name="fechaVencimiento"
                      bind:value={formData.fechaVencimiento}
                      class="p-2 w-full border border-gainsboro rounded-lg"
                    />
                  </div>
                  <div class="w-full">
                    <p class="text-sm font-normal pb-1 pt-2">CVV</p>
                    <input
                      type="number"
                      name="cvv"
                      bind:value={formData.cvv}
                      class="p-2 w-full border border-gainsboro rounded-lg"
                      maxlength="3"
                    />
                  </div>
                </div>
              </div>
            {:else}
              <p class="text-sm font-normal pb-1 pt-2">Nro de Tarjeta</p>

              <select
                name="nroTarjeta"
                bind:value={formData.nroTarjeta}
                on:change={(event) => {
                  formatCreditCardNumber(event.target.value);
                }}
                class="p-2 w-full border border-gainsboro rounded-lg"
              >
                <option value="">Selecciona un número de tarjeta</option>
                {#each listaTarjetas as tarjeta}
                  <option value={tarjeta.tarjeta}>{tarjeta.tarjeta}</option>
                {/each}
              </select>
            {/if}
          </div>
          <div class="py-4 text-sm flex flex-col gap-2">
            <button
              type="submit"
              class="w-full bg-st-blue rounded p-4 text-white hover:bg-st-blue-light hover:text-st-blue duration-100"
            >
              Abonar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
