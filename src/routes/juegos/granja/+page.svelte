<script>
  function goFullscreen() {
    const elem = document.getElementById("embededGame");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  }
</script>

<main
  class="gameBackground flex justify-center items-center"
  style="min-height: calc(100vh - var(--header-height)); "
>
  <div
    class="w-full text-xs text-white flex flex-col gap-4 items-center py-5"
    style="max-width: 1200px; min-width: 450px; aspect-ratio: 16 / 9;"
  >
    <iframe
      title="Fields of Fortune"
      id="embededGame"
      src="/unity/index.html"
      class="w-full border-none"
      style="aspect-ratio: 16 / 9;"
    ></iframe>
    <div class="flex flex-row gap-5 pb-10">
      <a
        href="/juegos"
        class="mt-4 px-4 py-2 font-bold text-base bg-st-blue hover:bg-st-blue-light text-white hover:text-st-blue rounded duration-200"
      >
        <i class="fa-solid fa-arrow-left pr-2"></i>
        Ir a Juegos
      </a>
      <button
        on:click={goFullscreen}
        class="mt-4 px-4 py-2 font-bold text-base bg-st-blue hover:bg-st-blue-light text-white hover:text-st-blue rounded duration-200"
      >
        <i class="fa-solid fa-expand pr-2"></i>
        Maximizar
      </button>
    </div>
  </div>
</main>

<style>
  .gameBackground {
    background-image: linear-gradient(rgb(5, 41, 117), rgba(3, 2, 22, 0.692)),
      url("/images/fof-background-transparent.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
