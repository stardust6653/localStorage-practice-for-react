import { useEffect, useState } from "react";
import "./App.css";

function App() {
  function useLocalStorage(itemName, value = "") {
    const [state, setState] = useState(() => {
      return window.localStorage.getItem(itemName) || "";
    });

    useEffect(() => {
      window.localStorage.setItem(itemName, state);
    }, [state]);

    return [state, setState];
  }

  const [keyword, setKeyword] = useLocalStorage("keyword");
  const [result, setResult] = useLocalStorage("result");
  const [typing, setTyping] = useLocalStorage("typing", false);

  function handleOnChange(event) {
    setKeyword(event.target.value);
    setTyping(true);
  }

  function handleOnClick(event) {
    event.preventDefault();
    setResult(`지금 당신이 검색한 검색어는 ${keyword}`);
    setTyping(false);
  }

  return (
    <div>
      <form>
        <input onChange={handleOnChange}></input>
        <button onClick={handleOnClick}>Search</button>
      </form>
      <p>{typing ? `${keyword}` : ""}</p>
      <p>{typing ? `당신이 찾고있는 것은 ${keyword}!` : result}</p>
    </div>
  );
}

export default App;
