<script>
  let juegos = [
    {
      color: "#7c44b7",
      image: "/images/fof-granja.webp",
      title: "Granja",
      link: "/juegos/granja",
    },
    {
      color: "#7c44b7",
      image: "/images/fof-gallinero.webp",
      title: "Gallinero",
      link: "/juegos/granja",
    },
    {
      color: "#7c44b7",
      image: "/images/fof-repartidor.webp",
      title: "Repartidor",
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
          <h1 class="text-4xl font-bold py-10">Juegos</h1>
          <p class="text-3xl font-bold">Cultiva Éxitos, Cosecha Recompensas.</p>
          <p class="text-2xl font-semibold">
            ¡Descubre el boleto dorado y gana premios exclusivos!
          </p>
          <div class="w-full flex justify-center p-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {#each juegos as { color, image, title, link }}
                <div
                  class="flex flex-col bg-white rounded-2xl p-5 hover:scale-[105%] duration-200 max-w-[320px]"
                >
                  <a
                    href={link}
                    class="bg-green-600 flex items-center justify-center mb-4 pt-3 pb-3 pl-5 pr-5 rounded-lg cursor-pointer text-white"
                    style="height: 100%;"
                  >
                    <i class="fa-solid fa-play text-xl px-1"></i>
                    <p class="text-xl font-bold px-1">{title}</p>
                  </a>
                  <img
                    src={image}
                    alt={title}
                    class="rounded-2xl duration-200"
                  />
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
    background-size: cover; /* Ensures the image covers the entire element */
    background-repeat: no-repeat; /* Prevents image from repeating */
    background-position: center; /* Centers the background image */
  }
</style>
