import { Country } from "@/types/country";
import { countryInstance } from "@/config/axiosConfig";

const namefields: (keyof Country)[] = [
  "name",
  "flags",
  "population",
  "capital",
  "region",
  "ccn3",
];
const fields: string = [...new Set(namefields)].join(",");

export const getCountries = async () => {
  const { data } = await countryInstance.get<Country[]>("all", {
    params: {
      fields,
    },
  });
  return data;
};

export const getCountryByName = async (countryName: string) => {
  const { data } = await countryInstance.get<Country[]>(`name/${countryName}`);
  return data;
};
