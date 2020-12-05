import React from 'react';
import {
    Image,
    View,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
  } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

import {
    Container,
    Title,
    ForgotPassword,
    ForgotPasswordText,
    CreateAccountButton,
    CreateAccountButtonText,
  } from './styles';


const SignIn: React.FC = () => {
    return (
        <>
         <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
        <Container>
          <Image source={logoImg} />

          <View>
            <Title>Faça seu Login</Title>
          </View>


            <Input name="email" icon="mail" placeholder=""/>
            <Input name="password" icon="lock" placeholder=""/>

          <Button onPress={() => {console.log('aee');}}>Entrar</Button>
          <Button onPress={() => console.log('Deu')}>Entrar</Button>

            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => {}}>
        <Icon name="log-in" size={20} color="#ff9000" />

        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>

        </>
      );
};

export default SignIn;
