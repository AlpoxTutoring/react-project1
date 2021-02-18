import React, { useState } from 'react';
import styled from 'styled-components';
import { MainContainer } from '../../containers/Main';
import { Header, Footer, Modal } from '../../components';
import { HeaderButton } from '../../lib';
import Portal from '../../components/Portal';
import { Modal } from '../../components/Main';

export function MainPage() {
  const [isShow, setIsShow] = useState(false);
  const [popIdx, setPopIdx] = useState(0);

  const handlePopup = index => {
    setIsShow(true);
    setPopIdx(index);
  };
  const onConfirm = () => {
    setIsShow(false);
  };
  const onCancel = () => {
    setIsShow(false);
  };

  return (
    <>
      <Header>
        <HeaderButton
          color="white"
          background="#00BFA5"
          onClick={() => handlePopup(0)}
        >
          로그인
        </HeaderButton>
        <HeaderButton
          color="black"
          background="lightgrey"
          onClick={() => handlePopup(1)}
        >
          회원가입
        </HeaderButton>
      </Header>
      <MainContainer />
      <Footer />

      <Portal>
        {/* <AuthPopup index={popIdx} isShow={isShow}/> */}

        {popIdx === 0 && (
          <Modal
            title="Login"
            confirmText="로그인"
            cancelText="취소"
            onConfirm={onConfirm}
            onCancel={onCancel}
            visible={isShow}
          >
            <span>
              ID&nbsp;&nbsp;&nbsp;&nbsp;
              <input />
            </span>
            <br />
            <span>
              PW&nbsp;&nbsp;
              <input />
            </span>
          </Modal>
        )}

        {popIdx === 1 && (
          <Modal
            title="Join"
            confirmText="가입"
            cancelText="취소"
            onConfirm={onConfirm}
            onCancel={onCancel}
            visible={isShow}
          >
            <span>
              EMAIL&nbsp;&nbsp;&nbsp;&nbsp;
              <input />
            </span>
            <br />
            <span>
              NICKNAME&nbsp;&nbsp;&nbsp;&nbsp;
              <input />
            </span>
            <br />
            <span>
              PW&nbsp;&nbsp;
              <input />
            </span>
          </Modal>
        )}
      </Portal>
    </>
  );
}
