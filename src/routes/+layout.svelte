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
  import { userProfile, userInformation } from "../lib/stores";
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

  async function updateBuildInfo() {
    try {
      const response = await fetch("/build-id.json");
      const data = await response.json();
      buildInfo.set({
        buildID: new Date(data.buildId).toLocaleString("es-MX", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      });
    } catch (error) {
      console.error("[ ! ] Error fetching build info:", error);
    }
  }

  async function fetchData() {
    console.log("[ ! ] Starting data fetch...");
    try {
      const responses = await Promise.all([
        //0
        fetch("/api/logged"),
        //1
        fetch("/api/is_admin"),
        //2
        fetch("/api/perfil"),
        //3
        fetch("/api/perfil_extenso"),
        //4
        fetch("/api/ewallet"),
        //5
        fetch("/api/tarjetas"),
        //6
        fetch("/api/compras"),
        //7
        fetch("/api/boletos"),
      ]);

      const loggedData = (await responses[0].text()).toLowerCase() === "true";
      userLogged.set(loggedData);
      console.log("[ ! ] Logged data:", loggedData);

      if (loggedData) {
        const isAdminData =
          (await responses[1].text()).toLowerCase() === "true";
        isAdmin.set(isAdminData);
        console.log("[ ! ] User admin status:", isAdminData);

        const profileData = await responses[2].json();
        userProfile.set(profileData);

        const userData = await responses[3].json();
        userInformation.set(userData);
        console.log("[ ! ] User information:", userData);

        const walletData = await responses[4].json();
        userWallet.set(walletData);

        const cardsData = await responses[5].json();
        cardList.set(cardsData);

        const purchaseData = await responses[6].json();
        purchaseList.set(purchaseData);

        const ticketsData = await responses[7].json();
        ticketList.set(ticketsData);

        dataLoaded.set(true);

        if (isAdminData) {
          const adminInfoResponse = await fetch("/api/admin/reportes");
          const adminInfoData = await adminInfoResponse.json();
          adminInfo.set(adminInfoData);
        }
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
  <div
    bind:this={headerElement}
    class="w-full"
    style="min-height: calc(var(--header-height)); "
  >
    <div class="fixed w-full z-50">
      <Header {y} />
    </div>
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
