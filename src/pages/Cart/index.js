import React from 'react';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

import { formatPrice } from '../../util/format';
import {
  Container,
  ProductList,
  ProductContainer,
  ProductTextContainer,
  ProductPrice,
  ProductImage,
  ProductTitle,
  ProductInfo,
  ProductDeleteButton,
  ProductActions,
  ProductActionButton,
  ProductAmount,
  ProductFooter,
  ProductSubtotal,
  ProductSubtotalText,
  TotalContainer,
  TotalLabel,
  TotalText,
  CheckoutButton,
  CheckoutButtonText,
  ProductListContainer,
  PageFooter,
} from './styles';

export default function Cart() {
  const cart = [1, 2, 3];

  const renderProduct = product => {
    return (
      <ProductContainer key={product}>
        <ProductInfo>
          <ProductImage
            source={{
              uri:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
            }}
          />
          <ProductTextContainer>
            <ProductTitle>Tênis fuleiro</ProductTitle>
            <ProductPrice>R$231,22</ProductPrice>
          </ProductTextContainer>
          <ProductDeleteButton>
            <Icon name="delete-forever" color={colors.primary} size={26} />
          </ProductDeleteButton>
        </ProductInfo>
        <ProductFooter>
          <ProductActions>
            <ProductActionButton onPress={() => {}}>
              <Icon
                name="remove-circle-outline"
                color={colors.primary}
                size={24}
              />
            </ProductActionButton>
            <ProductAmount value="1" />
            <ProductActionButton onPress={() => {}}>
              <Icon
                name="add-circle-outline"
                color={colors.primary}
                size={24}
              />
            </ProductActionButton>
          </ProductActions>
          <ProductSubtotal>
            <ProductSubtotalText>R$121,23</ProductSubtotalText>
          </ProductSubtotal>
        </ProductFooter>
      </ProductContainer>
    );
  };

  return (
    <Container>
      <ProductListContainer>
        <ProductList
          data={cart}
          keyExtractor={item => String(item)}
          renderItem={renderProduct}
        />
      </ProductListContainer>
      <PageFooter>
        <TotalContainer>
          <TotalLabel>Total</TotalLabel>
          <TotalText>R$123,12</TotalText>
        </TotalContainer>
        <CheckoutButton>
          <CheckoutButtonText>Checkout</CheckoutButtonText>
        </CheckoutButton>
      </PageFooter>
    </Container>
  );
}
