import { create } from "zustand";
import { Country, Region } from "@/types/country";
import { getCountries } from "@/services/country";

interface CountryStore {
  countries: Country[];
  selectRegion: string;
  countrySearched: Country[];
  setSelectRegion: (value: string) => void;
  setCountries: () => void;
  getAllCountries: () => void;
  getCountryByName: (name: string) => void;
  getCountryByCode: (code: string | undefined) => Country[];
  getCountrysByContinent: (region: string) => void;
}

export const useCountryStore = create<CountryStore>()((set, get) => ({
  countries: [],
  selectRegion: Region.Africa,
  countrySearched: [],
  getCountryByCode: (code: string | undefined) => {
    return get().countries.filter((country) => country.cca3 === code);
  },
  getCountrysByContinent: (region: string) => {
    set(() => ({
      countrySearched: get().countries.filter(
        (continents) => continents.region === region
      ),
    }));
  },
  setSelectRegion: (value: string) => {
    set(() => ({
      selectRegion: value,
    }));
  },
  setCountries: () => {
    set(() => ({
      countrySearched: get().countries,
    }));
  },
  getAllCountries: async () => {
    const countries = await getCountries();
    console.log("getAllCountries from store");
    console.log(countries);

    set(() => ({
      countries: countries,
      countrySearched: countries.filter(
        (country) => country.region === get().selectRegion
      ),
    }));
  },
  getCountryByName: (name: string) => {
    set((store) => {
      const countryFound = store.countries.filter(
        (country) => country.name.common.toLowerCase() === name.toLowerCase()
      );

      return {
        countrySearched: countryFound,
        selectRegion: countryFound[0].region,
      };
    });
  },
}));
