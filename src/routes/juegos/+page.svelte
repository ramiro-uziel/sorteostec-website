<script>
  let juegos = [
    {
      color: "#a4da51",
      image: "/images/fof-square.webp",
      title: "Fields of Fortune",
      link: "/juegos/granja",
    },
    {
      color: "#feb208",
      image: "/images/fof-gallinero.webp",
      title: "Gallinero",
      link: "/juegos/granja",
    },
  ];
</script>

<body>
  <div
    class="gameBackground flex justify-center items-center"
    style="min-height: calc(100vh - var(--header-height));"
  >
    <div class=" flex flex-col items-center w-full p-10">
      <div class="max-w-[1250px] pb-20">
        <div class="flex flex-col items-center text-white">
          <h1 class="text-4xl font-bold py-10 drop-shadow-lg">Juegos</h1>
          <p class="text-3xl font-bold drop-shadow-lg">
            Cultiva Éxitos, Cosecha Recompensas.
          </p>
          <p class="text-2xl font-semibold drop-shadow-lg">
            ¡Descubre el boleto dorado y gana premios exclusivos!
          </p>
          <div class="w-full flex justify-center p-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
              {#each juegos as { color, image, title, link }}
                <div
                  class="flex flex-col rounded-xl border-white border-8 duration-200 max-w-[320px] bg-white overflow-hidden hover:scale-[101%] drop-shadow-2xl"
                >
                  <a
                    href={link}
                    class="bg-[#6ac620] hover:bg-[#b6eb8b] hover:text-black flex items-center justify-center mb-2 pt-3 pb-3 pl-5 pr-5 rounded-xl cursor-pointer text-white duration-200"
                  >
                    <i class="fa-solid fa-play text-xl px-1"></i>
                    <p class="text-xl font-bold px-1">{title}</p>
                  </a>
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
