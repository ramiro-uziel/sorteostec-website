import { writable } from "svelte/store";

// Initial user profile object
const initialProfile = {
  name: "",
  email: "",
  phone: "",
  city: "",
};

// Create a writable store
export const userProfile = writable(initialProfile);
export const userLogged = writable(false);
