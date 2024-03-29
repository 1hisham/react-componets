import React, { useEffect } from "react";
import img1 from "./assets/images/image-1.jpg";
import img2 from "./assets/images/image-2.jpg";
import img3 from "./assets/images/image-3.jpg";
import img4 from "./assets/images/image-4.jpg";
import img5 from "./assets/images/image-5.jpg";
import img6 from "./assets/images/image-6.jpg";
import img7 from "./assets/images/image-7.jpg";
import LeftBtn from "./component.js/LeftBtn";
import RightBtn from "./component.js/RightBtn";
import { useState } from "react";

const imageArray = [img1, img2, img3, img4, img5, img6, img7];

function Carousel() {
  const [length, setLength] = useState(0);

  const LeftClick = () => {
    if (length == 0) {
      setLength((imageArray.length - 1) * 384);
    } else {
      setLength(length - 384);
    }
  };
  function RightClick() {
    if (length == (imageArray.length - 1) * 384) {
      setLength(0);
    } else {
      setLength(length + 384);
    }
  }

  return (
    <>
      <div className="total-container flex align-middle justify-center ">
        <div className="image-main-container overflow-hidden w-96 h-96 relative  ">
          <div
            className="imgae-container flex w-96 h-96 duration-300 "
            style={{ transform: `translateX(-${length}px)` }}
          >
            {imageArray.map((item) => {
              return <img src={item} />;
            })}
          </div>
          <LeftBtn onclick={LeftClick} />
          <RightBtn onclick={RightClick} />
        </div>
      </div>
    </>
  );
}
export default Carousel;
