import styled from 'styled-components/native';
import logo from '../../assets/img/logo.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const ShoppingCartContainer = styled.TouchableOpacity``;
