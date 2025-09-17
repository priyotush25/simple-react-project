import { use } from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  const countriesData = use(countries);
  console.log(countriesData);
  return (
    <>
      <h1>Travel Countries : {countriesData.length}</h1>
      {countriesData.map((country) => (
        <Country key={country.name.name} country={country} />
      ))}
    </>
  );
};

export default Countries;
