<script>
  import Boleto from "../assets/icons/boleto.svelte";
  import BoletoHover from "../assets/icons/boleto-hover.svelte";
</script>

<a
  href="#"
  class="relative hidden mdsm:flex gap-2 border-2 overflow-hidden px-5 py-1.5 group rounded-full bg-white text-st-blue hover:scale-[102%] hover:bg-transparent hover:border-white hover:text-white duration-100"
>
  <div class="relative w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]">
    <div class=" absolute w-full h-full icon-transition icon-effect">
      <Boleto />
    </div>
    <div
      class="text-white absolute w-full h-full icon-transition icon-effect-hover"
    >
      <BoletoHover />
    </div>
  </div>

  <h4 class="font-semibold relative z-9">Comprar boletos</h4>
</a>
