import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const SettingButton = styled(Button)`
  background-color: ${(props) => (props.name === 'setting' ? '#c2ddff' : 'white')};
`;

const SettingCard = (props) => {
  return (
    <>
      <SettingButton name={props.name}>Click Me !</SettingButton>
    </>
  );
};

export default SettingCard;
