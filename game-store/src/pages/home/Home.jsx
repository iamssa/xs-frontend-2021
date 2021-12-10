import React from 'react';
import Title from '../../components/title/Title';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BgImage from '../../assets/images/background-home.png';

const HomeWrapper = styled.div`
height: fit-content;
font: inherit;
`;

const HomeBackground = styled.div`
display: flex;
min-height: 777px;
background-image: url(${BgImage});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
background: rgba(255, 255, 255, 0.8);
padding-left: 60px;
padding-right: 72px;
`;

const Button = styled.button`
font: inherit;
font-weight: 900;
background: #be1ff5;
color: ${(props) => (props ? 'blue' : 'red')};
border: 3px solid #be1ff5;
border-radius: 8px;
padding: 10px 24px;
margin-right: 16px;
width: 156px;
cursor: pointer;
`;

const Span = styled.span`
margin-top: 64px;
`;

const Paragraph = styled.p`
font-size: 20px;
line-height: 27px;
color: #062225;
max-width: 550px;
margin: 32px 0 0;
`;

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <HomeBackground>
        <HomeContainer>
          <Title mt="204px!important">
            Add Rick
            <br /> to your team
          </Title>
          <Paragraph>Or Morty or someone you want</Paragraph>
          <Span>
            <Button props="red" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button props="blue" onClick={() => navigate('/catalog')}>
              Catalog
            </Button>
          </Span>
        </HomeContainer>
      </HomeBackground>
    </HomeWrapper>
  );
};

export default HomeScreen;
