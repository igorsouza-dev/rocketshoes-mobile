import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

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
  font-size: 16px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0;
  margin-top: auto;
  font-size: 20px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  color: #fff;
  border-radius: 4px;
  margin-top: auto;
  flex-direction: row;
`;
export const ProductAmount = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${darken(0.03, colors.primary)};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;
export const ProductAmountText = styled.Text`
  font-weight: bold;
  color: #fff;
  margin: 0px 4px 0px 10px;
`;
export const AddButtonText = styled.Text`
  padding: 10px;
  font-weight: bold;
  color: #fff;
  flex: 1;
  text-transform: uppercase;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
