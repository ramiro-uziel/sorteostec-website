<script>
  import Sidebar from "/src/components/Sidebar.svelte";
  import { abonarSaldoBoxVisible, cardList } from "$lib/stores";
  import { userWallet } from "$lib/stores";
  import { formatDate, toTitleCase, formatCurrency } from "$lib/helpers";
  let viewFormTarjeta = false;
  let disableAbonar = true;
  let tipoTarjeta = [{ tipo: "Débito" }, { tipo: "Crédito" }];
  let formData = {
    monto: "",
    metodo: "",
    numero: "",
    tipo: "",
    cvv: "",
    fechaVencimiento: "",
  };

  function showFormTarjeta() {
    disableAbonar = true;
    viewFormTarjeta = !viewFormTarjeta;
    formData.numero = "";
  }

  function formatCreditCardNumber(value) {
    if (value != "" && !viewFormTarjeta) {
      disableAbonar = false;
    }
    value = value.replace(/\D/g, "");
    return value.replace(/(.{4})/g, "$1 ").trim();
  }

  function formatFechaVencimiento(value) {
    if (value != "" && !viewFormTarjeta) {
      disableAbonar = false;
    }
    value = value.replace(/\D/g, ""); // Eliminar todos los caracteres que no sean dígitos
    return value.replace(/(.{2})/, "$1/"); // Añadir un espacio después de los primeros 3 dígitos
  }

  function formatCVV(value) {
    if (value != "" && !viewFormTarjeta) {
      disableAbonar = false;
    }
    value = value.replace(/\D/g, ""); // Eliminar todos los caracteres que no sean dígitos
    return value; // Añadir un espacio después de los primeros 3 dígitos
  }

  function validateInput(event) {
    const value = event.target.value;
    const regex = /^\d*\.?\d{0,2}$/;
    if (!regex.test(value)) {
      event.preventDefault();
      formData.monto = formData.monto;
    }
  }

  async function handleTarjeta() {
    const datos = {
      numero: formData.numero.replace(/\s/g, ""),
      tipo: formData.tipo,
    };
    const opciones = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    };

    try {
      await fetch("/api/tarjeta", opciones);
      getTarjetas();
      showFormTarjeta(false);
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  }
  async function getTarjetas() {
    const cardsResponse = await fetch("/api/tarjetas");
    const cardsData = await cardsResponse.json();
    cardList.set(cardsData);
  }
  async function handleRecarga() {
    const datos = {
      numero: formData.numero.replace(/\s/g, ""),
      monto: formData.monto,
    };
    const opciones = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    };

    try {
      await fetch("/api/recarga", opciones);
      getRecargas();
      toggleSaldoBox();
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  }

  async function getRecargas() {
    const walletResponse = await fetch("/api/ewallet");
    const walletData = await walletResponse.json();
    userWallet.set(walletData);
  }

  function toggleSaldoBox() {
    abonarSaldoBoxVisible.update((value) => !value);
    viewFormTarjeta = false;
  }

  let sortedRecargas = [];

  $: {
    sortedRecargas =
      $userWallet && Array.isArray($userWallet.estado_de_cuenta)
        ? [...$userWallet.estado_de_cuenta].sort(
            (a, b) => new Date(b.fecha) - new Date(a.fecha)
          )
        : [];
  }
</script>

