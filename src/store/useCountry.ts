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
}

export const useCountryStore = create<CountryStore>()((set, get) => ({
  countries: [],
  countrySearched: [],
  counter: 10,
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
