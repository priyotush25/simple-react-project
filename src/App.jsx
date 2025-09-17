import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries";

function App() {
  const countries = fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,population,flags"
  ).then((res) => res.json());

  return (
    <>
      <Suspense callback={<h1>Data Loading......</h1>}>
        <Countries countries={countries} />
      </Suspense>
    </>
  );
}

export default App;
