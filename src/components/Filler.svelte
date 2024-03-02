<script>
  let benefits = [
    {
      name: "a self taught developer",
      description:
        "I mostly taught myself code through online resources and fell in love with problem solving and excersing my creativity to make awesome things. I started with languages such as Python, C++, and common web technologies (HTML, CSS, JavaScript). Now I am exploring JavaScript frameworks and libraries, backend programming and other stuff such as UI design and cloud integration.",
    },
    {
      name: "a product design & ux fanatic",
      description:
        "I really love making the UI experience for users the best it can be. I fell in love with UI design ever since I was 13 playing with my recently updated iPod Touch. Now I am studying technologies such as React Native and Swift.",
    },
    {
      name: "ok communicator 👍",
      description:
        "Communitation is key and it's a paramount value of mine. I believe in transparency and constructive communitation above all selse. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team.",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-violet-500 font-semibold">Uziek</span>
        Ramash
        <br />Full stack
        <span class="poppins text-violet-500 font-semibold">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-violet-400">favorite tech</span> includes Javascript
        (NEXT.JS or SvelteKit), TailwindCSS, Node.js + Express.js & PostgreSQL or
        Firebase/Firestore!
      </p>
      <a
        class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer hover:scale-105 duration-200"
        href="https://video.twimg.com/ext_tw_video/1738877595461287936/pu/vid/avc1/640x800/VTy7Q27835GXDx6N.mp4?tag=12"
        target="_blank"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </a>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <img
        src={"images/profile.png"}
        alt="A cat"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>
  </section>
  <div id="projects" class="pt-[100px] mt-[-100px]"></div>
  <section class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">
        A few of my creative endeavors.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-violet-500 font-semibold">see</span
        > my work?
      </h3>
    </div>
    <a
      href="https://video.twimg.com/ext_tw_video/1738877595461287936/pu/vid/avc1/640x800/VTy7Q27835GXDx6N.mp4?tag=12"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
    >
      <i class="fa-regular fa-circle-play"></i>
      <p>Watch the video</p>
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10"></div>
  </section>
  <div id="about" class="pt-[100px] mt-[-100px]"></div>
  <section
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-1/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-1/3 after:h-1.5 after:bg-violet-700 py-6"
    >
      <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-violet-500 font-semibold">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              {benefit.name}
            </h3>
            <p>
              {benefit.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
    <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins">
      The <span class="poppins text-violet-500 font-semibold">Complete</span> Package
      😏
    </h5>
    <div
      class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
    >
      <table class="bg-white text-slate-700 rounded rounded-tr-lg text-center">
        <thead class="border-b border-solid border-slate-200">
          <tr class="">
            <th class="w-3">Ok</th>
            <th class="whitespace-nowrap p-2 px-3">Candidate #1</th>
            <th class="whitespace-nowrap p-2 px-3">Candidate #2</th>
            <th class="whitespace-nowrap p-2 px-3">Candidate #3</th>
            <th
              class="whitespace-nowrap bg-violet-700 text-white p-4 px-8 rounded-tr"
              >Me 😏</th
            >
          </tr>
        </thead>
        <tbody>
          <tr clas="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-2 py-4 font-semibold text-sm whitespace-nowrap text-left"
            >
              Dedication
            </td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
          </tr>
          <tr clas="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-2 py-4 font-semibold text-sm whitespace-nowrap text-left"
            >
              Critical<br /> Thought
            </td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
          </tr>
          <tr clas="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-2 py-4 font-semibold text-sm whitespace-nowrap text-left"
            >
              Interpersonal <br /> Skiills
            </td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
          </tr>
          <tr clas="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-2 py-4 font-semibold text-sm whitespace-nowrap text-left"
            >
              Programming <br /> Ability
            </td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
      <p>Scroll to see more &rarr;</p>
    </div>
    <p class="mx-auto">Give me money, please.</p>
  </section>
</main>
