<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import BoletoHover from "../assets/icons/boleto-hover.svelte";

  let headerHeight = 0;
  let y = 0;
  let headerElement;

  function updateHeaderHeight() {
    headerHeight = headerElement.clientHeight;
  }

  const test = async function () {
    try {
      const response = await fetch("/api/logged");
      const data = await response.text();
      console.log("[!] Layout onMount. User logged:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  onMount(() => {
    test();
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  });
</script>

<div class="relative flex flex-col mx-auto w-full text-sm sm:text-base">
  <div
    class="mdsm:hidden flex fixed bottom-0 right-0 duration-200 p-6 py-10 z-[10] opacity-100 pointer-events-auto"
  >
    <a
      href="#"
      class="bg-st-blue-light ml-auto rounded-full aspect-squarerelative flex gap-2 border-4 border-st-blue overflow-hidden p-2.5 group text-st-blue hover:scale-[102%] hover:bg-st-blue hover:text-white cursor-pointer duration-200 {$page
        .url.pathname === '/'
        ? ''
        : 'hidden'}"
    >
      <div class="relative w-[48px] h-[48px]">
        <div class=" absolute w-full h-full icon-transition icon-effect">
          <BoletoHover />
        </div>
        <div
          class="text-white absolute w-full h-full icon-transition icon-effect-hover"
        >
          <BoletoHover />
        </div>
      </div>
    </a>
  </div>
  <div bind:this={headerElement}>
    <Header {y} />
  </div>
  <div class="content" style="--headerHeight: {headerHeight}px;">
    <slot />
  </div>
  <Footer />
</div>

<svelte:window bind:scrollY={y} />

<style>
  .content {
    min-height: calc(100vh - var(--headerHeight));
  }
</style>
