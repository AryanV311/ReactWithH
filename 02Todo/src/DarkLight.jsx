import { useContext } from "react"
import { AuthContext } from "./Store/StoreContext"
import "./index.css"


export const DarkLight = () => {

    const {theme, handleToggleButton} = useContext(AuthContext)

  return (
    <div className="container">
        <div className={ theme === "Dark"? "bg-color": "bg-noColor"}>
            <h1>Dark light Theme</h1>
            <p>Hello !! checking dark light mode</p>
            <button onClick={handleToggleButton}>{theme === "Light" ? "Switch to Dark": "Switch to Light"}</button>
        </div>
    </div>
  )
}
