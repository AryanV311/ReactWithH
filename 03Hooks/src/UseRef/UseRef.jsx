import { useRef } from "react";
import "./Useref.css"

export const UseRef = () => {

    const inputRef = useRef();
    const bodyref = useRef();

    const onChangeBorder = () =>{
        inputRef.current.focus();
        inputRef.current.style.color = inputRef.current.value
        bodyref.current.style.backgroundColor = inputRef.current.value
    }

  return (
    <div ref={bodyref} style={{border:"2px solid white", width:"100%", height:"97vh"}}>
    <div className='main'>
        <input ref={inputRef} type="text" />
        <button onClick={onChangeBorder}>Change color</button>
    </div>
    </div>
  )
}
