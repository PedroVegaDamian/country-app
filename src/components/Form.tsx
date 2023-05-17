import { Region } from "@/types/country";
import { useSearch } from "@/hooks/useSearch";
import { useCountryStore } from "@/store/useCountry";
import { FormEvent, ChangeEvent } from "react";

export const Form = () => {
  const { search, setSearch } = useSearch();
  const getCountryByName = useCountryStore((store) => store.getCountryByName);
  const selectRegion = useCountryStore((store) => store.selectRegion);
  const setSelectRegion = useCountryStore((store) => store.setSelectRegion);
  const getCountrysByContinent = useCountryStore(
    (store) => store.getCountrysByContinent
  );

  const regions = Object.values(Region);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (search === "") return;
      getCountryByName(search);
    } catch (error) {
      throw new Error("Error seaching country");
    }
  };

  const handleChangeInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleChangeInputSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectRegion(e.target.value);
    const region = e.target.value;
    getCountrysByContinent(region);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChangeInputSearch} value={search} />
      <select
        name="Filter by Region"
        onChange={handleChangeInputSelect}
        value={selectRegion}
      >
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </form>
  );
};
