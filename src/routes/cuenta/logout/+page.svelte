<script>
  import { get } from "svelte/store";
  import { userProfile } from "$lib/stores";
  import { goto } from "$app/navigation";

  let email;
  const user = get(userProfile);
  if (user) {
    email = user.email;
  }

  function handleLogout() {
    document.cookie.split(";").forEach((cookie) => {
      document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    goto("/").then(() => {
      location.reload();
    });
  }

  function handleCancel() {
    goto("/").then(() => {
      location.reload();
    });
  }
</script>

<div
  class="flex justify-center items-center"
  style="min-height: calc(90vh - var(--header-height));"
>
  <div class="p-10 w-[600px]">
    <div class="p-10 mt-3 border border-zinc-300 bg-white shadow-xl rounded-lg">
      <h1 class="p-3 text-3xl md:text-4xl font-semibold text-st-blue">
        Log out
      </h1>
      <p class="p-3">¿Deseas salir de la sesión?</p>
      <div class="px-3">
        <div class="relative flex flex-row mb-2">
          <div
            class="p-3 w-full border border-gray-400 rounded-lg border-dashed text-gray-500"
          >
            {email}
          </div>
        </div>
        <div class="relative flex flex-row gap-2 py-2 mb-5">
          <button
            type="button"
            on:click={handleLogout}
            class="w-full bg-st-blue rounded p-4 text-white hover:bg-st-blue-light hover:text-st-blue duration-100"
          >
            Si
          </button>
          <button
            type="button"
            on:click={handleCancel}
            class="w-full bg-st-blue rounded p-4 text-white hover:bg-st-blue-light hover:text-st-blue duration-100"
          >
            No
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
