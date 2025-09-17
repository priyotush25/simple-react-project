const Country = ({ country }) => {
  const visitedHandle = () => {
    console.log("visited");
  };

  return (
    <div className="box">
      <h2>Name : {country.name.common}</h2>
      <img src={country.flags.png} alt="" />
      <h4>Independent : {country.population}</h4>

      <button onClick={visitedHandle}>Visited</button>
    </div>
  );
};

export default Country;
