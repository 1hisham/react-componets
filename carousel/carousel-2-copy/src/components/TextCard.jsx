import React from 'react'
import styled from 'styled-components';
export const TextCard = () => {
  return (
    <MainCard>
        <SubText>
           <p>Mengembangkan bisnis Electrum untuk produksi dan pengadaan kendaraan listrik (EV) roda dua</p>
        </SubText>
        <MainText>
         <p>Membangun kemitraan uji coba EV 2W untuk menemukan model bisnis yang tepat buat produksi kendaraan dan ekosistem baterai</p>
        </MainText>
    </MainCard>
  )
}

const MainCard = styled.div`
display: flex;
flex-direction: column;
gap:10px;
max-width: 260px;
color: white;
    
`
const SubText = styled.div`
    font-size: 14px;
`
const MainText = styled.div`
   p{
       
       line-height: 22px;
   }
    font-size: 16px;
    font-weight: bold;
`