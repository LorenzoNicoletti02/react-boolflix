import { contextUse } from "../../Context/GlobalContext";
import { handleSearch } from "../../Services/Api";
import { useState } from "react";

export default function Searchbar(props) {
  const { data, setData } = contextUse();

  const [input, setInput] = useState();

  function callbackInput() {}

  function callBackApi() {
    handleSearch("anelli", setData);
    console.log(data);
  }
  return (
    <>
      <input type="text" />
      <button onClick={callBackApi}>Submit</button>
    </>
  );
}
