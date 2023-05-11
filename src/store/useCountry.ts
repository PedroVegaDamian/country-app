import { create } from "zustand";
import { Country } from "@/types/country";
import { getCountries } from "@/services/country";

interface CountryStore {
  countries: Country[];
  countrySearched: Country[];
  counter: number;
  setCountries: () => void;
  getAllCountries: () => void;
  getCountryByName: (name: string) => void;
  getCountryByCode: (code: string | undefined) => Country[];
}

export const useCountryStore = create<CountryStore>()((set, get) => ({
  countries: [],
  countrySearched: [],
  counter: 10,
  getCountryByCode: (code: string | undefined) => {
    return get().countries.filter((country) => country.cca3 === code);
  },
  setCountries: () => {
    set(() => ({
      countrySearched: get().countries,
    }));
  },
  getAllCountries: async () => {
    const countries = await getCountries();
    console.log("getAllCountries from store");
    set(() => ({
      countries: countries,
      countrySearched: countries,
    }));
  },
  getCountryByName: (name: string) => {
    set((store) => ({
      countrySearched: store.countries.filter(
        (country) => country.name.common.toLowerCase() === name.toLowerCase() // [{...peru}]
      ),
    }));
  },
}));
