import { useState } from "react";

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);

  const visitedHandle = () => {
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
    </div>
  );
};

export default Country;
