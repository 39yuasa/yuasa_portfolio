const Select = (props) => {
  const { HandleChange } = props;
  return (
    <>
      <select onChange={HandleChange}>
        <option value="tokyo">東京</option>
        <option value="osaka">大阪</option>
        <option value="sapporo">札幌</option>
      </select>
    </>
  );
};
export default Select;
