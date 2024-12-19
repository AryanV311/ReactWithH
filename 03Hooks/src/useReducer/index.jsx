import { useReducer } from "react"
import "./index.css"

export const ReducerComp = () => {

    // const reducer = (state, action) => {
    //     console.log(state, action);
    //     if(action.type === "INCREMENT"){
    //         return state += 1;
    //     }

    //     if(action.type === "DECREMENT"){
    //        return state -= 1;
    //     }
    // }
    // const [count, dispatch] = useReducer(reducer, 0);

    //* 2nd way

    const initialValue = 0;

    const reducer = (state, action) => {
        console.log(state, action);

        switch (action.type) {
            case "INCREMENT":
                return (state + 1);
            case "DECREMENT":
                var num = 0;
                state > 0 ? (num = state - 1) : (num = 0);
                return num;

            case "RESET":
                return (state = 0)
        }
    }

    const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <div className="container">
        <p>Using useReducer Hooks</p>
        <p>{state}</p>
        <button onClick={() => dispatch({type:"INCREMENT"})}>Increment</button>
        <button onClick={() => dispatch({type:"DECREMENT"})}>Decrement</button>
        <button onClick={() => dispatch({type:"RESET"})}>Reset</button>
    </div>
  )
}
