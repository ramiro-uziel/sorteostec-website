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
    class="w-full text-xs text-white flex flex-col gap-4 items-center"
    style="max-width: 1200px; min-width: 550px; aspect-ratio: 16 / 9;"
  >
    <iframe
      title="Fields of Fortune"
      id="embededGame"
      src="/unity/index.html"
      class="w-full border-none"
      style="aspect-ratio: 16 / 9;"
    ></iframe>
    <div class="flex flex-row gap-5">
      <a
        href="/juegos"
        class="mt-4 px-4 py-2 font-bold text-base bg-st-blue hover:bg-st-blue-light text-white hover:text-st-blue rounded duration-200"
      >
        Ir a Juegos
      </a>
      <button
        on:click={goFullscreen}
        class="mt-4 px-4 py-2 font-bold text-base bg-st-blue hover:bg-st-blue-light text-white hover:text-st-blue rounded duration-200"
      >
        Maximizar
      </button>
    </div>
  </div>
</main>

<style>
  .gameBackground {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/images/fof-background.png");
    background-size: cover; /* Ensures the image covers the entire element */
    background-repeat: no-repeat; /* Prevents image from repeating */
    background-position: center; /* Centers the background image */
  }
</style>
