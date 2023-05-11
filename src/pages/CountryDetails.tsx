import { useRoute } from "wouter";
import { Country } from "@/types/country";
import { useEffect, useState } from "react";
import { useCountryStore } from "@/store/useCountry";

export const CountryDetails = () => {
  const [, params] = useRoute("/country/:code");
  const [country, setCountry] = useState<Country[]>([]);
  const getCountryByCode = useCountryStore((state) => state.getCountryByCode);
  const countries = useCountryStore((state) => state.countries);

  useEffect(() => {
    const countryDetails = getCountryByCode(params?.code);
    setCountry(countryDetails);
  }, [countries, getCountryByCode, params?.code]);

  return (
    <div>
      CountryDetails: {params?.code}
      <h1>{country[0]?.name?.common}</h1>
    </div>
  );
};
