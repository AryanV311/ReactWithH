import { useEffect, useState } from "react";


export const TodoDate = () => {
    const [timeDate, setDateTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formatttedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
        
            setDateTime(`${formatttedDate} - ${formattedTime}`)
            return () => clearInterval(interval);
          },1000);
      },[])

  return (
    <h2>{timeDate}</h2>
  )
}
