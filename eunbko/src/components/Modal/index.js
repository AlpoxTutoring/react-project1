import React from 'react';
import styled from 'styled-components';

export const ReactModal = ({
  children,
  isOpen = false,
  onRequestClose = () => {},
  onRequestConfirm = () => {},
}) => {
  console.log('dsfdsdfsdf', isOpen);
  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay onClick={onRequestClose} />

      <ModalWrapper>
        {children}
        <ModalButtonWrapper>
          <ModalButton onClick={onRequestClose}>취소</ModalButton>
          <ModalButton onClick={onRequestConfirm}>확인</ModalButton>
        </ModalButtonWrapper>
      </ModalWrapper>
    </>
  );
};

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 990;

  display: flex;
  flex-direction: column;
`;

export const ModalWrapper = styled.div`
  width: 320px;
  padding: 1.5rem;
  background-color: white;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 991;

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }

  p {
    font-size: 1.15;
  }
`;

const ModalButtonWrapper = styled.div`
  margin-top: auto;
`;

const ModalButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  border-radius: 24px;
  margin-left: 4px;
  margin-right: 4px;

  color: ${props => props.color || 'gray'};
  background: ${props => props.background || 'white'};

  & + & {
    margin-left: 0.5rem;
  }
`;
