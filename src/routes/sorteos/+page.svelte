<script>
  let sorteos = [
    {
      name: "Gana Ya",
      color: "#24113b",
      logo: "/images/logo-ganaya.png",
      title: "¡Un sorteo a otro nivel!",
      tagline: "Primer premio con valor total de:",
      prize: "230,000",
      cost: "100",
      link: "/",
      premios: [
        {
          nombre: "Primer Premio",
          valor_descripcion: "Kit de productos Apple",
          valor: "230000",
          descripcion:
            "Gana un kit de productos Apple que incluye: Ipad Pro, Iphone 15 Pro, Apple Watch Series 9, Base de Carga Inalámbrica, Apple TV 4k Wi-Fi + Ethernet, AirPods MAX, MacBook Pro 16 pulgadas o valor total de $230,000 en cheque de caja bancario.",
        },
        {
          nombre: "Segundo Premio",
          valor_descripcion: "iPad Pro",
          valor: "30000",
          descripcion:
            "A elegir entre un Ipad Pro con pantalla de 11 pulgadas con Liquid Retina, almacenamiento de 256 GB, Wi-Fi + Celular, Apple Pencil segunda generación, o valor total de $30,000 en cheque de caja bancario.",
        },
        {
          nombre: "Premios 3º al 5º",
          valor_descripcion: "Apple Watch Series 9",
          valor: "20000",
          descripcion:
            "A elegir entre un Apple Watch Series 9, Caja de acero inoxidable, correa estilo milanés, tamaño 45mm, correa de 140 a 220 mm, GPS + Cellular c/u o valor total de $20,000 en cheque c/u.",
        },
      ],
    },
    {
      name: "AdventuraT",
      color: "#aa085b",
      logo: "/images/logo-aventurat.png",
      title: "¡Un boleto para conocer el mundo!",
      tagline: "Primer premio con valor total de: ",
      prize: "1,200,000",
      cost: "200",
      link: "/",

      premios: [
        {
          nombre: "Primer premio",
          valor_descripcion: "Viaje alrededor del mundo",
          valor: "1200000",
          descripcion:
            "Llévate el valor total del premio en un cheque de caja bancario por $1,200,000 pesos o vive la aventura de hacer un viaje por 14 ciudades del mundo para dos adultos 43 días y 41 noches, entre julio de 2024 y julio de 2025.",
        },
        {
          nombre: "Segundo premio",
          valor_descripcion: "Cheque de caja bancario",
          valor: "300000",
          descripcion:
            "Incluye cheque de caja bancario con valor neto de $279,000 más cheque por $21,000 para derechos, impuestos y gastos de entrega.",
        },
        {
          nombre: "Tercer premio",
          valor_descripcion: "Cheque de caja bancario",
          valor: "180000",
          descripcion:
            "Incluye cheque de caja bancario con valor neto de $167,400 más cheque por $12,600 para derechos, impuestos y gastos de entrega.",
        },
      ],
    },
    {
      name: "Educativo",
      color: "#ef7f06",
      logo: "/images/logo-educativo.png",
      title: "¡Gana dos veces, gana al instante!",
      tagline: "Primer premio con valor total de:",
      prize: "15,000,000",
      cost: "350",
      link: "/",
      premios: [
        {
          nombre: "",
          valor_descripcion: "",
          valor: "",
          descripcion: "",
        },
      ],
    },
  ];
</script>

<div class="w-full bg-st-blue flex justify-center">
  <div class="w-[70%]">
    {#each sorteos as sorteo}
      <div class="flex flex-row justify-between">
        <div class="flex justify-start">
          <img
            src={sorteo.logo}
            alt={"Sorteo" + sorteo.name}
            class="w-[200px] object-contain"
          />
        </div>
        <div class="flex flex-col p-5">
          <h1 class="text-white text-4xl font-semibold">{sorteo.title}</h1>
          <h2 class="text-white text-2xl font-base">{sorteo.tagline}</h2>
          <p class="text-white text-2xl font-base">${sorteo.prize}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
