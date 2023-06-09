import styled from 'styled-components';
import { darken, lighten } from 'polished';

const Button = styled.button`
  width: 90px;
  height: 28px;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: ${lighten(0, 'transparent')};
  }
  &:active {
    background-color: ${darken(0, '#cfccd7')};
  }
`;
export default Button;
