import React from 'react';

import Properties from '../property/Properties';
import './Card.css'

const Card = ({props}) => {
  return (
    <>
      <div className="Card">
        <img src={props.image} alt="avatar"/>
        <div className="Card-content">
          <h2>{props.name}</h2>
          <Properties
            props={props}
          />
        </div>
      </div>
    </>
  )
}

export default Card
