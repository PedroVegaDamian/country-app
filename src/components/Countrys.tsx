import { Link } from "wouter";
import { Country } from "@/types/country";
import styles from "./Country.module.css";

interface Props {
  countries: Country[];
}

export const ListOfCountrys = ({ countries }: Props) => {
  return (
    <>
      {countries.map((country) => (
        <Link href={`/country/${country.cca3}`} key={country.cca3}>
          <a>
            <section className={styles.card}>
              <header>
                <img src={country.flags.png} alt={country.name.common} />
              </header>
              <div>
                <h2>{country.name.common}</h2>
                <article>
                  <p>Population: {country.population}</p>
                  <p>Region: {country.region}</p>
                  <p>Capital: {country.capital}</p>
                </article>
              </div>
            </section>
          </a>
        </Link>
      ))}
    </>
  );
};
