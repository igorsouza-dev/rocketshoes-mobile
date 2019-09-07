import React, { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';

import { Container, Product, ProductImage } from './styles';
import api from '../../services/api';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  const renderProduct = ({ item }) => {
    return (
      <Product key={item.id}>
        <Text style={{ color: '#fff' }}>{item.title}</Text>
      </Product>
    );
  };
  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
    </Container>
  );
}
