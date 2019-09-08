import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 10px;
  background: #fff;
  border-radius: 4px;
`;
export const ProductList = styled.View``;

export const ProductContainer = styled.View``;

export const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
  margin: 10px;
`;
export const ProductTextContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  margin-left: 10px;
`;
export const ProductTitle = styled.Text`
  font-size: 16px;
`;
export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
export const ProductDeleteButton = styled.TouchableOpacity`
  margin-right: 10px;
`;
export const ProductInfo = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProductActions = styled.View`
  flex-direction: row;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;
export const ProductFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #e6e6e6;
  border-radius: 4px;
  margin: 20px;
`;
export const ProductActionButton = styled.TouchableOpacity`
  margin: 5px;
`;

export const ProductAmount = styled.TextInput`
  background: #fff;
  padding: 5px;
  width: 60px;
  text-align: center;
  border-radius: 4px;
`;
export const ProductSubtotal = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const ProductSubtotalText = styled.Text`
  font-weight: bold;
  font-size: 21px;
`;
