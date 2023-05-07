import { useRoute } from "wouter";

export const CountryDetails = () => {
  const [match, params] = useRoute("/country/:code");

  return <div>CountryDetails: {params?.code}</div>;
};
