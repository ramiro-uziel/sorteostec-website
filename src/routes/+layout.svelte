<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import BoletoHover from "../assets/icons/boleto-hover.svelte";
  import {
    cardList,
    purchaseList,
    dataLoaded,
    userLogged,
    ticketList,
  } from "../lib/stores";
  import { userProfile } from "../lib/stores";
  import { userWallet } from "../lib/stores";
  import { buildInfo } from "../lib/stores";
  import { isAdmin } from "../lib/stores";
  import { adminInfo } from "../lib/stores";

  let headerHeight = 0;
  let y = 0;
  let headerElement;

  function updateHeaderHeight() {
    headerHeight = headerElement.clientHeight;
  }

  async function logUserProfile() {
    const unsubscribe = userProfile.subscribe((items) => {
      console.log("[ ! ] Store items:", items);
      unsubscribe();
    });
  }

  async function logUserLogged() {
    const unsubscribe = userLogged.subscribe((items) => {
      console.log("[ ! ] Store items:", items);
      unsubscribe();
    });
  }

  async function updateBuildInfo() {
    try {
      const response = await fetch("/build-id.json");
      const data = await response.json();
      const date = new Date(data.buildId);
      const formattedDate = date.toLocaleString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      buildInfo.set({ buildID: formattedDate });
    } catch (error) {
      console.error("[ ! ] Error fetching build info:", error);
    }
  }

  async function fetchData() {
    console.log("[ ! ] Starting data fetch...");

    try {
      const loggedResponse = await fetch("/api/logged");
      const loggedText = await loggedResponse.text();
      const loggedData = loggedText.toLowerCase() === "true";
      console.log("[ ! ] Logged data:", loggedData);
      userLogged.set(loggedData);

      if (loggedData) {
        console.log("[ ! ] User is logged in");

        const isAdminResponse = await fetch("/api/is_admin");
        const isAdminText = await isAdminResponse.text();
        const isAdminData = isAdminText.toLowerCase() === "true";
        console.log("[ ! ] User admin status:", isAdminData);
        isAdmin.set(isAdminData);

        if (isAdminData) {
          const reportesResponse = await fetch("/api/admin/reportes");
          const reportesData = await reportesResponse.json();
          console.log("[ ! ] Admin data:", reportesData);
          adminInfo.set(reportesData);
        }

        const profileResponse = await fetch("/api/perfil");
        const profileData = await profileResponse.json();
        console.log("[ ! ] Profile data:", profileData);
        userProfile.set(profileData);

        const walletResponse = await fetch("/api/ewallet");
        const walletData = await walletResponse.json();
        console.log("[ ! ] Wallet data:", walletData);
        userWallet.set(walletData);

        const cardsResponse = await fetch("/api/tarjetas");
        const cardsData = await cardsResponse.json();
        console.log("actualiza");
        console.log("[ ! ] Cards data:", cardsData.tarjetas);
        cardList.set(cardsData);

        const purchaseResponse = await fetch("/api/compras");
        const purchaseData = await purchaseResponse.json();
        console.log("actualiza");
        console.log("[ ! ] Compras data:", purchaseData.compras);
        purchaseList.set(purchaseData);

        const ticketsResponse = await fetch("/api/boletos");
        const ticketsData = await ticketsResponse.json();
        console.log("actualiza");
        console.log("[ ! ] Boletos data:", ticketsData);
        ticketList.set(ticketsData);
        // userWallet.set(walletData);

        dataLoaded.set(true);
      } else {
        console.log("[ ! ] User is not logged in");
      }
    } catch (error) {
      console.error("[ ! ] Error fetching data", error);
    }
  }

  onMount(() => {
    fetchData();
    updateBuildInfo();
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
