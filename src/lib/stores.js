import { writable } from "svelte/store";

// Objetos iniciales

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

const initialAdminInfo = {
  ecompras: 0,
  usuarios: 0,
  registros: 0,
};

const build = {
  buildID: "",
};

const personalCards = { tarjetas: [] };
const personalTickets = [];
const personalPurchases = { compras: [] };

// STORES

// perfil
export const userProfile = writable(initialProfile);

// e-wallet
export const userWallet = writable(initialWallet);
export const cardList = writable(personalCards);
export const userInformation = writable({});
export const ticketList = writable(personalTickets);
export const purchaseList = writable(personalPurchases);
export const abonarSaldoBoxVisible = writable(false);

// Admin
export const isAdmin = writable(false);
export const adminInfo = writable(initialAdminInfo);

// Misc
export const userLogged = writable(false);
export const dataLoaded = writable(false);
export const buildInfo = writable(build);