import "./App.css";
import React, { useEffect, useState } from "react";
import PTag from "./compornent/ptag";
import URL from "./compornent/URl";
import Data from "./data/data.json";
import Select from "./compornent/Select";

function App() {
  const { observation } = Data;
  const [data, setData] = useState(observation[0]);
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState(URL(data.json));

  const HandleChange = (e) => SelectChange(e.target.value);
  const SelectChange = (value) => {
    observation.map((site, index) => {
      site.city == value ? setData(observation[index]) : console.log("aaa");
    });
  };
  useEffect(() => {
    console.log(data);
    const parameterURL = URL(data.json);
    console.log(parameterURL);
    const queryWeather = () => {
      fetch(parameterURL)
        .then((response) => response.json())
        .then((weather) => {
          setApiData(weather);
          setLoading(false);
        });
    };
    queryWeather();
    setLoading(false);
  }, [data]);

  if (loading) {
    return null;
  } else {
    console.log(apiData);
    return (
      <>
        <Select HandleChange={HandleChange} />
        <PTag data={apiData} />
      </>
    );
  }
}
export default App;

// --------------------------------------------------------
