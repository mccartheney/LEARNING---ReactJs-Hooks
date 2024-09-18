import { useContext, useRef } from "react"
import { AppContext } from "./App"

const UserInput = () => {
    const inputRef = useRef(undefined)
    const {setUsername} = useContext(AppContext)

    return (
        <input type="text" ref={inputRef} onChange={() => {setUsername(inputRef.current.value)}}/>
    )
}

export default UserInput