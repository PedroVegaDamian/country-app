import { Link } from "wouter";
import { Country } from "@/types/country";
import styles from "./Country.module.css";

interface Props {
  country: Country[];
}

export const ListOfCountrys = ({ country }: Props) => {
  return (
    <>
      {country.map((item) => (
        <Link href={`/country/${item.ccn3}`} key={item.ccn3}>
          <a>
            <section className={styles.card}>
              <header>
                <img src={item.flags.png} alt={item.name.common} />
              </header>
              <div>
                <h2>{item.name.common}</h2>
                <article>
                  <p>Population: {item.population}</p>
                  <p>Region: {item.region}</p>
                  <p>Capital: {item.capital}</p>
                </article>
              </div>
            </section>
          </a>
        </Link>
      ))}
    </>
  );
};
