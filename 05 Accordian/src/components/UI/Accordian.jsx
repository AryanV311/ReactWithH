import { useEffect, useState } from "react"
import faq from "../../api/faq.json"
import { FAQ } from "../layout/FAQ";

export const Accordian = () => {

    const [data, setData] = useState([]);
    const [activeId, setActiveId] = useState(false);


    useEffect(() => {
        setData(faq)
    },[])

    const haandleToggle = (id) => {
        setActiveId((prevId) => (prevId == id ? false : id))
    }

    console.log(data);
  return (
    <>
         <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data &&
          data.map((curElem) => {
            const { id } = curElem;
            return (
              <FAQ
                key={id}
                curData={curElem}
                isActive={activeId === id}
                onToggle={() => haandleToggle(id)}
              />
            );
          })}
      </ul>
    </>
  )
}
