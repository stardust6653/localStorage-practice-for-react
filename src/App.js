import { useState } from "react";
import "./App.css";

function App() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState("");

  function handleOnChange(event) {
    setKeyword(event.target.value);
  }

  function handleOnClick(event) {
    event.preventDefault();
    setResult(`지금 당신이 검색한 검색어는 ${keyword}`);
  }

  return (
    <div>
      <form>
        <input onChange={handleOnChange}></input>
        <button onClick={handleOnClick}>Search</button>
      </form>
      <p>{keyword}</p>
      <p>{result}</p>
    </div>
  );
}

export default App;
