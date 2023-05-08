import { FormEvent, useEffect, useState, ChangeEvent } from "react";
import { getCountries, getCountryByName } from "@/services/country";
import { Country, Region } from "@/types/country";
import styles from "./Home.module.css";
import { ListOfCountrys } from "@/components/Countrys";
import { useSearch } from "@/hooks/useSearch";
import { useCountryStore } from "@/store/useCountry";

const regions = Object.values(Region);

export const Home = () => {
  const { search, setSearch } = useSearch();
  const countrySearched = useCountryStore((store) => store.countrySearched);
  const getCountryByName = useCountryStore((store) => store.getCountryByName);
  const setCountries = useCountryStore((store) => store.setCountries);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (search === "") return;
      getCountryByName(search);
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
        <button onClick={setCountries}>Volver a Countries</button>
        <ListOfCountrys countries={countrySearched} /> {/* [{..peru}] */}
      </div>
    </>
  );
};
