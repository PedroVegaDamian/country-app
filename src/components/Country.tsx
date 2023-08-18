import { Link } from "wouter";
import { Country } from "@/types/country";
import styles from "./Country.module.css";

interface Props {
  countries: Country[];
}

export const CountrySearch = ({ countries }: Props) => {
  return (
    <>
      {countries.map((country) => (
        <Link href={`/country/${country.cca3}`} key={country.cca3}>
          <a className={styles.card}>
            <section>
              <header className={styles.card__sectionHeader}>
                <img
                  className={styles.card__sectionFlag}
                  src={country.flags.png}
                  alt={country.name.common}
                />
              </header>
              <div className={styles.card__sectionInfo}>
                <h2 className={styles.card__sectionName}>
                  {country.name.common}
                </h2>
                <article className={styles.card__sectionData}>
                  <p>
                    <span>Population:</span>{" "}
                    {country.population.toLocaleString("en-US")}
                  </p>
                  <p>
                    <span>Region:</span> {country.region}
                  </p>
                  <p>
                    <span>Capital:</span> {country.capital?.[0]}
                  </p>
                </article>
              </div>
            </section>
          </a>
        </Link>
      ))}
    </>
  );
};
