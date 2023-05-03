import type { Country } from "../types/country";
import { countryInstance } from "../config/axiosConfig";

export const getCountries = async () => {
  const { data } = await countryInstance.get<Country[]>("all", {
    params: {
      fields: "name,flags,population,capital,region",
    },
  });
  return data;
};

export const getCountryByName = async (countryName: string) => {
  const { data } = await countryInstance.get<Country[]>(`name/${countryName}`);
  return data;
};
