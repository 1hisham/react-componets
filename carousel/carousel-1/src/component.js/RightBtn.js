import React from "react"
import Rightsvg from"./../assets/RightBtn.svg"

function RightBtn(props){
    return(
        <>
        <div className="right-btn absolute right-[0%] top-[50%] cursor-pointer" onClick={props.onclick}>
            <img src={Rightsvg}/>
        </div>
        </>

    )
}
export default RightBtn
