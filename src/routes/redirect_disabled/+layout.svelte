<script>
  import Redirect from "../../components/Redirect.svelte";
  import { userLogged } from "$lib/stores";
  console.log("[!] Redirect layout. User logged: ", $userLogged);
</script>

<Redirect passcondition={!$userLogged}>
  <slot />
</Redirect>
