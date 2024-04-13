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

const build = {
  buildID: "",
};
const personalCards = { tarjetas: [] };
export const userProfile = writable(initialProfile);
export const userWallet = writable(initialWallet);
export const userLogged = writable(false);
export const dataLoaded = writable(false);
export const buildInfo = writable(build);
export const cardList = writable(personalCards);
export const abonarSaldoBoxVisible = writable(false);
export const isAdmin = writable(false);
