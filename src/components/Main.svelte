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

<main>
  <div
    class="w-full text-xs p-10 pointer-events-auto bg-blue-950 text-white flex flex-col gap-4 justify-center items-center"
  >
    <iframe
      title="Fields of Fortune"
      id="embededGame"
      src="/build/index.html"
      class="w-full max-w-4xl h-auto border-none"
      style="aspect-ratio: 16 / 9;"
    ></iframe>
    <button
      on:click={goFullscreen}
      class="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
    >
      Fullscreen
    </button>
  </div>
</main>
