<script>
  import Boleto from "./Boleto.svelte";
  import Carousel from "./Carousel.svelte";

  let boletos = [
    {
      color: "#7c44b7",
      logo: "/images/logo-misueno.png",
      title: "¡Vive sin preocupaciones!",
      tagline: "Gana al mes, por 15 años:",
      prize: "188,888",
      cost: "700",
      link: "/",
    },
    {
      color: "#ef7f06",
      logo: "/images/logo-educativo.png",
      title: "¡Gana dos veces, gana al instante!",
      tagline: "Primer premio con valor total de:",
      prize: "15,000,000",
      cost: "350",
      link: "/",
    },
    {
      color: "#0097dd",
      logo: "/images/logo-tradicional.png",
      title: "¡La casa de tus sueños!",
      tagline: "Primer premio con valor total de:",
      prize: "71,900,000",
      cost: "1,250",
      link: "/",
    },
    {
      color: "#24113b",
      logo: "/images/logo-ganaya.png",
      title: "¡Un sorteo a otro nivel!",
      tagline: "Primer premio con valor total de:",
      prize: "230,000",
      cost: "100",
      link: "/",
    },
    {
      color: "#aa085b",
      logo: "/images/logo-aventurat.png",
      title: "¡Un boleto para conocer el mundo!",
      tagline: "Primer premio con valor total de: ",
      prize: "1,200,000",
      cost: "200",
      link: "/",
    },
    {
      color: "#04afa1",
      logo: "/images/logo-dinerodeporvida.png",
      title: "¡Gana toda la vida!",
      tagline: "Recibe todos los meses:",
      prize: "1,100 USD",
      cost: "470",
      link: "/",
    },
  ];
</script>

<body>
  <Carousel />
  <div class="flex flex-col justify-center items-center pt-10">
    <div class="max-w-[1250px]">
      <div class="pl-10 flex flex-col gap-2 text-st-blue">
        <p class="text-sm">PARTICIPA</p>
        <h1 class="text-4xl font-bold">¡Elige tu Sorteo Favorito!</h1>
        <div class="w-[70%]">
          <p class="text-xl">
            Participa en uno o más de nuestros Sorteos. Al hacerlo, transformas
            la vida de cientos de jóvenes ¡y puedes transformar la tuya!
          </p>
        </div>
      </div>
      <div class="flex justify-center p-10 w-full">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4 gap-7"
        >
          {#each boletos as { color, logo, title, tagline, prize, cost, link }}
            <Boleto bgColor={color}>
              <div slot="header">
                <img src={logo} alt="Logo" class="max-w-[140px] max-h-[27px]" />
              </div>
              <div slot="body">
                <h1 class="text-white text-2xl font-semibold">{title}</h1>
                <p class="text-white">{tagline}</p>
                <p class="text-white text-2xl font-extrabold pt-5">${prize}</p>
              </div>
              <div
                slot="footer"
                class="flex w-full justify-between items-center"
                style="color: {color}"
              >
                <div>
                  <p class=" text-sm">Costo:</p>
                  <p class=" font-bold">${cost}</p>
                </div>
                <div class="flex flex-row gap-2 text-xl">
                  <a
                    href={link}
                    class="text-base px-2 py-1 rounded-2xl border-2 border-transparent duration-200"
                    style="background-color: transparent; color: {color}; border-color: {color};"
                    onmouseover="this.style.backgroundColor=this.style.borderColor; this.style.color='white'"
                    onmouseout="this.style.backgroundColor='transparent'; this.style.color=this.style.borderColor"
                  >
                    Conoce más
                  </a>
                </div>
              </div>
            </Boleto>
          {/each}
        </div>
      </div>
    </div>
  </div>
</body>
