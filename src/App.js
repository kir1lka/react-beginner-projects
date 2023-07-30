import React from "react";

import "./index.scss";

function App() {
  const [count, setCount] = React.useState(0);

  const onClicsPlus = () => {
    setCount(count + 1);
  };

  const onClicsMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={onClicsMinus}>
          - Минус
        </button>
        <button className="plus" onClick={onClicsPlus}>
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
