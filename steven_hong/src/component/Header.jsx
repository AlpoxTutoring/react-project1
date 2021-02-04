/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

import { useState } from 'react';
import Login from './LoginModal';
import Modal from './Modal';
const headerStyle = css`
  position: fixed;
  width: 100%;
  height: 200px;
  top: 0;
  background-color: hotpink;
  box-shadow: 5px 5px 5px 5px;
`;

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    console.log(showModal);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div style={headerStyle}>
      <div className="center">dsasd</div>
      <div className="right">
        <button onClick={openModal}>Modal Open</button>
        {showModal && (
          <Modal visible={showModal} closable={true} maskClosable={true} onClose={closeModal}>
            Hello
          </Modal>
        )}

        {/* <Login view={showModal} close={closeModal} /> */}
      </div>
    </div>
  );
};

export default Header;
