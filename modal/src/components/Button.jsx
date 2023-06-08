import styled from 'styled-components';
import { darken, lighten } from 'polished';

const Button = styled.button`
  width: 90px;
  height: 28px;
  border-radius: 5px;
  &:hover {
    background-color: ${lighten(0.1, '#ffeda3')};
  }
  &:active {
    background-color: ${darken(0, '#ffe95b')};
  }
`;
export default Button;
