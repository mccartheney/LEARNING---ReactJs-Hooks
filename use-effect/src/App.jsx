import { useEffect, useState } from "react";
import "./style.css"

import axios from "axios"

function App() {
  const [joke, setJoke] = useState("")

  useEffect (() => {
    axios.get("https://api.chucknorris.io/jokes/random")
      .then (response => setJoke(response.data.value))
  }, [])

  return (
    <div className="App">
      <div className="title">
        <h1>
          UseEffect
        </h1>
      </div>

      <div className="jokes">
        <h3>
          Chuck norris joke
        </h3>

        <p>
          {joke}
        </p>
      </div>
    </div>
  );
}

export default App;
