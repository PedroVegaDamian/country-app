import { useEffect } from "react";
import { Route } from "wouter";
import { Home } from "@/pages/Home";
import { CountryDetails } from "@/pages/CountryDetails";
import { useCountryStore } from "@/store/useCountry";
import { Header } from "./components/Header";

function App() {
  const getAllCountries = useCountryStore((state) => state.getAllCountries);

  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

  return (
    <>
      <Header />

      <main>
        <Route path="/" component={Home} />
        <Route path="/country/:code" component={CountryDetails} />
      </main>
    </>
  );
}

export default App;
