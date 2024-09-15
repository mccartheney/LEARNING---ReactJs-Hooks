import { useState } from "react";
import "./style.css"

function App() {
  // create counter state to manipulate counter value
  const [counter, setCounter] = useState(0)

  const increase = () => setCounter (actualCounter => actualCounter+1)
  const decrease = () => setCounter (actualCounter => actualCounter-1)

  const [inputValue, setInputValue] = useState ("")

  return (
    <div className="App">
      <div className="title">
        <h1>
          Use State
        </h1>
      </div>

      <div className="couter">
        <div className="counter_number">
          <h2>
            Counter
          </h2>
          <p>
            {/* counter state Value */}
            {counter}
          </p>
          {/* button to increase */}
          <button onClick={() => increase()}>
            Increase
          </button>
          <button onClick={decrease}>
            {/* button to decrease */}
            Decrease
          </button>
        </div>
      </div>

      <div className="input">
        <h2>
          Get input
        </h2>

        <input type="" className="input-input" onChange={(event) => setInputValue(event.target.value)}/>
        <p>
          {inputValue}
        </p>

      </div>
    </div>
  );
}

export default App;
