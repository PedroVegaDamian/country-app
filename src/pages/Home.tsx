import { FormEvent, useEffect, useState, ChangeEvent } from "react";
import { getCountries, getCountryByName } from "@/services/country";
import { Country, Region } from "@/types/country";
import styles from "./Home.module.css";
import { Link } from "wouter";

const regions = Object.values(Region);

export const Home = () => {
  const [country, setCountry] = useState<Country[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCountries().then((allCountry) => setCountry(allCountry));
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await getCountryByName(search);
    setCountry(data);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={search} />
        <select name="Filter by Region">
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </form>

      <div className={styles.cards}>
        {country.map((item) => (
          <Link href={`/country/${item.ccn3}`} key={item.ccn3}>
            <a>
              <section className={styles.card}>
                <header>
                  <img src={item.flags.png} alt={item.name.common} />
                </header>
                <main>
                  <h2>{item.name.common}</h2>
                  <article>
                    <p>Population: {item.population}</p>
                    <p>Region: {item.region}</p>
                    <p>Capital: {item.capital}</p>
                  </article>
                </main>
              </section>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};
