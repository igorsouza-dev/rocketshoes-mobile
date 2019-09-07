import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Logo, ShoppingCartContainer } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <Logo />
      <ShoppingCartContainer
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >
        <Icon name="shopping-cart" color="#FFF" size={24} />
      </ShoppingCartContainer>
    </Container>
  );
}
