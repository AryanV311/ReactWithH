import { useEffect, useState } from "react";
import { data } from "./constant";
import "./imageSlider.css";

export const ImageSlider = () => {
  const [imageIndex, setimageIndex] = useState(0);

  const handlenextIndex = () => {
    setimageIndex((imageIndex + 1) % data.length);
  };

  const handlePreviuosIndex = () => {
    imageIndex <= 0
      ? setimageIndex(data.length - 1)
      : setimageIndex(imageIndex - 1);
  };


  //? now image will automatic slide after 3s
  useEffect(() => {
    let autoSlider = setInterval(() => {
      handlenextIndex()
    },3000)

    return () => clearInterval(autoSlider)
  },[imageIndex])

  return (

    /* this is also the Right method, but we see in the network im getting img call again and again */ 

    // <div className="main">
    //     <h1>Image Slider</h1>
    //     <div className="slider">
    //     <div className="prev-button button">
    //         <button onClick={handlePreviuosIndex}>Previous</button>
    //     </div>
    //     <div className="image-conatiner">
    //         <img src={data[imageIndex]} alt="" height="400px" width="600px" />
    //     </div>
    //     <div className="next-button button">
    //         <button onClick={handlenextIndex}>Next</button>
    //     </div>
    //     </div>
    // </div>

    //? Now we optimize this

    <div className="main">
      <h1>Image Slider</h1>
      <div className="slider">
        <div className="prev-button button">
          <button onClick={handlePreviuosIndex}>Previous</button>
        </div>
          {
            data.map((url, i) => {
              return(
                <div key={url} className={`image-container ${imageIndex === i ? "block":"hidden"}`}>
                <img  src={url} alt="" height="400px" width="600px"   />
                </div>
              )
            })
          }
        <div className="next-button button">
          <button onClick={handlenextIndex}>Next</button>
        </div>
      </div>
    </div>
  );
};
