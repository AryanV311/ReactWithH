import { useState } from 'react'

function ChangeText() {

    let[text, setText] = useState("Enter text Here");

    let changeToUpp = () => {
        // console.log(text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    let texthandler = (e) => {
        setText(e.target.value)
    }

  return (
    <>
        <h1>Lets try to change text</h1>
        <textarea className='w-full my-3 rounded px-2 mx-1 border-black h-3' value={text} onChange={texthandler}></textarea>
        <button className='text-white bg-blue-700' onClick={changeToUpp}>convert to uppercase</button>

        <div className="container my-2">
            <h2 className='text-black'>Text summary</h2>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <h2 className='text-black'>Preview</h2>
            <p>{text}</p>
        </div>


    </>
  )
}

export default ChangeText