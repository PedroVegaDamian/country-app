import { create } from "zustand";
import { Country } from "@/types/country";

interface CountryStore {
  countries: Country[];
  counter: number;
}

export const useCountryStore = create<CountryStore>()(() => ({
  countries: [],
  counter: 10,
}));
