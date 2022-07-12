import { atom, selector } from "recoil";

export const paramPreviewPDFAtom = atom({
  default: {},
  key: "paramPreviewPDFAtom",
});

export const paramPreviewPDFSelector = selector({
  key: "paramPreviewPDFSelector",
  get: ({ get }) => {
    const paramyow = get(paramPreviewPDFAtom);
    return paramyow;
  },
});
