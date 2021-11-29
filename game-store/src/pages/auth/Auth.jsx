import React from 'react';

import './Auth.css'
import Title from '../../components/title/Title';
import FormAuth from '../../components/form-auth/FormAuth';
import ArrowLeft from '../../assets/icons/arrow-left.svg';

const AuthScreen = () => {
  return (
    <div className="Auth">
      <img src={ArrowLeft} alt="arrow-left"/>
      <Title>Authorization</Title>
      <FormAuth/>
    </div>
  )
}

export default AuthScreen
