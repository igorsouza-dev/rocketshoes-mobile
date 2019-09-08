import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        <Icon name="shopping-basket" color="#FFF" size={24} />
      </ShoppingCartContainer>
    </Container>
  );
}
