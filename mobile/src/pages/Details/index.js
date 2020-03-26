import React from 'react';
import { Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import {
  Container, 
  Header, 
  Logo,
  Button,
  Incident,
  IncidentProperty,
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText
} from './styles';

function Details() {
  const navigation = useNavigation()
  const message = 'Olá Jasntuscara, estou entrando em contato, pois gostaria de ajudar no caso do "Jogador de inhasso" com o valor de R$ 120,00'

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Jogador de Inhasso',
      recipients: ['jpalvesl101@gmail.com'],
      body: message
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=+5583986042067&text=${message}`)
  }

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Button onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E02041" />
        </Button>
      </Header>

      <Incident>
        <IncidentProperty>ONG:</IncidentProperty>
        <IncidentValue>APAD</IncidentValue>

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>JOGADOR DE INHASSO</IncidentValue>

        <IncidentProperty>VALOR</IncidentProperty>
        <IncidentValue>R$ 120,00</IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o Dia</HeroTitle>
        <HeroTitle>Seja o herói nesse caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>WhatsApp</ActionText>
          </Action>


          <Action onPress={sendMail}>
            <ActionText>Email</ActionText>
          </Action>

        </Actions>
      </ContactBox>
    </Container>
  )
}

export default Details;
