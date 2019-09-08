import styled from 'styled-components/native';
import logo from '../../assets/img/logo.png';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const ShoppingCartContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  top: -8px;
  right: -8px;
  padding: 2px;
  overflow: hidden;
  background: ${colors.primary};
  min-width: 18px;
  min-height: 18px;
  color: #fff;
  font-size: 12px;
  border-radius: 9px;
  text-align: center;
`;
