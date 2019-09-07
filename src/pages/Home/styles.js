import styled from 'styled-components/native';

export const Container = styled.View``;

export const ProductContainer = styled.View`
  flex-direction: row;
`;
export const Product = styled.View`
  padding: 10px;
  margin: 5px;
  border-radius: 4px;
  background: #fff;
  max-width: 220px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
`;

export const ProductPrice = styled.Text``;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  padding: 10px;
  align-content: center;
  justify-content: center;
  color: #fff;
`;
