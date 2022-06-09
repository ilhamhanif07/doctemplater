import { atom, selector } from "recoil";

export const dataManagementFee = atom({
  key: "dataManagementFee",
  default: [],
});

export const dataNamaDirektur = atom({
  key: "dataNamaDirektur",
  default: [],
});

export const dataNamaJabatan = atom({
  key: "dataNamaJabatan",
  default: [],
});

export const dataNamaPerusahaan = atom({
  key: "dataNamaPerusahaan",
  default: null,
});

export const dataNamaNotaris = atom({
  key: "dataNamaNotaris",
  default: [],
});

export const dataWilayahNotaris = atom({
  key: "dataWilayahNotaris",
  default: [],
});

export const dataNomorAkta = atom({
  key: "dataNomorAkta",
  default: [],
});

export const dataNamaBank = atom({
  key: "dataNamaBank",
  default: [],
});

export const dataNomorRekening = atom({
  key: "dataNomorRekening",
  default: [],
});

export const dataAtasNamaRekening = atom({
  key: "dataAtasNamaRekening",
  default: [],
});
