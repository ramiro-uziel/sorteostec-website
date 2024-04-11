<script>
  import Redirect from "../../components/Redirect.svelte";
  import { userLogged } from "$lib/stores";
</script>

<Redirect passcondition={$userLogged}>
  <slot />
</Redirect>
