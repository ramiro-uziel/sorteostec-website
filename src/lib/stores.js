import { writable } from "svelte/store";

const initialProfile = {
  name: "",
  email: "",
  phone: "",
  city: "",
};

const initialWallet = {
  saldo: 0,
  estado_de_cuenta: {
    movimiento: "",
    fecha: "",
    monto: 0,
  },
};

// Create a writable store
export const userProfile = writable(initialProfile);
export const userWallet = writable(initialWallet);
export const userLogged = writable(false);
