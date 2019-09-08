import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  LogoContainer,
  ShoppingCartContainer,
  ItemCount,
} from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <LogoContainer
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Logo />
      </LogoContainer>
      <ShoppingCartContainer
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>0</ItemCount>
      </ShoppingCartContainer>
    </Container>
  );
}
