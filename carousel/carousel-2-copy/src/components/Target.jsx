
import styled from 'styled-components';
import { ReactSVG } from "react-svg";
import battaryicon from "./../svgs/battery.svg"
// import { MdOutlineBatteryChargingFull } from "react-icons/md"
import React from 'react'

export const Target = () => {
  return (
   <>
   <TargetMain>
    <SvgContainer>
   <img src={battaryicon} />
    </SvgContainer>
    <TargetText>
       <span>Target 1: Transisi 100% kendaraan di platform Gojek ke kendaraan listrik (EV)</span>
    </TargetText>
   </TargetMain>
   </>
  )
}

const TargetMain = styled.div`
display: flex;
align-items: center;
background-color: #1dac70e6;
max-width: 260px;
padding: 0.50em 1em;
border-radius: 8px;
`
const SvgContainer = styled.div`
img{
  width: 32px;
  /* height: 32px; */
}
width: 60px;
height: 60px;
display: flex;
border-radius: 50%;
background-color: #198f5e;
padding: 0.25em 1em;
`
const TargetText = styled.div`
span{
  font-size: 11px;
  color: #ffffff;
}
padding: 0.25em 1em;
`