<script>
  import Boleto from "./Boleto.svelte";
  import Carousel from "./Carousel.svelte";

  let boletos = [
    {
      color: "#7c44b7",
      logo: "/images/logo-misueno.png",
      title: "Aaaaaaaaaaa!",
      tagline: "This is the body text.",
      prize: "100,000",
      cost: "100",
    },
    {
      color: "#ef7f06",
      logo: "/images/logo-misueno.png",
    },
    {
      color: "#0097dd",
      logo: "/images/logo-misueno.png",
    },
    {
      color: "#24113b",
      logo: "/images/logo-misueno.png",
    },
    {
      color: "#aa085b",
      logo: "/images/logo-misueno.png",
    },
  ];
</script>

<body>
  <Carousel />
  <div class="flex justify-center p-10 w-full">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
      {#each boletos as { color, logo, title, tagline, prize, cost }}
        <Boleto bgColor={color}>
          <div slot="header">
            <img src={logo} alt="Logo" class="w-[140px]" />
          </div>
          <div slot="body">
            <h1 class="text-white text-2xl font-semibold">{title}</h1>
            <p class="text-white">{tagline}</p>
            <p class="text-white text-2xl font-extrabold pt-5">${prize}</p>
          </div>
          <div slot="footer">
            <p class="text-black font-semibold">${cost}</p>
          </div>
        </Boleto>
      {/each}
    </div>
  </div>
</body>
