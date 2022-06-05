const PTag = (props) => {
  // console.log(props.data[0].timeSeries);
  // console.log(props.data[0].timeSeries[0].areas[0].weathers[0]);
  return (
    <>
      <p>今日の天気は{props.data[0].timeSeries[0].areas[0].weathers[0]}</p>
      <p>明日の天気は{props.data[0].timeSeries[0].areas[0].weathers[1]}</p>
      <p>明後日の天気は{props.data[0].timeSeries[0].areas[0].weathers[2]}</p>
    </>
  );
};

export default PTag;
