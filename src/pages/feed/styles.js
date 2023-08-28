import styled from 'styled-components';

export const Container = styled.main`
   width: 100%;
   max-width: 80%;
   margin: 0 auto;
   margin-top: 120px;

   display: flex;
   flex-direction: row;
   justify-content: space-between;
`
export const Title = styled.h3`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 700;
   font-size: 32px;
   width: 320px;
   margin-bottom: 20px;
   line-height: 44px;
   color: #ffffff;
`
export const TitleHighLight = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
width: 320px;
margin-bottom: 24px;
line-height: 25px;
color: #ffffff70;
`
export const Column = styled.p`
   flex: ${({flex}) => flex};
   padding-right: 24px;
`
