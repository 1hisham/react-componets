import React, { useState } from 'react'
import styled from 'styled-components';


export const TimeLine = () => {
    const [width, setWidth] = useState(0)
    // let [color, setColor] = useState("balck")
    let color = [ "balck", "gray", "black","gray"]

    let cardCount = {
        2021:3,
        2022:2,
        2023:3,
        2024:2
    }
  return (
    <TotalContainer>
        <Lines>
      {Object.entries(cardCount).map(([key, value],index) => {
       
        console.log(key ,value);
       return(
       <> 
       <section>
       <div style={{"font-size" : "10px", "background-color": `${color[index]}`,"width" : `${value * 340}px`}}></div>
       <p></p>
       <span>{key}</span>
       </section>
       </>
       
       )
})}
</Lines>
    </TotalContainer>
  )
}

const TotalContainer = styled.div`

`
const Lines = styled.div`
height: 180px;
display: flex;
width: fit-content;
    div{
        display: inline-block;
        height: 10px;
        background-color: black;
    }
    section{
     height: 160px;
    background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/gotocompany-web/kratos/_next/static/media/line.438b120a.svg);
    background-repeat: repeat;
    background-position: 0;
    background-size: auto;
    bottom: 10px;
    }
`