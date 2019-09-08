import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  margin: 10px;
  background: #fff;
  border-radius: 4px;
  flex: 1;
`;
export const ProductList = styled.FlatList`
  margin-bottom: 150px;
`;
export const ProductListContainer = styled.View`
  flex: 1;
`;

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

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
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
  text-align: right;
`;

export const TotalContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const TotalLabel = styled.Text`
  color: #ccc;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
`;

export const TotalText = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 24px;
`;

export const CheckoutButton = styled.TouchableOpacity`
  background: ${colors.primary};
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  align-self: stretch;
`;

export const CheckoutButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

export const PageFooter = styled.View`
  position: absolute;
  bottom: 10px;
  background: #fff;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top-color: #e6e6e6;
  border-top-width: 2px;
`;
