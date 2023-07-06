import styled from 'styled-components';

export const Cards = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  box-shadow: 5px 5px gray;
  margin: 50px auto;
  text-align: center;
  width: ${(props) => (props.className === 'blue' ? '500px' : '700px')};
  background-color: ${(props) => (props.name === 'mini' ? '#eaf0fd' : '#fdebf7')};
`;

export const Button = styled.button`
  width: 90px;
  height: 28px;
  border-radius: 5px;
  font-weight: bold;
  margin: 10px auto;
  &:hover {
    background-color: ${'transparent'};
  }
  &:active {
    background-color: ${'#d0cdd6'};
  }
`;

export const BlueButton1 = styled(Button)`
  background-color: #ffffff;
  margin-right: 20px;
`;

export const BlueButton2 = styled(Button)`
  background-color: #ffffff;
`;

export const PinkButton1 = styled(Button)`
  background-color: #f1cbe5;
  margin-right: 20px;
`;
export const PinkButton2 = styled(Button)`
  background-color: #c5d7fe;
  margin-right: 20px;
`;
export const PinkButton3 = styled(Button)`
  background-color: #adddc5;
  margin-right: 20px;
`;
export const PinkButton4 = styled(Button)`
  background-color: #d5cdfb;
`;
