import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  LogoContainer,
  ShoppingCartContainer,
  ItemCount,
} from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);
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
        <ItemCount>{cartSize}</ItemCount>
      </ShoppingCartContainer>
    </Container>
  );
}
