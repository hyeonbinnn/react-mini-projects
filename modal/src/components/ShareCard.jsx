import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ShareButton1 = styled(Button)`
  background-color: pink;
  margin-right: 20px;
`;
const ShareButton2 = styled(Button)`
  background-color: #f58093;
  margin-right: 20px;
`;
const ShareButton3 = styled(Button)`
  background-color: #8bc4fe;
  margin-right: 20px;
`;
const ShareButton4 = styled(Button)`
  background-color: #499be7;
`;

const ShareCard = () => {
  return (
    <>
      <ShareButton1>Instagram</ShareButton1>
      <ShareButton2>YouTube</ShareButton2>
      <ShareButton3>Twitter</ShareButton3>
      <ShareButton4>FaceBook</ShareButton4>
    </>
  );
};

export default ShareCard;
