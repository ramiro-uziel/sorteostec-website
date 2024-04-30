<script>
  import { adminInfo } from "$lib/stores";
  import { isAdmin } from "$lib/stores";
  import Select from "svelte-select";

  import Sidebar from "/src/components/Sidebar.svelte";

  let apiReportes;
  adminInfo.subscribe((data) => {
    apiReportes = data;
  });

  $: $isAdmin, getNotAdminUsers();

  let reportes = [
    { title: "Compras", description: "mes", value: apiReportes.ecompras },
    { title: "Usuarios", description: "totales", value: apiReportes.usuarios },
    { title: "Registros", description: "totales", value: apiReportes.ecompras },
  ];

  let adminsData = null;
  let selectedUser = null;

  async function getNotAdminUsers() {
    if ($isAdmin) {
      try {
        const response = await fetch("/api/no_admins");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        adminsData = await response.json();
        console.log(adminsData);
      } catch (e) {
        console.log(`API Error: ${e.message}`);
      }
    }
  }

  async function sendNotAdminEmail() {
    if (selectedUser) {
      try {
        const response = await fetch("/api/hacer_admin/" + selectedUser, {
          method: "POST",
        });

        if (response.ok) {
          goto("/").then(() => {
            location.reload();
          });
        } else {
          console.error("Failed to make user admin:", response.status);
        }
      } catch (error) {
        console.error("Error when trying to make user admin:", error);
      }
    }
  }

  async function testAdmin() {
    if (selectedUser) {
      console.log("/api/hacer_admin/" + selectedUser.value);
    }
  }
</script>

<div class="flex lg:flex-row max-w-7xl mx-auto">
  <div class="flex lg:flex-row items-start">
    <div class=" mt-10 w-[50px] xl:w-[192px]">
      <div class="fixed">
        <Sidebar />
      </div>
    </div>
    <div class="w-px bg-gray-300 h-full"></div>
  </div>
  <div class="w-full">
    <div class="w-full">
      <div class="p-6 mt-3">
        <h1 class="p-3 text-3xl md:text-4xl font-semibold text-st-blue">
          Admin
        </h1>
        <div class="flex flex-col">
          <div class="p-3 w-full md:w-80">
            <h2 class="text-xl md:text-2xl font-semibold text-st-blue">
              Reportes
            </h2>
          </div>
          <div class="flex flex-col md:flex-row gap-4 p-3">
            {#each reportes as { title, description, value }}
              <div
                class="bg-st-blue-light text-st-blue p-5 rounded-lg flex flex-col lg:flex-row justify-between gap-4"
              >
                <h2 class="text-xl font-semibold items-center gap-2">
                  {title}
                  <p class="text-sm">{description}</p>
                </h2>
                <h2 class="text-4xl font-semibold text-st-blue">{value}</h2>
              </div>
            {/each}
          </div>
        </div>
        <div class="p-6 w-full">
          <!-- Looker studio -->
          <h2 class="text-lg font-medium pb-5 text-st-blue">
            Dashboard de Looker Studio
          </h2>
          <iframe
            title="Looker Studio"
            src="https://lookerstudio.google.com/embed/reporting/c53d5250-b042-4ce2-a267-052b075010ac/page/HyeyD"
            class="w-full h-96 bg-st-blue-light rounded-xl"
            allowfullscreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          ></iframe>
        </div>
      </div>
      <div class="border-t-2 border-gray-300 w-full my-4"></div>
      <div class="p-6 mt-3 mb-52">
        <div class="flex flex-row justify-evenly">
          <div class="flex flex-col">
            <div class="p-3 w-full">
              <h2 class="text-xl md:text-2xl font-semibold text-st-blue">
                Asignar permisos de administrador
              </h2>
            </div>
            <div class="flex flex-col align-middle gap-4 p-3">
              <h2 class="text-lg font-medium text-st-blue">
                Usuarios no administradores:
              </h2>

              <div class="w-full h-full">
                <Select
                  --height="51px"
                  --border-radius="0.5rem"
                  inputAttributes={{ autocomplete: "off" }}
                  items={adminsData}
                  placeholder="Usuario"
                  class="p-5"
                  bind:value={selectedUser}
                >
                  <div
                    slot="empty"
                    class="p-5 flex justify-center text-gray-400"
                  >
                    No hay opciones
                  </div>

                  <svelte:fragment slot="input-hidden" let:value
                    ><input type="text" class="hidden" />
                    <div
                      slot="chevron-icon"
                      class="flex self-center pr-4 pl-2 mb-1"
                    >
                      <i class="fa-solid fa-caret-down text-[#78848f]"></i>
                    </div>
                  </svelte:fragment></Select
                >
              </div>
              <div class="flex flex-row gap-2">
                <button
                  type="submit"
                  on:click={testAdmin}
                  class="w-full bg-st-blue rounded p-4 text-white hover:bg-st-blue-light hover:text-st-blue duration-100"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
          <div
            class="bg-blue-950 w-96 rounded-lg p-10 text-white flex flex-col"
          >
            <div
              class="flex flex-row items-center border text-white p-2 rounded font-bold space-x-2 pl-3 mb-5"
            >
              <i class="fa-solid fa-warning"></i>
              <h1>Advertencia</h1>
            </div>
            <p class="pl-1 mb-5">
              Este proceso asigna a un usuario permisos de administrador.
            </p>
            <p class="pl-1">
              Verifica que el correo sea el apropiado ya que esto puede tener
              consecuencias de seguridad.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
