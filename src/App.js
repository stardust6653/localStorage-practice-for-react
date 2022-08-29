import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [keyword, setKeyword] = useState(() => {
    return window.localStorage.getItem("keyword");
  });
  const [result, setResult] = useState("");
  const [typing, setTyping] = useState(false);

  function handleOnChange(event) {
    setKeyword(event.target.value);
    setTyping(true);
  }

  function handleOnClick(event) {
    event.preventDefault();
    setResult(`지금 당신이 검색한 검색어는 ${keyword}`);
    setTyping(false);
  }

  useEffect(() => {
    window.localStorage.setItem("keyword", keyword);
  }, [keyword]);

  useEffect(() => {
    window.localStorage.setItem("result", result);
  }, [keyword]);

  useEffect(() => {
    window.localStorage.setItem("typing", typing);
  }, [keyword, result]);

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
