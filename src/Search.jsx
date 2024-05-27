import { useState } from "react";

export default function Search({ onQuery, onListUpdate }) {
  const [name, setName] = useState("");
  let [list, setList] = useState([]);
  function handleInput(e) {
    e.preventDefault();
    onQuery(name);
    let cpList = list;
    cpList.push(name);
    setName("");
    onListUpdate(cpList);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <button onClick={handleInput} type="submit">
          ADD
        </button>
      </form>
    </div>
  );
}
