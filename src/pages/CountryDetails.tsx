import { useRoute, useLocation } from "wouter";
import { Country } from "@/types/country";
import { useEffect, useState } from "react";
import { useCountryStore } from "@/store/useCountry";
import styles from "./CountryDetails.module.css";
import { IconArrowLeft } from "@/components/icons/IconArrowLeft";

export const CountryDetails = () => {
  const [, params] = useRoute("/country/:code");
  const [country, setCountry] = useState<Country[]>([]);
  const getCountryByCode = useCountryStore((state) => state.getCountryByCode);
  const countries = useCountryStore((state) => state.countries);
  const [, navigate] = useLocation();

  useEffect(() => {
    const countryDetails = getCountryByCode(params?.code);
    setCountry(countryDetails);
    console.log(countryDetails);
  }, [countries, getCountryByCode, params?.code]);

  return (
    <section className={styles.countryDetails}>
      <button
        className={styles.countryDetails__backButton}
        onClick={() => {
          navigate("/");
        }}
      >
        <IconArrowLeft />
        <span>Back</span>
      </button>
      <div className={styles.countryDetails__info}>
        <img
          width={500}
          height={300}
          src={country[0]?.flags.svg}
          alt={country[0]?.flags.alt}
        />
        <div>
          <h1 className={styles.countryDetails__info__name}>
            {country[0]?.name?.common}
          </h1>
          <div className={styles.countryDetails__info__container}>
            <div>
              <p>
                <strong>Native Name:</strong>{" "}
                {
                  country[0]?.name?.nativeName?.[
                    Object.keys(country[0]?.languages || "eng")[0]
                  ].common
                }
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {country[0]?.population.toLocaleString("en-US")}
              </p>
              <p>
                <strong>Region:</strong> {country[0]?.region}
              </p>
              <p>
                <strong>SubRegion:</strong> {country[0]?.subregion}
              </p>
              <p>
                <strong>Capital:</strong> {country[0]?.capital}
              </p>
            </div>

            <div>
              <p>
                <strong>Top Level Domain:</strong> {country[0]?.tld}
              </p>
              <p>
                <strong>Currencies:</strong>{" "}
                {country[0]?.currencies &&
                  Object.values(country[0]?.currencies)
                    .map((currency) => currency.name)
                    .join(", ")}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {country[0]?.languages &&
                  Object.values(country[0]?.languages).join(", ")}
              </p>
            </div>
          </div>

          <p className={styles.countryDetails__info__borderCountries}>
            <strong>Border Countries:</strong> {country[0]?.borders?.join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
};
