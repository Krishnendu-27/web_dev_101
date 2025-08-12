import { useState } from "react";

function App() {
  const [color, setcolor] = useState("black");
  return (
    <>
      <main>
        <html style={{ backgroundColor: color }}></html>
        <button onClick={() => setcolor("black")} type="submit">
          Black
        </button>
        <button onClick={() => setcolor("blue")} type="submit">
          blue
        </button>
        <button onClick={() => setcolor("Green")} type="submit">
          Green
        </button>
        <button onClick={() => setcolor("yellow")} type="submit">
          yellow
        </button>
        <button onClick={() => setcolor("orange")} type="submit">
          orange
        </button>
        <button onClick={() => setcolor("aqua")} type="submit">
          aqua
        </button>
      </main>
    </>
  );
}

export default App;
