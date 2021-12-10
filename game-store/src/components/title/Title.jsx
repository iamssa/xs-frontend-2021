import React from 'react';
import styled from 'styled-components'

const TitleWrapper = styled.h1`
font: inherit;
font-size: 48px;
font-weight: 800;
line-height: 52px;
color: #062225;
margin: 0;
margin-top: 204px!important;
`;

const Title = (props) => {
  return (
    <>
      <TitleWrapper>{props.children}</TitleWrapper>
    </>
  )
}

export default Title;
