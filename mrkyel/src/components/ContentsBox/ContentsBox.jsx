import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ContentsBoxStyle = css`
  background-color: gray;
  display: flex;
  justify-content: space-between;
  flex-flow: column wrap;
  flex-direction: initial;
  padding: 0 80px;
  margin: 0 300px;
  &:hover {
    color: white;
  }
`;

const ContentsBoxWrapper = styled.div`
  width: 320px;
  height: 200px;
  margin: 10px;
  background-color: #cad5da;
`;

const Dummy = [];

for (let i = 0; i < 24; i++) {
  Dummy.push({
    id: `${i}`,
    category: `자유게시판${i}`,
    title: `리액트를 잘 하고 싶은 개발자${i}`,
    nickName: `라일락꽃향기${i}`,
    viewCount: 1204,
    createDate: new Date(),
  });
}

const ContentsBox = () => {
  return (
    <div css={ContentsBoxStyle}>
      {Dummy.map(el => (
        <ContentsBoxWrapper key={el.id}>
          {el.category} {el.viewCount.toLocaleString()}
        </ContentsBoxWrapper>
      ))}
    </div>
  );
};

export default ContentsBox;
