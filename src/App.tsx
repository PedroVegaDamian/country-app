import { useEffect } from "react";
import { Route } from "wouter";
import { Home } from "@/pages/Home";
import { CountryDetails } from "@/pages/CountryDetails";
import { useCountryStore } from "@/store/useCountry";
import Button from "@mui/material/Button";

function App() {
  const counter = useCountryStore((state) => state.counter);
  const getAllCountries = useCountryStore((state) => state.getAllCountries);

  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

  return (
    <>
      <header>
        <section>Logo</section>
        <section>Dark mode</section>
        <Button variant="contained">Contained</Button>
      </header>

      <h1>Counter: {counter}</h1>

      <main>
        <Route path="/" component={Home} />
        <Route path="/country/:code" component={CountryDetails} />
      </main>
    </>
  );
}

export default App;
