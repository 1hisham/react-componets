import React from 'react'
import styled from 'styled-components';
import { Target } from '../components/Target';
import { TextCard } from '../components/TextCard';

export const Totalcard = () => {
  return (
    <>
    <FullCard>
    <MainCard>
      <Target />      
      <TextCard />
    </MainCard>
    <Triangle></Triangle>
    <Connection></Connection>
    </FullCard>
    </>
  )
}
const MainCard = styled.div`
padding: 20px ;
background-color: #1a9461;

`
const FullCard = styled.div`
display: flex;
justify-content: end;
align-items: center;
flex-direction: column;
width: 340px;
height: 530px;

/* background-color: #4ec24e; */

`
const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 30px solid #1a9461;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
`
const Connection = styled.div`
  &{
   margin-top: 10px;
  }
  &::after{
    margin-left: auto;
    margin-right: auto;
    width: 0;
    flex: 1 1 0%;
    display: block;
    content: "";
    background-color: #0c3;
    width: 2px;
    height: 60px;
  }
  &::before{
    border-radius: 9999px;
    display: block;
    content: "";
    border: 2px solid #0c3;
    width: 14px;
    height: 14px;

  }
`