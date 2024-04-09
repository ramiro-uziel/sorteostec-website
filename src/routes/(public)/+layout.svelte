<script>
  import Redirect from "../../components/Redirect.svelte";
  import { userLogged } from "$lib/stores";
  console.log("[!!] Public logged status: ", $userLogged);
</script>

<Redirect passcondition={!$userLogged}>
  <slot />
</Redirect>
