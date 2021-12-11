import React from 'react';
import styled from 'styled-components';
import MainMenu from '../main-menu/MainMenu';
import './Head.css';

const Head = () => {
  const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 60px;
    font-size: 18px;
    line-height: 25px;
  `;
  
  return (
    <Title>
      <div className="Head-logo">Logo</div>
      <MainMenu />
    </Title>
  );
};

export default Head;
