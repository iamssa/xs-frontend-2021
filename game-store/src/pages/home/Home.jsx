import React from 'react';
import './Home.css'
import Title from '../../components/title/Title';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const HomeScreen = () => {

  const navigate = useNavigate();

  const Button = styled.button`
  font: inherit;
  font-weight: 900;
  background: ${p => p.transparent ? 'transparent' : '#BE1FF5'};
  color: ${p => p.white ? 'white' : '#BE1FF5'};
  border: 3px solid #BE1FF5;
  border-radius: 8px;
  padding: 10px 24px;
  margin-right: 16px;
  width: 156px;
  cursor: pointer;
`;

  return (
    <div className="Home">
      <div className="Home-background">
        <div className="Home-container">
          <Title>Add Rick<br/> to your team</Title>
          <p>Or Morty or someone you want</p>
          <span>
          <Button white onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button transparent onClick={() => navigate('/catalog')}>
            Catalog
          </Button>
        </span>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
