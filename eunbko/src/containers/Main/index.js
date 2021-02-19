import React from 'react';
import styled from 'styled-components';

const posts = [{ id: 1 }, { id: 2 }, { id: 3 }];

export function MainContainer() {
	const postList = posts.map((post) => (
		<div key={posts.id}>asdf</div>
	));

  return (
    <Positioner>
      <MainWrapper>메인페이지입니다</MainWrapper>

      {postList}
    </Positioner>
  );
}

const Positioner = styled.div`
  height: 100vh;
`;

const MainWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
