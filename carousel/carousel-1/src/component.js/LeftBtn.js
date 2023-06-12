
import React from "react";
import leftsvg from "./../assets/LeftBtn.svg";

function LeftBtn(props) {
  return (
    <>
      <div className="left-btn absolute left-[0%] top-[50%] cursor-pointer" onClick={props.onclick}>
        <img src={leftsvg} />
      </div>
    </>
  );
}
export default LeftBtn;
