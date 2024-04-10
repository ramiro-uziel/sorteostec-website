import { readable, writable } from "svelte/store";

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

const info = {
  version: "API 0.1.3"
}

export const userProfile = writable(initialProfile);
export const userWallet = writable(initialWallet);
export const userLogged = writable(false);
export const buildInfo = readable(info)