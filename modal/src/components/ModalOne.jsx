import React from 'react';
import styles from './ModalOne.module.css';

const ModalOne = ({ setModalOpen }) => {
  // 모달 끄기 x 버튼 onClick 이벤트 핸들러
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={closeModal}>
        X
      </button>
      <h2 className={styles.title}>Mini Modal Modal</h2>
      <hr />
      <p className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique porro cum enim sunt
        nostrum qui accusamus. Praesentium voluptas beatae hic, quaerat nulla architecto vel
        assumenda deserunt quidem dolores, sequi laborum!
      </p>
    </div>
  );
};

export default ModalOne;
