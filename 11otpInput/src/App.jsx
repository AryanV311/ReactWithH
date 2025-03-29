
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const otp_count = 5;
  const [inpputArr, setInputArr] = useState(new Array(otp_count).fill(""))

  const inputRef = useRef([]);

  const handleInputChange = (value, index) => {
    if(isNaN(value)) return;

    const newalue = value.trim()
    const newArr = [...inpputArr];
    newArr[index] = newalue.slice(-1);
    setInputArr(newArr);

    newalue && inputRef.current[index + 1]?.focus()
  }

  const handleKeyDown = (e, index) => {
    if(!e.target.value && e.key === "Backspace"){
      inputRef.current[index -1]?.focus();
    }
  }

  useEffect(() => {
    inputRef.current[0]?.focus();
  },[])

  return (
    <>
    <div className='App'>
      <h1>Otp Input Validation </h1>

      {
        inpputArr.map((input, index) => {
          return (
            <input className='input-box' key={index} type='text'
            value={inpputArr[index]}
            onChange={(e) => handleInputChange(e.target.value,index)}
            ref={(input) => (inputRef.current[index] = input) }

            onKeyDown={(e) => handleKeyDown(e, index)}
            />
          )
        })
      }
    </div>
    </>
  )
}

export default App
