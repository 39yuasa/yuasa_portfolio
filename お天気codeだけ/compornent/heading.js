const Head = (props) => {
  return (
    <>
      <h1>{props.pageName}</h1>
      {props.weather}
    </>
  );
};
export default Head;
