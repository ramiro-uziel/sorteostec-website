<script>
  import { get } from "svelte/store";
  import { buildInfo } from "$lib/stores";

  let build;
  buildInfo.subscribe((data) => {
    build = data;
  });

  const tabs = [
    {
      href: "/",
      icon: "fa-brands fa-facebook",
    },
    {
      href: "/",
      icon: "fa-brands fa-instagram",
    },
    { href: "/", icon: "fa-brands fa-twitter" },
    {
      href: "/",
      icon: "fa-brands fa-youtube",
    },
  ];
</script>

<footer>
  <div
    class="w-full bottom-0 py-10 md:py-20 text-xs pointer-events-auto bg-st-blue text-white flex flex-col gap-4 md:gap-8 justify-center items-center"
  >
    <img
      src="/images/Principal-Blanco.png"
      alt="logotipo"
      class="w-[200px] pl-2"
    />
    <div class="flex flex-col gap-4 pl-0 items-center justify-center">
      <div class="flex flex-row gap-2 text-xl text-st-blue">
        {#each tabs as { href, icon }}
          <a
            {href}
            class="bg-st-blue-light border-2 border-transparent hover:bg-st-blue hover:text-st-blue-light hover:border-st-blue-light rounded-full duration-100"
          >
            <i class="{icon} p-2" />
          </a>
        {/each}
      </div>
      <div class="flex flex-row max-w-60 pt-5">
        <img src="/icons/18.svg" alt="boleto" class="w-[30px]" />
        <p class="text-center">
          Para participar en Sorteos Tec deberás ser <b class="pr-1"
            >mayor de 18 años</b
          >
        </p>
      </div>
      <div class="flex flex-col pt-5">
        <p class="text-center">2024</p>
        <p class="text-center">Version de desarrollo</p>
        <p class="text-center">{build.buildID}</p>
      </div>
    </div>
  </div>
</footer>
