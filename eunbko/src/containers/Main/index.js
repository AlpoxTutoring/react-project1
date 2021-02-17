import React from 'react';
import styled from 'styled-components';

const Positioner = styled.div`
height: 100vh;

`;

const MainWrapper = styled.div`
padding-top: 50%;

  position: absolute;
  right: 50%;

`

export function MainContainer() {
  return (
  <Positioner>
  <MainWrapper>
  메인페이지입니다
  </MainWrapper>
  </Positioner>);
}
