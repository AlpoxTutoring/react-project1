import React, { useState } from 'react';
import styled from 'styled-components';
import { MainContainer } from '../../containers/Main';
import { Header, Footer, Modal } from '../../components';
import { Button } from '../../lib';
import Portal from '../../components/Portal';
import { LoginPopup } from './LoginPopup';

export function MainPage() {
  const [isShow, setIsShow] = useState(false);
  const handlePopup = () => {
    setIsShow(true);
  };
  const onConfirm = () => {
    console.log('확인');
    setIsShow(false);
  };
  const onCancel = () => {
    console.log('취소');
    setIsShow(false);
  };

  return (
    <>
      <Header>
        <Button color="white" background="#00BFA5" onclick={handlePopup}>
          로그인
        </Button>
        <Button color="black" background="lightgrey">
          회원가입
        </Button>
      </Header>
      <MainContainer />
      <Footer />
      <Portal>
        <Modal
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={isShow}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Modal>
      </Portal>
    </>
  );
}
