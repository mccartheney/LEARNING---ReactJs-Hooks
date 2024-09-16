import { useReducer } from "react"
import "./style.css"

const reducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT" :
      const actualCounter = state.counter + 1
      return { counter: actualCounter, labelVisibility: state.labelVisibility }
    
    case "CHANGE_LABEL" :
      let labelState = state.labelVisibility

      if (state.counter % 2 === 0) {labelState = true} else {labelState = false}
      return { counter: state.counter, labelVisibility:labelState}
    
    default :
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {counter:0, labelVisibility:true})

  return (
    <div className="App">
      <div className="title">
        <h1>
          Use Reducer
        </h1>
      </div>

      <div className="counter">
        <h2>
          {state.counter}
        </h2>
        <button onClick={() => {
          dispatch({ type: "INCREMENT" })
          dispatch({ type: "CHANGE_LABEL" })
        }}>
          +
        </button>
        <p>
          {state.labelVisibility && <p>ONLY APPEAR WHEN COUNTER IS EVEN</p>}
        </p>
      </div>

    </div>
  );
}

export default App;
