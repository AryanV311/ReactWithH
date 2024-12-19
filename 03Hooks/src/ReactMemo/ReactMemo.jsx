import { useState } from "react"
import { MemoCount } from "./MemoCount";


export const ReactMemo = () => {
    const [count, setCount] = useState(0);
    
  return (
   <div className="container">
    <p>{count}</p>
    <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    <p>here when i click then it will aslo increase the memoCount that is other component so thats why we use React Memo.</p>
    <MemoCount />
   </div>
  )
}
