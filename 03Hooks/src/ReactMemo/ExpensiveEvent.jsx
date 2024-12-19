/* eslint-disable react/display-name */
import { useMemo } from "react";


export const ExpensiveEvent =  () => {

    const sum = () => {
        console.log("calculating sum ...");
        let i =0;
        for(i=0;i<=1000000000; i++){
            i = i + 1;
        }
        return i;
    };

    const total = useMemo(() => {
       return sum();
    },[])

    // const total = sum();

  return (
    <div>
        <p>total:{total}</p>
    </div>
  );
}
