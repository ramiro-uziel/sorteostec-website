import { writable } from "svelte/store";

// Initial user profile object
const initialProfile = {
  name: "Foonando Barza",
  email: "Foonando@yahoo.net",
  phone: "81111111",
  city: "Foodalajara",
};

const initialWallet = {
  saldo: 0,
  estado_de_cuenta:
  {
    movimiento: "",
    fecha: "",
    monto: 0
  }
}

// Create a writable store
export const userProfile = writable(initialProfile);
export const userWallet = writable(initialWallet);
export const userLogged = writable(true);
