import { useState } from "react";

import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  let addvalue = () => {
    console.log(count);
    if (count < 20) {
      setcount(count + 1);
    }
  };
  let deletvalue = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };
  let incressby5 = () => {
    setcount((prevcount) => prevcount + 1);
    setcount((prevcount) => prevcount + 1); // it use a callback back in the behind
    setcount((prevcount) => prevcount + 1);
    setcount((prevcount) => prevcount + 1);
    setcount((prevcount) => prevcount + 1);
  };
  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={addvalue}> incresss</button>
      <br />
      <button onClick={deletvalue}> decress</button>
      <br />
      <button onClick={incressby5}> incressby5</button>
    </>
  );
}

export default App;
