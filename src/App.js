import { useState } from "react";
import "./App.css";

function App() {
  const [keyword, setKeyword] = useState("");

  function handleOnChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form>
        <input onChange={handleOnChange}></input>
        <button>Search</button>
      </form>
      <p>{keyword}</p>
    </div>
  );
}

export default App;
