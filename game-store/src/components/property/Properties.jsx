import React from 'react';
import styled from 'styled-components';

const Property = styled.tr`
display: flex;
flex-direction: row;
width: 100%;
`;

const PropertyName = styled.td`
font-size: 18px;
line-height: 27px;
width: 78px;
color: rgba(6, 34, 37, 0.5);
`;

const PropertyValue = styled.td`
font-size: 18px;
line-height: 27px;
color: #062225;
`;

const Properties = ({props}) => {
  const defaultInfo = [
    {name:'Type', value: props.type},
    {name:'Gender', value: props.gender},
    {name:'Status', value: props.status},
  ];

  return (
    <table>
      {defaultInfo.map((item) => (
        <Property>
          <PropertyName>{item.name}</PropertyName>
          <PropertyValue>{item.value || '-'}</PropertyValue>
        </Property>
      ))}
    </table>
  )
}

export default Properties
