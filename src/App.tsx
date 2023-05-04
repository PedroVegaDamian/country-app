import { FormEvent, useEffect, useState, useRef,ChangeEvent } from "react";
import { getCountries, getCountryByName } from "./services/country";
import { Country, Region } from "./types/country";
import styles from "./App.module.css";
import {ListOfCountrys} from "./components/Countrys"
import {useSearch} from "./hooks/useSearch"

const regions = Object.values(Region);

function App() {
  const [country, setCountry] = useState<Country[]>([]);
  
  // Custom hook
  const {search, setSearch, error} = useSearch()

  useEffect(() => {
    getCountries().then((allCountry) => setCountry(allCountry));
  }, []);
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Para evitar hacer fetch si el campo es vacío
    try {
      if (search === '') return

      const data = await getCountryByName(search);
      console.log(data);
      setCountry(data);
      
    } catch (error) {
      throw new Error('Error seaching country')
      
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  
  return (
    <>
      <header>
        <section>Logo</section>
        <section>Dark mode</section>
      </header>

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

      {error && <p>{error}</p>}

      <main className={styles.cards}>
        <ListOfCountrys country={country}/>
      </main>
    </>
  );
}

export default App;
