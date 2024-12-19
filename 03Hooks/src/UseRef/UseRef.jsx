import { useRef } from "react";
import "./Useref.css"

export const UseRef = () => {

    const inputRef = useRef();

    const onChangeBorder = () =>  {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "green";
    }

  return (
    <div className='main'>
        <input ref={inputRef} type="text" />
        <button onClick={onChangeBorder}>Submit</button>
    </div>
  )
}
