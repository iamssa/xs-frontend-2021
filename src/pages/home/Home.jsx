import React from 'react';
import styled from 'styled-components';
import './Home.css';
import Title from '../../components/title/Title';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const Button = styled.button`
    font: inherit;
    font-weight: 900;
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    border: 3px solid #be1ff5;
    border-radius: 8px;
    padding: 10px 24px;
    margin-right: 16px;
    width: 156px;
    cursor: pointer;
  `;

  const navigate = useNavigate();

  return (
    <div className="Home">
      <div className="Home-background">
        <div className="Home-container">
          <Title>
            Add Rick
            <br /> to your team
          </Title>
          <p>Or Morty or someone you want</p>
          <span>
            <Button
              color="white"
              background="#be1ff5"
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
            <Button
              color="#be1ff5"
              background="transparent"
              onClick={() => navigate('/catalog')}
            >
              Catalog
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
