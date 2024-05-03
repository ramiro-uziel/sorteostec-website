<script>
  import { userLogged } from "../../lib/stores";

  let juegos = [
    {
      image: "/images/fof-square.webp",
      title: "Fields of Fortune",
      link: "/juegos/granja",
    },
  ];
</script>

<body>
  <div
    class="gameBackground flex justify-center items-center"
    style="min-height: calc(100vh - var(--header-height));"
  >
    <div class="flex flex-col items-center w-full p-10">
      <!-- border backdrop-blur-xl rounded-3xl -->
      <div class="  py-10 px-20">
        <!--
          class="bg-white absolute w-full h-full rounded-3xl -translate-x-20 -translate-y-10 opacity-10"
        -->
        <div class="flex flex-col items-center text-white z-0">
          <div class="w-52 pb-5 relative">
            <img src="/images/fof-logo.png" alt="logo" class="absolute z-10" />
            <img
              src="/images/fof-logo.png"
              alt="logo"
              class="absolute translate-y-1 translate-x-0.5 scale-10 filter contrast-0 brightness-0"
            />
            <div class="h-28" />
          </div>

          <p
            class="text-lime-900 text-3xl font-bold drop-shadow-lg bg-[#b6e269] p-2 rounded-xl mb-3 lg:rounded-b-none lg:mb-0"
          >
            Cultiva Éxitos, Cosecha Recompensas.
          </p>
          <p
            class="text-lime-900 text-2xl font-semibold drop-shadow-lg bg-lime-200 p-2.5 rounded-xl"
          >
            ¡Descubre el boleto dorado y gana premios exclusivos!
          </p>
          {#if !$userLogged}
            <p
              class="text-st-blue text-2xl font-bold drop-shadow-lg bg-st-blue-light p-2 mt-3 rounded-xl"
            >
              Registrate o inicia sesión para jugar
            </p>
          {/if}
          <div class="w-full flex justify-center py-5">
            <div class="grid grid-cols-1 gap-7">
              {#each juegos as { image, title, link }}
                <div
                  class="flex flex-col rounded-xl border-white border-8 duration-200 max-w-[320px] bg-white overflow-hidden hover:scale-[101%] drop-shadow-2xl"
                >
                  {#if $userLogged}
                    <a
                      href={link}
                      class="bg-[#6ac536] hover:bg-[#b6eb8b] hover:text-lime-900 flex items-center justify-center mb-2 pt-3 pb-3 pl-5 pr-5 rounded-xl cursor-pointer text-white duration-200"
                    >
                      <i class="fa-solid fa-play text-xl px-1"></i>
                      <p class="text-xl font-bold px-1">{title}</p>
                    </a>
                  {:else}
                    <div class="flex flex-row gap-2">
                      <a
                        href="/registro"
                        class="bg-st-blue hover:bg-st-blue-light hover:text-st-blue flex items-center justify-center mb-2 pt-3 pb-3 w-full rounded-xl cursor-pointer text-white duration-200"
                      >
                        <p class="text-md font-bold px-1">Registro</p>
                      </a>
                      <a
                        href="/login"
                        class="bg-st-blue hover:bg-st-blue-light hover:text-st-blue flex items-center justify-center mb-2 pt-3 pb-3 w-full rounded-xl cursor-pointer text-white duration-200"
                      >
                        <p class="text-md font-bold px-1">Iniciar sesión</p>
                      </a>
                    </div>
                  {/if}

                  <div
                    class="rounded-xl border-white border-0 duration-200 bg-white overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={title}
                      class="duration-200 hover:scale-[105%]"
                    />
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

<style>
  .gameBackground {
    background-image: url("/images/fof-background.png");
    background-image: url("/images/fof-background-transparent.png"),
      linear-gradient(#5aaaff 30%, #ffffff 60%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
