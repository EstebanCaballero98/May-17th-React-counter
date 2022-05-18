import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const AddClick = () => {
    setCounter(counter + 1);
  };
  const SubtractClick = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        <div className="number">{counter}</div>
        <button onClick={AddClick}>Add Count</button>
        <button onClick={SubtractClick}>Lower Count</button>
      </div>
    </>
  );
}

export default App;
