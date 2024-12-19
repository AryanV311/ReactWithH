import { useState } from "react"
import { ExpensiveEvent } from "./ExpensiveEvent"


export const UseMemo = () => {
    const [count,setcount] = useState(0);
  return (
    <div>
        <ExpensiveEvent />
        <button onClick={() => setcount(count + 1)}>Re-Render Parents</button>
        <p>Parent Re-Render:{count}</p>
    </div>
  )
}
