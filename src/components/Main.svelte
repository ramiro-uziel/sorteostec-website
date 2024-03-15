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

<main class="flex justify-center items-center" style="min-height: calc(100vh - var(--header-height)); ">
  <div class="w-full text-xs text-white flex flex-col gap-4 items-center" style="max-width: 1200px; min-width: 550px; aspect-ratio: 16 / 9;">
    <iframe
      title="Fields of Fortune"
      id="embededGame"
      src="/build/index.html"
      class="w-full border-none" style="aspect-ratio: 16 / 9;"
    ></iframe>
    <button
      on:click={goFullscreen}
      class="mt-4 px-4 py-2 font-bold bg-st-blue hover:bg-st-blue-light text-white hover:text-st-blue rounded duration-200"
    >
      Fullscreen
    </button>
  </div>
</main>
