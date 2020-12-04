import React from 'react';
import { Image } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

import { Container, Title } from './styles';


const SignIn: React.FC = () => {
    return (
        <Container>
          <Image source={logoImg} />
          <Title>Faça seu Login</Title>

          <Input name="email" icon="mail" placeholder=""/>
          <Input name="password" icon="lock" placeholder=""/>

          <Button onPress={() => {console.log('aee');}}>Entrar</Button>
        </Container>
      );
};

export default SignIn;
