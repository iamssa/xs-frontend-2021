import React from 'react';
import Properties from '../property/Properties';
import styled from 'styled-components';

const CardWrapper = styled.div`
display: flex;
flex-direction: row;
background: #ffffff;
box-shadow: 0 8px 16px rgba(199, 197, 214, 0.25);
border-radius: 12px;
max-width: 640px;
`;

const CardContent = styled.div`
padding: 36px 36px 32px 48px;
width: 100%;
`;

const CardTitle = styled.h2`
font-weight: 800;
font-size: 32px;
line-height: 40px;
`

const CardImage = styled.img`
border-radius: 12px 0 0 12px;
`;

const Card = ({ props }) => {
  return (
    <>
      <CardWrapper>
        <CardImage src={props.image} alt="avatar" />
        <CardContent>
          <CardTitle>{props.name}</CardTitle>
          <Properties props={props} />
        </CardContent>
      </CardWrapper>
    </>
  );
};

export default Card;
