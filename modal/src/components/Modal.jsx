import React from 'react';
import * as S from './Modal.style';

const Modal = (onClose) => {
  // 모달 끄기 x 버튼 onClick 이벤트 핸들러
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <S.Container>
      <S.Close>X</S.Close>
      <S.Title>Mini Modal Modal</S.Title>
      <hr />
      <S.Content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique porro cum enim sunt
        nostrum qui accusamus. Praesentium voluptas beatae hic, quaerat nulla architecto vel
        assumenda deserunt quidem dolores, sequi laborum!
      </S.Content>
    </S.Container>
  );
};

export default Modal;
