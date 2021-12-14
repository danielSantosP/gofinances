import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  `;
  
  export const Icon = styled(Feather)`
  font-size: ${RFValue(32)}px;
  `;
  
  export const Footer = styled.View`
  `;
  
  export const Amount = styled.Text`
  font-size: ${RFValue(33)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  `;
  
  export const LastTransaction = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  `;
