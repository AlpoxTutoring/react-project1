import React from 'react';
import styled from 'styled-components';

export function Footer() {
  return <Positioner>푸터입니다.</Positioner>;
}

const Positioner = styled.div`
  position: relative;
  padding-bottom: 0;
  p {
    position: absolute;
    right: 50%;
  }
`;
