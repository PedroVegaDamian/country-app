export const ListOfCountrys = ({country}) => {
  {
    country.map((item) => (
      <section key={item.name.common}>
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
    ))
  }
}

