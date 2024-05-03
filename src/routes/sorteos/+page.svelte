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
          follows_index: true,
          valor_descripcion: "Kit de productos Apple",
          valor: "230,000",
          descripcion:
            "Gana un kit de productos Apple que incluye: Ipad Pro, Iphone 15 Pro, Apple Watch Series 9, Base de Carga Inalámbrica, Apple TV 4k Wi-Fi + Ethernet, AirPods MAX, MacBook Pro 16 pulgadas o valor total de $230,000 en cheque de caja bancario.",
          imagen: "/images/premio_sorteo_gana_ya_1.webp",
        },
        {
          nombre: "Segundo Premio",
          follows_index: true,
          valor_descripcion: "iPad Pro",
          valor: "30,000",
          descripcion:
            "A elegir entre un Ipad Pro con pantalla de 11 pulgadas con Liquid Retina, almacenamiento de 256 GB, Wi-Fi + Celular, Apple Pencil segunda generación, o valor total de $30,000 en cheque de caja bancario.",
          imagen: "/images/premio_sorteo_gana_ya_2.webp",
        },
        {
          nombre: "Premios 3º al 5º",
          follows_index: false,
          valor_descripcion: "Apple Watch Series 9",
          valor: "20,000",
          descripcion:
            "A elegir entre un Apple Watch Series 9, Caja de acero inoxidable, correa estilo milanés, tamaño 45mm, correa de 140 a 220 mm, GPS + Cellular c/u o valor total de $20,000 en cheque c/u.",
          imagen: "/images/premio_sorteo_gana_ya_3.webp",
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
          follows_index: true,
          valor_descripcion: "Viaje alrededor del mundo",
          valor: "1,200,000",
          descripcion:
            "Llévate el valor total del premio en un cheque de caja bancario por $1,200,000 pesos o vive la aventura de hacer un viaje por 14 ciudades del mundo para dos adultos 43 días y 41 noches, entre julio de 2024 y julio de 2025.",
          imagen: "/images/premio_sorteo_aventurat_1.webp",
        },
        {
          nombre: "Segundo premio",
          follows_index: true,
          valor_descripcion: "Cheque de caja bancario",
          valor: "300,000",
          descripcion:
            "Incluye cheque de caja bancario con valor neto de $279,000 más cheque por $21,000 para derechos, impuestos y gastos de entrega.",
          imagen: "/images/premio_sorteo_aventurat_2.webp",
        },
        {
          nombre: "Tercer premio",
          follows_index: true,
          valor_descripcion: "Cheque de caja bancario",
          valor: "180,000",
          descripcion:
            "Incluye cheque de caja bancario con valor neto de $167,400 más cheque por $12,600 para derechos, impuestos y gastos de entrega.",
          imagen: "/images/premio_sorteo_aventurat_3.webp",
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
          nombre: "Primer premio",
          follows_index: true,
          valor_descripcion: "Cheque de caja bancario",
          valor: "15,000,000",
          descripcion: "Cheque con valor total de: $100,000 c/u",
          imagen: "/images/premio_sorteo_educativo_1.webp",
        },
        {
          nombre: "2° al 7º Premio",
          follows_index: false,
          valor_descripcion: "Cheque de caja bancario",
          valor: "1,000,000 c/u",
          descripcion:
            "Cheque de caja bancario con valor total de: $1,000,000 c/u.",
          imagen: "/images/premio_sorteo_educativo_2.webp",
        },
        {
          nombre: "8° al 17° Premio",
          follows_index: false,
          valor_descripcion: "Cheque de caja bancario",
          valor: "100,000 c/u",
          descripcion: "Cheque con valor total de: $100,000 c/u",
          imagen: "/images/premio_sorteo_educativo_3.webp",
        },
      ],
    },
  ];
</script>

<div class="w-full flex justify-center bg-white">
  <div class=" w-[90%] lg:max-w-[1000px]">
    <div class="p-5 mt-10">
      <h1 class="text-st-blue font-bold text-5xl pb-2">Sorteos</h1>
      <p class="text-slate-900 font-semibold text-2xl pb-2">
        ¡Juega <span class="text-lime-600 font-extrabold"
          >Fields of Fortune</span
        > y gana tu boleto al éxito!
      </p>
    </div>
    <div class="flex flex-col gap-5 justify-center mb-10">
      {#each sorteos as sorteo}
        <div
          class="rounded-xl drop-shadow-2xl"
          style="background-color: {sorteo.color}"
        >
          <div class="flex flex-col p-10 pb-2 text-white">
            <img
              src={sorteo.logo}
              alt={"Sorteo" + sorteo.name}
              class="w-[200px] h-[70px] object-contain"
            />
            <div class="flex flex-row justify-between">
              <div>
                <h1 class=" text-3xl font-semibold">{sorteo.title}</h1>
                <h2 class="text-white text-xl font-base">{sorteo.tagline}</h2>
                <p class="text-white text-2xl font-base">${sorteo.prize}</p>
              </div>
              <div class="pr-10">
                <h2 class="text-white text-2xl font-base">Precio</h2>
                <p class="text-white text-3xl font-semibold">${sorteo.cost}</p>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col m-5 p-5 bg-white rounded-xl justify-between"
          >
            {#each sorteo.premios as premio, index}
              <div class="flex flex-col items-start p-2 gap-5">
                <div class="flex flex-col p-2">
                  <div class="flex flex-row items-center pb-5 gap-2">
                    {#if premio.follows_index}
                      <span
                        class="rounded-full p-0.5 w-7 justify-center items-center flex text-white"
                        style="background-color: {sorteo.color}"
                        >{index + 1}°</span
                      >
                    {/if}
                    <h1 class="text-2xl font-semibold">
                      {premio.nombre}
                    </h1>
                  </div>
                  <h2 class="text-lg sm:text-xl font-base">
                    {premio.valor_descripcion}
                  </h2>
                  <p class=" text-2xl sm:text-4xl font-bold">
                    ${premio.valor}
                  </p>
                </div>
                <div class="flex flex-col md:flex-row gap-5">
                  <div class="p-2">
                    <img
                      class="rounded-xl aspect-auto max-w-72"
                      src={premio.imagen}
                      alt="Imagen del Premio"
                    />
                  </div>
                  <p class="p-2 text-justify text-md sm:text-xl">
                    {premio.descripcion}
                  </p>
                </div>
              </div>
              {#if index !== sorteo.premios.length - 1}
                <div class="border-t-2 border-gray-300 w-full my-4"></div>
              {/if}
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
