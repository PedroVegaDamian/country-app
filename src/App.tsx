import { Route } from "wouter";
import { Home } from "@/pages/Home";
import { CountryDetails } from "@/pages/CountryDetails";
import { useCountryStore } from "@/store/useCountry";

function App() {
  const counter = useCountryStore((state) => state.counter);

  return (
    <>
      <header>
        <section>Logo</section>
        <section>Dark mode</section>
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
