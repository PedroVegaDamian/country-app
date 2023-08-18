import styles from "./Home.module.css";
import { CountrySearch } from "@/components/Country";
import { useCountryStore } from "@/store/useCountry";
import { Form } from "@/components/Form";

export const Home = () => {
  const countrySearched = useCountryStore((store) => store.countrySearched);

  return (
    <div className={styles.home__container}>
      <Form />

      <div className={styles.home__cards}>
        <CountrySearch countries={countrySearched} />
      </div>
    </div>
  );
};