<div class="flex lg:flex-row max-w-7xl mx-auto">
  <div class="flex lg:flex-row items-start">
    <div class=" mt-10 w-[50px] xl:w-[192px]">
      <div class="fixed">
        <Sidebar />
      </div>
    </div>
    <div class="w-px bg-gray-300 h-screen"></div>
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
            class="bg-st-blue-light text-st-blue px-5 py-2 rounded-lg flex flex-col justify-center h-full"
          >
            <p class="font-semibold text-st-blue">Mi saldo actual</p>
            <p class="text-2xl font-normal">${$userWallet.saldo / 100}</p>
          </div>
        </div>
        <div
          class="p-3 flex-col border-t border-gainsboro md:border-none w-full"
        >
          <p class="text-sm mb-3 flex flex-col">
            <i class="font-normal not-italic">Agiliza tus compras abonando</i><i
              class="font-normal not-italic"
              >anticipadamente saldo a tu e-wallet</i
            >
          </p>
          <p class="text-sm font-normal mb-3"></p>

          <div class="flex flex-row gap-3">
            <button
              on:click={toggleSaldoBox}
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
          <div
            class="grid grid-cols-3 p-2 justify-between px-5 bg-gray-200 rounded-t"
          >
            <p class="text-sm font-normal">Fecha</p>
            <p class="text-sm font-normal">Monto</p>
            <p class="text-sm font-normal">Tipo</p>
          </div>
          {#if $userWallet.estado_de_cuenta.length < 1}
            <div
              class="flex flex-row border-t border-gainsboro p-2 justify-center"
            >
              <p class="text-sm font-normal">No se encontraron registros</p>
            </div>
          {:else}
            {#each sortedRecargas as recarga}
              <div
                class="grid grid-cols-3 border-t border-gainsboro p-2 justify-between px-5"
              >
                <p class="text-sm font-normal">{formatDate(recarga.fecha)}</p>
                <p class="text-sm font-normal">
                  {formatCurrency(recarga.monto)}
                </p>
                <p class="text-sm font-normal">
                  {toTitleCase(recarga.movimiento)}
                </p>
              </div>
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </div>
  <div
    class={`fixed inset-0 flex items-center justify-center z-50 ${!$abonarSaldoBoxVisible ? "hidden" : ""}`}
  >
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <div class="relative bg-white rounded-lg p-8 sm:w-[500px] xs:w-[250px]">
      <div class="flex flex-row gap-4 p-1 pt-3 pb-3 text-st-blue">
        <button on:click={toggleSaldoBox}>
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </button>
      </div>

      <div class="flex flex-col justify-between h-full">
        <div>
          <h2 class="text-xl md:text-2xl font-semibold text-st-blue mb-2 pt-2">
            Abonar a E-wallet
          </h2>

          <div
            class="flex flex-row justify-between text-st-blue p-1 border-b border-st-blue"
          >
            <div class="flex">
              <i class="fa fa-wallet pt-1 mr-2" aria-hidden="true"></i>
              <p>Mi saldo actual</p>
            </div>
            <p>${$userWallet.saldo / 100}</p>
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
              <p>Método de Pago</p>
            </div>
            <button type="button" on:click={showFormTarjeta}
              >{viewFormTarjeta ? "< Volver" : "+ Nueva"}</button
            >
          </div>
          {#if viewFormTarjeta}
            <div>
              <p class="text-sm font-normal pb-1 pt-2">Tipo de Tarjeta</p>

              <select
                name="tipo"
                bind:value={formData.tipo}
                class="p-2 w-full border border-gainsboro rounded-lg"
              >
                <option value="">Selecciona un tipo</option>
                {#each tipoTarjeta as tipo}
                  <option value={tipo.tipo}>{tipo.tipo}</option>
                {/each}
              </select>
              <p class="text-sm font-normal pb-1 pt-2">Numero de Tarjeta</p>

              <input
                type="text"
                name="numero"
                bind:value={formData.numero}
                on:input={(event) =>
                  (formData.numero = formatCreditCardNumber(
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
                    placeholder="MM/YY"
                    name="fechaVencimiento"
                    bind:value={formData.fechaVencimiento}
                    on:input={(event) =>
                      (formData.fechaVencimiento = formatFechaVencimiento(
                        event.target.value
                      ))}
                    class="p-2 w-full border border-gainsboro rounded-lg"
                    maxlength="5"
                  />
                </div>

                <div class="w-full">
                  <p class="text-sm font-normal pb-1 pt-2">CVV</p>
                  <input
                    name="cvv"
                    on:input={(event) =>
                      (formData.cvv = formatCVV(event.target.value))}
                    bind:value={formData.cvv}
                    class="p-2 w-full border border-gainsboro rounded-lg"
                    maxlength="3"
                  />
                </div>
              </div>
              <div class="flex flex-row justify-end mt-1 w-full">
                <button
                  type="button"
                  on:click={handleTarjeta}
                  class="border border-st-blue rounded p-1 text-st-blue hover:bg-st-blue-light hover:text-st-blue duration-100"
                >
                  Guardar Tarjeta
                </button>
              </div>
            </div>
          {:else}
            <p class="text-sm font-normal pb-1 pt-2">Numero de Tarjeta</p>
            <select
              name="numero"
              bind:value={formData.numero}
              class="p-2 w-full border border-gainsboro rounded-lg"
            >
              <option value="">Selecciona un número de tarjeta</option>
              {#each $cardList.tarjetas as tarjeta}
                <option value={tarjeta.numero}
                  >{formatCreditCardNumber(tarjeta.numero)}</option
                >
              {/each}
            </select>
          {/if}
        </div>
        <div class="py-4 text-sm flex flex-col gap-2">
          <button
            on:click={handleRecarga}
            disabled={disableAbonar}
            class="w-full {!disableAbonar
              ? ' text-white bg-st-blue hover:bg-st-blue-light hover:text-st-blue '
              : ' text-gray-400 bg-gray-100 '}rounded p-4 duration-100"
          >
            Abonar
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
