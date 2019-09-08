import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

import * as CartActions from '../../store/modules/cart/actions';

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
  EmptyCart,
  EmptyCartText,
} from './styles';

export default function Cart() {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
      subtotal: formatPrice(product.price * product.amount),
    }))
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );
  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }
  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }
  const renderProduct = ({ item }) => {
    return (
      <ProductContainer key={item.id}>
        <ProductInfo>
          <ProductImage
            source={{
              uri: item.image,
            }}
          />
          <ProductTextContainer>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.formattedPrice}</ProductPrice>
          </ProductTextContainer>
          <ProductDeleteButton
            onPress={() => dispatch(CartActions.removeFromCart(item.id))}
          >
            <Icon name="delete-forever" color={colors.primary} size={26} />
          </ProductDeleteButton>
        </ProductInfo>
        <ProductFooter>
          <ProductActions>
            <ProductActionButton onPress={() => decrement(item)}>
              <Icon
                name="remove-circle-outline"
                color={colors.primary}
                size={24}
              />
            </ProductActionButton>
            <ProductAmount
              value={String(item.amount)}
              readonly
              editable={false}
            />
            <ProductActionButton onPress={() => increment(item)}>
              <Icon
                name="add-circle-outline"
                color={colors.primary}
                size={24}
              />
            </ProductActionButton>
          </ProductActions>
          <ProductSubtotal>
            <ProductSubtotalText>{item.subtotal}</ProductSubtotalText>
          </ProductSubtotal>
        </ProductFooter>
      </ProductContainer>
    );
  };

  return (
    <Container>
      {products.length > 0 ? (
        <>
          <ProductListContainer>
            <ProductList
              data={products}
              keyExtractor={product => String(product.id)}
              renderItem={renderProduct}
            />
          </ProductListContainer>
          <PageFooter>
            <TotalContainer>
              <TotalLabel>Total</TotalLabel>
              <TotalText>{total}</TotalText>
            </TotalContainer>
            <CheckoutButton>
              <CheckoutButtonText>Checkout</CheckoutButtonText>
            </CheckoutButton>
          </PageFooter>
        </>
      ) : (
        <EmptyCart>
          <Icon name="remove-shopping-cart" size={64} color="#ddd" />
          <EmptyCartText>Your cart is empty.</EmptyCartText>
        </EmptyCart>
      )}
    </Container>
  );
}
