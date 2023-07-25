import React, { useState } from 'react'
import { Totalcard } from './Totalcard'
import { TimeLine } from '../components/TimeLine'
import styled from 'styled-components';



export const TotalContainer = () => {
  const [movement, setMovement] = useState(0)
  let [count,setCount] = useState(1)
  console.log(count,"count");
  
  const leftClickHandler = () => {
    if(count == 1){
      return
    }
      setCount(count-1)
      setMovement((-340*count)-40)
    
  }
  const rightClickHandler = () => {
    if(count == 5){
      return
    }
    if(count == 2){
      setMovement((-300))
    }
    if(movement == 0){
      setMovement(-15)
    }else{
      setCount(count+1)
      setMovement((-340*count))
    }
  }
  console.log(movement);
  return (
    <MainContainer>
      <div style={{"transform": `translateX(${movement}px)`}}>
    <CardWrapper>
      <Totalcard/>
      <Totalcard/>
      <Totalcard/>
      <Totalcard/>
      <Totalcard/>
      <Totalcard/>
      <Totalcard/>
      <Totalcard/>
      <Totalcard/>
      <Totalcard/>
    </CardWrapper>

      <TimeLine />
    </div>
    <Button>
    <button onClick={leftClickHandler}>left</button>
    <button onClick={rightClickHandler}>right</button>
    </Button>
    </MainContainer>

  )
}

const MainContainer = styled.div`
position: relative;

`
const CardWrapper = styled.div`
display: inline-flex;
overflow-x: scroll;


`
const Button = styled.div`

display: flex;
width: 100%;
justify-content: center;
gap: 10px;
position: absolute;
bottom:200px;
`