import { FormEvent, useEffect, useState, ChangeEvent } from "react";
import { getCountries, getCountryByName } from "@/services/country";
import { Country, Region } from "@/types/country";
import styles from "./Home.module.css";
import { ListOfCountrys } from "@/components/Countrys";
import { useSearch } from "@/hooks/useSearch";

const regions = Object.values(Region);

export const Home = () => {
  const [country, setCountry] = useState<Country[]>([]);
  const { search, setSearch, error } = useSearch();

  useEffect(() => {
    getCountries().then((allCountry) => setCountry(allCountry));
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (search === "") return;
      const data = await getCountryByName(search);
      console.log(data);
      setCountry(data);
    } catch (error) {
      throw new Error("Error seaching country");
    }
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
        {error && <p>{error}</p>}
        <ListOfCountrys country={country} />
      </div>
    </>
  );
};
