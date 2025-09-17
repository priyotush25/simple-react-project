import { useState } from "react";

const Country = ({ country, countryHandle, visitedFlagHandle }) => {
  const [visited, setVisited] = useState(false);

  const visitedHandle = () => {
    countryHandle(country);
    setVisited(!visited);
  };

  return (
    <div className={`box ${visited && "visited"}`}>
      <h2>Name : {country.name.common}</h2>
      <img src={country.flags.png} alt="" />
      <h4>Independent : {country.population}</h4>

      <button onClick={visitedHandle}>
        {visited ? "Visited" : "Not Visited"}
      </button>

      <button onClick={() => visitedFlagHandle(country.flags.png)}>
        Visited Flag
      </button>
    </div>
  );
};

export default Country;
