import React from 'react';
import styled from 'styled-components';

export function BoardContainer() {
  return (
    <Positioner>
      <BoardWrapper>보드영역입니다.</BoardWrapper>
    </Positioner>
  );
}

const Positioner = styled.div`
  height: 100vh;
`;

const BoardWrapper = styled.div`
  padding-top: 50%;
  position: absolute;
  right: 50%;
`;
