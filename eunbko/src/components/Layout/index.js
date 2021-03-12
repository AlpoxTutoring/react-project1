import React, { useState } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { HeaderButton } from '../../styles';
import { LoginModal, RegisterModal } from 'containers';

export const Layout = ({ children }) => {
  const user = localStorage.token;
  const [isShow, setIsShow] = useState(false); // 팝업 노출여부
  const [popIdx, setPopIdx] = useState(0); // 로그인,가입팝업 인덱스

  const handlePopup = index => {
    setIsShow(true);
    setPopIdx(index);
  };

  const onRequestClose = () => {
    setIsShow(false);
  };

  const onRequestConfirm = () => {
    setIsShow(false);
  };

  return (
    <LayoutWrapper>
      <HeaderWrapper>
        <HeaderContents>
          <Logo>Mint Camp</Logo>
          {/*{*/}
          {/*	!user && (*/}
          <Spacer />
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
          {/*	)*/}
          {/*}*/}
          {/*{*/}
          {/*	user && <UserProfile src="https://avatars.githubusercontent.com/u/58289110?s=460&u=1c387823d53fe26f38c76f057fca13473fc20f52&v=4"/>*/}
          {/*}*/}
        </HeaderContents>
        <GradientBorder />
      </HeaderWrapper>

      <LayoutContent>{children}</LayoutContent>
      {isShow && popIdx === 0 ? (
        <LoginModal
          isOpen={isShow}
          onRequestClose={onRequestClose}
          onRequestConfirm={onRequestConfirm}
        />
      ) : (
        <RegisterModal
          isOpen={isShow}
          onRequestClose={onRequestClose}
          onRequestConfirm={onRequestConfirm}
        />
      )}
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const LayoutContent = styled.div`
  margin-top: 55px;
  padding: 10px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

const HeaderContents = styled.div`
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
`;

// 중간 여백
const Spacer = styled.div`
  flex-grow: 1;
`;

const ButtonWrapper = styled.div`
  flex-grow: 1;
`;

const Logo = styled.h1`
  font-size: 22px;
  font-weight: 400;
  color: ${oc.teal[7]};
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
  height: 3px;
  background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;

const Button = styled.button`
  & + & {
    margin-left: 6px;
  }
`;

const UserProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
