<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import BoletoHover from "../assets/icons/boleto-hover.svelte";

  let y;
  let innerHeight = 0;
  let innerWidth = 0;
</script>

<div
  class="relative flex flex-col mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <div
    class="lg:hidden flex fixed bottom-0 right-0 duration-200 p-6 py-10 z-[10] opacity-100 pointer-events-auto"
  >
    <a
      href="#"
      class="bg-st-blue-light ml-auto rounded-full aspect-squarerelative flex gap-2 border-4 border-st-blue overflow-hidden p-2.5 group text-st-blue hover:scale-[102%] hover:bg-st-blue hover:text-white cursor-pointer duration-200"
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
  <Header {y} />
  <slot />
  <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
