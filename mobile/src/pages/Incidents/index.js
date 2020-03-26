import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import { 
  Container, 
  Header,
  Logo, 
  HeaderText, 
  HeaderTextBold, 
  Title, 
  Description,
  IncidentList,
  Incident,
  IncidentProperty,
  IncidentValue,
  DetailsButton,
  DetailsButtonText,
} from './styles';

function Incidents() {
  const navigation = useNavigation()

  function navigateToDetail() {
    navigation.navigate('Details')
  }

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>0 casos</HeaderTextBold>.
        </HeaderText>
      </Header>

      <Title>Bem-Vindo</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>
    
      <IncidentList
        data={[1, 2, 3]}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <Incident>

            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>APAD</IncidentValue>

            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>JOGADOR DE INHASSO</IncidentValue>

            <IncidentProperty>VALOR</IncidentProperty>
            <IncidentValue>R$ 120,00</IncidentValue>

            <DetailsButton onPress={navigateToDetail}>
              <DetailsButtonText>Ver detalhes</DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </DetailsButton>
        </Incident>
        )}
      />
    </Container>
  )
}

export default Incidents;
