import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import ModalOne from './ModalOne';
import { useState } from 'react';

const BlueButton = styled(Button)`
  background-color: ${(props) => (props.name === 'blueCard' ? '#ffffff' : '#fed2d2')};
`;

// 모달창 페이지
const BlueCard = (props) => {
  // 모달창 보여주는 상태
  const [modalOpen, setModalOpen] = useState(false);
  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <BlueButton name={props.name} onClick={showModal}>
        Click Me !
      </BlueButton>
      {modalOpen && <ModalOne setModalOpen={setModalOpen} />}
    </>
  );
};
export default BlueCard;
