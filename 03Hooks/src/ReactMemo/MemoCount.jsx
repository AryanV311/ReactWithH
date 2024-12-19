/* eslint-disable react/display-name */
import { memo, useRef } from "react"



//? Here we wrap the function using memo now its cont not increse when parent count increase
export const MemoCount = memo( () => {
    const renderCount = useRef(0)
    console.log(renderCount);

  return (
    <div>
        <p>Memo Count:{renderCount.current++} time(s)</p>
    </div>
  );
});
