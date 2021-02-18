import React from 'react';
import { Footer, Header } from '../../components';
import { HeaderButton } from '../../styles';
import { BoardContainer } from '../../containers/Board';

export function BoardPage() {
  return (
    <>
      <Header>헤더입니다ㅏ아</Header>
      <BoardContainer />
      <Footer />
    </>
  );
}
