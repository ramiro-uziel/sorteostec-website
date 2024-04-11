<script>
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import Autoplay from "embla-carousel-autoplay";

  let emblaApi;
  let options = { loop: true };
  let plugins = [Autoplay()];

  function onInit(event) {
    emblaApi = event.detail;
  }

  function prev() {
    emblaApi && emblaApi.scrollPrev();
  }

  function next() {
    emblaApi && emblaApi.scrollNext();
  }

  let slides = [
    {
      img: "/images/slider-aventurat.webp",
      logo: "/images/logo-aventurat.png",
      title: "Slide Title 1",
      description: "This is a description for slide 1.",
    },
    {
      img: "/images/slider-dinerodeporvida.webp",
      logo: "/images/logo-dinerodeporvida.png",
      title: "Slide Title 2",
      description: "This is a description for slide 2.",
    },
    {
      img: "/images/slider-educativo.webp",
      logo: "/images/logo-educativo.png",
      title: "Slide Title 3",
      description: "This is a description for slide 3.",
    },
  ];
</script>

<div class="embla relative">
  <div
    use:emblaCarouselSvelte={{ options, plugins }}
    on:emblaInit={onInit}
    class="embla__viewport"
  >
    <div class="embla__container">
      {#each slides as { img, logo, title, description }, index}
        <div class="embla__slide relative">
          <div
            class="embla__slide__overlay absolute inset-0 bg-black bg-opacity-30 mb-4"
          ></div>
          <div
            class="embla__slide__content absolute flex-col w-full h-full flex justify-center items-center text-white"
          >
            <img class="mx-auto mb-4 w-40" src={logo} alt="Logo" />
            <h1 class="text-4xl font-extrabold">
              {title}
            </h1>
            <p class="text-2xl">
              {description}
            </p>
          </div>
          <img src={img} alt="Background" class="mx-auto mb-4" />
        </div>
      {/each}
    </div>
  </div>

  <div class="absolute inset-0 flex justify-between items-center px-5">
    <button
      class="embla__prev w-12 h-12 text-white bg-st-blue rounded-full flex justify-center items-center p-5 shadow-xl"
      on:click={prev}><i class="fa-solid fa-arrow-left"></i></button
    >
    <button
      class="embla__next w-12 h-12 text-white bg-st-blue rounded-full flex justify-center items-center p-5 shadow-xl"
      on:click={next}><i class="fa-solid fa-arrow-right"></i></button
    >
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
