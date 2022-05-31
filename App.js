import "./App.css";
import PTag from "./compornent/pTag";
import Head from "./compornent/heading";
import React, { useEffect, useState } from "react";
import Ahh from "./data/data.json";

function App() {
  const { observation } = Ahh;
  // console.log(observation);
  const handleChange = (event) => {
    console.log(event);
    judge(event.target.value);
  };
  const judge = (value) => {
    observation.map((data, index) => {
      data.city == value
        ? queryWeather(observation[index].hoge)
        : console.log("a");
    });
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const queryWeather = (a) => {
    fetch(`https://www.jma.go.jp/bosai/forecast/data/forecast/${a}`)
      // ここを引数か
      .then((response) => response.json())
      .then((weather) => {
        setData(weather[0].timeSeries[0].areas[0]);
        setLoading(false);
      });
  };

  useEffect(() => {
    queryWeather(observation[0].hoge);
  }, []);

  let weatherInfo;
  // console.log(loading);
  if (loading) {
    weatherInfo = <p>loading</p>;
  } else {
    weatherInfo = (
      <>
        <PTag
          name={data.area.name}
          days={"明日の天気"}
          weather={data.weathers[0]}
        />
        <PTag
          name={data.area.name}
          days={"明後日の天気"}
          weather={data.weathers[1]}
        />
        <PTag
          name={data.area.name}
          days={"明々後日の天気"}
          weather={data.weathers[2]}
        />
      </>
    );
  }
  return (
    <>
      <h1>天気</h1>
      <select onChange={handleChange}>
        <option value="tokyo">東京</option>
        <option value="osaka">大阪</option>
        <option value="sapporo">札幌</option>
      </select>
      <Head pageName={"天気"} weather={weatherInfo} />
    </>
  );
}

export default App;
