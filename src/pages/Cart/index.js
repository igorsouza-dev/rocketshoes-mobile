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
} from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductList>
        <ProductContainer>
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
      </ProductList>
    </Container>
  );
}
