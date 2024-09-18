import { useContext } from "react"
import { AppContext } from "./App"

const User = () => {
    const {userName} = useContext(AppContext)
    return (
        <p>
            {userName}
        </p>       
    )
}

export default User