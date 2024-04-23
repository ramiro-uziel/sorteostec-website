<script>
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import AutoScroll from "embla-carousel-auto-scroll";
  import Boleto from "../../components/Boleto.svelte";

  let boletos = [
    {
      color: "#7c44b7",
      number: "9",
      title: "Sorteos",
      description:
        "Sorteos con los que apoyamos la educación y en los que al dar, puedes ganar.",
    },
    {
      color: "#aa085b",
      number: "1.5",
      title: "Personas",
      description:
        "Millones de personas que compran o venden los boletos de nuestros sorteos cada año.",
    },
    {
      color: "#ef7f06",
      number: "1940",
      title: "Jóvenes",
      description:
        "Jóvenes del Programa Líderes del Mañana han sido beneficiados con una beca del 100%.",
    },
  ];

  let emblaApi;
  let options = { loop: true, axis: "y" };
  let options_2 = { loop: true };
  let plugins = [AutoScroll({ speed: 1, stopOnInteraction: false })];
  let plugins_2 = [AutoScroll({ speed: 1, stopOnInteraction: false })];

  function onInit(event) {
    emblaApi = event.detail;
  }

  let slides = [
    {
      img: "/images/Lideres-Manana-SorteosTec-1.webp",
    },
    {
      img: "/images/Lideres-Manana-SorteosTec-2.webp",
    },
    {
      img: "/images/Lideres-Manana-SorteosTec-3.webp",
    },
  ];
</script>

<div class="bg-st-blue text-white flex justify-center relative overflow-hidden">
  <img
    src="/icons/emblema-blanco-fade.svg"
    alt="logo"
    class="absolute top-0 left-0 w-2/6 translate-x-24 translate-y-12"
  />
  <div
    class="mdxl:max-w-[70%] max-w-[90%] flex md:flex-row flex-col md:gap-20 gap-5 items-center"
  >
    <div class="flex flex-col p-5">
      <h1 class="text-xl font-medium pb-2">Nuestra Causa</h1>
      <p class="lg:text-3xl text-xl font-semibold">
        Cuando participas con Sorteos Tec cientos de jóvenes tienen la
        oportunidad de transformar su vida, y tú, de cumplir tus sueños.
      </p>
    </div>
    <div class="embla relative min-w-[500px] md:block hidden">
      <div
        use:emblaCarouselSvelte={{ options, plugins }}
        on:emblaInit={onInit}
        class="embla__viewport"
      >
        <div class="embla__container flex flex-col max-h-[390px]">
          {#each slides as { img }}
            <div class="embla__slide p-5 flex align-middle justify-center">
              <div class="">
                <img
                  src={img}
                  alt="Background"
                  class="rounded-lg w-[2000px] max-h-[400px]"
                />
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
    <div class="embla relative md:hidden block pb-5">
      <div
        use:emblaCarouselSvelte={{ options_2, plugins }}
        on:emblaInit={onInit}
        class="embla__viewport"
      >
        <div class="embla__container flex flex-row min-w-[400px] h-[300px]">
          {#each slides as { img }}
            <div class="embla__slide flex align-middle justify-center">
              <div class="">
                <img
                  src={img}
                  alt="Background"
                  class="rounded-lg object-none"
                />
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
<div class=" flex justify-center items-center">
  <div class="mdxl:max-w-[70%] flex flex-col p-10 gap-10 mdxl:px-28">
    <div class="aspect-video rounded-lg overflow-hidden min-w-[200px]">
      <!-- Responsive iframe -->
      <iframe
        src="https://www.youtube.com/embed/witcJlGXqgs"
        title="¡Bienvenidos 10ª Generación de Líderes del Mañana!"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="w-full h-full"
      ></iframe>
    </div>
    <div class="flex justify-center items-center">
      <div class="xl:max-w-[80%] flex flex-col gap-5 text-st-blue">
        <h1 class="text-4xl font-bold">Líderes del Mañana</h1>
        <p class="text-xl">
          <i class="font-bold not-italic">Sorteos Tec</i> es el sorteo universitario
          del Tecnológico de Monterrey. Desde su nacimiento el 10 de mayo de 1947
          ha cumplido su Propósito de impulsar la transformación de México a través
          de la educación.
        </p>
        <p class="text-xl">
          Durante <i class="font-bold not-italic">siete décadas</i>, hemos
          contribuido al crecimiento, investigación y becas en el Tecnológico de
          Monterrey. En 2013, en el marco de su 70 Aniversario, se crea el
          Programa Líderes del Mañana, la iniciativa de movilidad social más
          importante del Tecnológico de Monterrey para apoyar a que jóvenes de
          excelencia académica y probado compromiso social, estudien una carrera
          profesional con una beca del
          <i class="font-bold not-italic">100% de colegiatura</i>.
        </p>
        <p class="text-xl">
          A partir de ese año, Sorteos Tec centró su propósito en convertirse en
          el principal financiador de este Programa a través de sus diferentes
          sorteos. Labor que ha cumplido año con año apoyando, a 10 años de su
          creación, a casi <i class="font-bold not-italic">2 mil jóvenes.</i>
        </p>
        <p class="text-xl">
          Esto ha sido posible con el apoyo de personas como tú que participan
          comprando o vendiendo boletos en todo el País, y que, al dar su tiempo
          y corazón, logran que, en cada sorteo, se cumplan pequeños y grandes
          sueños de miles de personas más con premios y recompensas.
        </p>
        <p class="font-bold text-xl">
          Por eso decimos que en Sorteos Tec: Ganas cuando recibes, ganas más
          cuando das.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="flex justify-center p-10 py-20 w-full bg-slate-100">
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-3 gap-7"
  >
    {#each boletos as { color, number, title, description }}
      <Boleto bgColor={color} footerBorderColor={color} footerColor={color}>
        <div slot="header" class="flex justify-center w-full">
          <h1 class="text-white text-2xl font-semibold">
            {title}
          </h1>
        </div>
        <div
          slot="body"
          class="flex flex-col justify-center items-center gap-5"
        >
          <h1 class="text-white text-7xl font-semibold">{number}</h1>
          <p class="text-white text-md w-[80%]">{description}</p>
        </div>
        <div
          slot="footer"
          class="flex w-full justify-between items-center"
          style="color: {color}"
        ></div>
      </Boleto>
    {/each}
  </div>
</div>

<style>
  .embla {
    overflow: hidden;
  }
  .embla__viewport {
    width: 100%;
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    position: relative;
    flex: 0 0 100%;
  }
  .embla__slide__content {
    text-align: center;
  }
</style>
