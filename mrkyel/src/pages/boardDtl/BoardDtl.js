import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const BoardDtl = () => {
  return (
    <>
      <BoardWrapper>
        <h1>제목을 쓸 것</h1>
        <label>제목?</label>
        <div>
          <input placeholder="ㄹㅇ 제목을 입력할곳?" />
        </div>
      </BoardWrapper>
    </>
  );
};

export default BoardDtl;

const BoardWrapper = styled.div`
  height: 600px;
  width: 1200px;
  border: 2px solid lightskyblue;
  padding: 5px;
  margin: 0 auto;
  margin-top: 50px;
`;
