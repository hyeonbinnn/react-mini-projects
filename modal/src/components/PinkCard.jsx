import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const PinkButton1 = styled(Button)`
  background-color: #f1cbe5;
  margin-right: 20px;
`;
const PinkButton2 = styled(Button)`
  background-color: #c5d7fe;
  margin-right: 20px;
`;
const PinkButton3 = styled(Button)`
  background-color: #adddc5;
  margin-right: 20px;
`;
const PinkButton4 = styled(Button)`
  background-color: #d5cdfb;
`;

const PinkCard = () => {
  return (
    <>
      <PinkButton1>Instagram</PinkButton1>
      <PinkButton2>YouTube</PinkButton2>
      <PinkButton3>Twitter</PinkButton3>
      <PinkButton4>FaceBook</PinkButton4>
    </>
  );
};

export default PinkCard;
