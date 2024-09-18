import { createContext, useState } from 'react';
import './style.css';
import User from './user';
import UserInput from './userInput';

export const AppContext = createContext(null)

function App() {

  const [userName, setUsername] = useState("")

  return (
    <AppContext.Provider value={{userName, setUsername}}>
      <h1>
        UseContext
      </h1>
      <User/>
      <UserInput/>
    </AppContext.Provider>
  );
}

export default App;
