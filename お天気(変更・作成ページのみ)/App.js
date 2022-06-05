import "./App.css";
import React, { useEffect, useState } from "react";
import PTag from "./compornent/ptag";
import URL from "./compornent/URl";
import Data from "./data/data.json";
import Select from "./compornent/Select";

export const App = () => {
  console.log("ahh");
  const { observation } = Data;
  // const [site, setSite] = useState(observation.observation[0]);
  const [data, setData] = useState(observation[0]);
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState(URL(data.json));
  // console.log(apiData);
  const HandleChange = (e) => SelectChange(e.target.value);

  const SelectChange = (value) => {
    observation.map((site, index) => {
      site.city == value ? setData(observation[index]) : console.log("aaa");
    });
  };

  useEffect(() => {
    const parameterURL = URL(data.json);
    const queryWeather = () => {
      fetch(parameterURL)
        .then((response) => response.json())
        .then((weather) => {
          setApiData(weather);
          setLoading(false);
        });
    };
    queryWeather();
  }, [data]);
  if (loading) {
    return null;
  } else {
    console.log(apiData);
    return (
      <div>
        <h1>天気予報</h1>
        <Select HandleChange={HandleChange} />
        <PTag data={apiData} />
      </div>
    );
  }
};
export default App;
