import React from 'react';
import MainMenu from '../main-menu/MainMenu';
import styled from 'styled-components';

const HeadWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 40px 60px;

font-size: 18px;
line-height: 25px;
`;

const HeadLogo = styled.div`
font-weight: 800;
cursor: pointer;
`

const Head = () => {
  return (
    <HeadWrapper>
      <HeadLogo>Logo</HeadLogo>
      <MainMenu/>
    </HeadWrapper>
  )
};

export default Head;
