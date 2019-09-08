import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAmount,
  ProductAmountText,
  AddButton,
  AddButtonText,
} from './styles';
import api from '../../services/api';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setLoading(false);
      setProducts(data);
    }
    loadProducts();
  }, []);

  const renderProduct = ({ item }) => {
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddButton onPress={() => {}}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#fff" size={24} />
            <ProductAmountText>0</ProductAmountText>
          </ProductAmount>
          <AddButtonText>Add To Cart</AddButtonText>
        </AddButton>
      </Product>
    );
  };
  return (
    <Container>
      {loading && <ActivityIndicator />}
      <FlatList
        horizontal
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
    </Container>
  );
}
