import { useRoute, useLocation } from "wouter";
import { Country } from "@/types/country";
import { useEffect, useState } from "react";
import { useCountryStore } from "@/store/useCountry";
import Button from "@mui/material/Button";

export const CountryDetails = () => {
  const [, params] = useRoute("/country/:code");
  const [country, setCountry] = useState<Country[]>([]);
  const getCountryByCode = useCountryStore((state) => state.getCountryByCode);
  const countries = useCountryStore((state) => state.countries);
  const [, navigate] = useLocation();

  useEffect(() => {
    const countryDetails = getCountryByCode(params?.code);
    setCountry(countryDetails);
  }, [countries, getCountryByCode, params?.code]);

  return (
    <div>
      CountryDetails: {params?.code}
      <Button
        variant="contained"
        onClick={() => {
          // more code
          navigate("/");
        }}
      >
        Volver a Countries
      </Button>
      <h1>Name: {country[0]?.name?.common}</h1>
      <h1>Population: {country[0]?.population}</h1>
      <h1>Region: {country[0]?.region}</h1>
      <h1>SubRegion: {country[0]?.subregion}</h1>
      <h1>Capital: {country[0]?.capital}</h1>
      <hr />
      <h1>Top Level Domain: {country[0]?.tld}</h1>
      <h1>
        Currencies:{" "}
        {country[0]?.currencies &&
          Object.values(country[0]?.currencies)
            .map((currency) => currency.name)
            .join(", ")}
      </h1>
      <h1>
        Languages:{" "}
        {country[0]?.languages &&
          Object.values(country[0]?.languages).join(", ")}
      </h1>
      <hr />
      <h1>Border Countries: {country[0]?.borders?.join(", ")}</h1>
    </div>
  );
};
