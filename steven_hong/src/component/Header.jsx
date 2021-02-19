/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useState } from 'react';
import Login from './LoginModal';
import Modal from './Modal';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
const headerStyle = css`
  position: fixed;
  width: 100%;
  height: 100px;
  top: 0;
  background-color: hotpink;
  box-shadow: 1px 1px gray;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const menuStyle = css`
  color: white;
  font-size: 20px;
  font-weight: 800;
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
    <>
      <nav css={headerStyle}>
        <ul
          css={css`
            width: 70%;
            display: flex;
            justify-content: space-around;
          `}>
          <Link css={menuStyle} to="/about">
            About
          </Link>
          <Link css={menuStyle} to="/about">
            포트폴리오
          </Link>
          <Link css={menuStyle} to="/about">
            게시판1
          </Link>
          <Link css={menuStyle} to="/about">
            게시판2
          </Link>
          <Link css={menuStyle} to="/about">
            게시판3
          </Link>
        </ul>
        <div className="right">
          <button
            css={css`
              margin-right: 30px;
            `}
            onClick={openModal}>
            Modal Open
          </button>
          {showModal && (
            <Modal visible={showModal} closable={true} maskClosable={true} onClose={closeModal}>
              Hello
            </Modal>
          )}
          {/* <Login view={showModal} close={closeModal} /> */}
        </div>
      </nav>
      <div className="center">헤더</div>
    </>
  );
};

export default Header;
