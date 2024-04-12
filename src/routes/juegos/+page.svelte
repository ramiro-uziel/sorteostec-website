<script>
  import GameCard from "/src/components/GameCard.svelte";

  let juegos = [
    {
      color: "#7c44b7",
      image: "/images/fof-granja.png",
      title: "Granja",
      link: "#",
    },
    {
      color: "#7c44b7",
      image: "/images/fof-granja.png",
      title: "Granja",
      link: "#",
    },
    {
      color: "#7c44b7",
      image: "/images/fof-granja.png",
      title: "Granja",
      link: "#",
    },
  ];
</script>

<body>
  <div class="flex justify-center items-center h-screen">
    <div class="gameBackground flex flex-col items-center w-full h-full">
      <div class="max-w-[1250px]">
        <div class="flex flex-col items-center text-white">
          <h1 class="text-4xl font-bold">Juegos</h1>
          <div class="w-full flex justify-center p-10">
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full"
            >
              {#each juegos as { color, image, title, link }}
                <div
                  class="flex flex-col bg-white rounded-2xl p-5 hover:scale-[105%] duration-200 max-w-96"
                >
                  <img
                    src={image}
                    alt={title}
                    class="rounded-2xl duration-200"
                  />
                  <a
                    href={link}
                    class="bg-green-600 flex items-center justify-center mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg cursor-pointer text-white"
                    style="height: 100%;"
                  >
                    <i class="fa-solid fa-play text-xl px-1"></i>
                    <p class="text-xl font-bold px-1">{title}</p>
                  </a>
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
