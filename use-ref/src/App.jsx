import { useRef } from "react";
import "./style.css"
function App() {

  const inputRef = useRef(undefined)

  const clearInput = () => {inputRef.current.value = ""}
  const focusOnInput = () => {inputRef.current.focus()}
  const logInput = () => {console.log(inputRef.current.value)}


  return (
    <div className="App">
      <div className="title">
        <h1>
          useRef
        </h1>
      </div>

      <input type="text" ref={inputRef}/>

      <button onClick={() => {clearInput()}}>clear</button>
      <button onClick={() => {focusOnInput()}}>focus</button>
      <button onClick={() => {logInput()}}>log value</button>
      
    </div>
  );
}

export default App;
