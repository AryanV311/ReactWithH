import { useContext, useRef } from "react";
import "./Useref.css"
import { ThemeContext } from "../ContextApi/ModeContext";

export const UseRef = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    const inputRef = useRef();
    const bodyref = useRef();

    const onChangeBorder = () =>{
        inputRef.current.focus();
        inputRef.current.style.color = inputRef.current.value
        bodyref.current.style.backgroundColor = inputRef.current.value
    }

  return (
    <div ref={bodyref} style={{border:"2px solid white", width:"100%", height:"97vh",background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff",}}>
    <div className='main'>
    <h1>Current Theme: {theme}</h1>
        <input ref={inputRef} type="text" />
        <button onClick={onChangeBorder}>Change color</button>
        <button onClick={toggleTheme}>{theme === "light" ? "dark Mode" : "light Mode"}</button>
    </div>
    </div>
  )
}
