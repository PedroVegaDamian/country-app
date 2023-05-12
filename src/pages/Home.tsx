import styles from "./Home.module.css";
import { CountrySearch } from "@/components/Country";
import { useCountryStore } from "@/store/useCountry";
import { Form } from "@/components/Form";

export const Home = () => {
  const countrySearched = useCountryStore((store) => store.countrySearched);

  return (
    <>
      <Form />
      
      <div className={styles.cards}>
        <CountrySearch countries={countrySearched} /> {/* [{..peru}] */}
      </div>
    </>
  );
};
