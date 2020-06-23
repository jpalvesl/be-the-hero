import styled from 'styled-components/native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image``;

export const Button = styled.TouchableOpacity``;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${colors.primary.box};
  margin-bottom: 16px;
  margin-top: 48px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: ${colors.primary.property};
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: ${colors.primary.value};
`;

export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${colors.primary.box};
  margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${colors.primary.title};
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: ${colors.primary.description};
  margin-top: 16px
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
  background-color: ${colors.primary.firstColor};
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  color: ${colors.primary.actionText};
  font-size: 15px;
  font-weight: bold;
`;
