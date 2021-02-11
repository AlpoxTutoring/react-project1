import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'atoms/button/Button';
import axios from 'axios';
import { BaseUrl } from 'config/constants';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const DummyBoard = [];

for (let i = 0; i < 24; i++) {
  DummyBoard.push({
    id: `${i}`,
    category: `자유게시판${i}`,
    title: `리액트를 잘 하고 싶은 개발자${i}`,
    subtitle: `부제는 무엇으로 해야하나 ${i}`,
    content: `내용은 무엇으로.... ${i}`,
    nickName: `라일락꽃향기${i}`,
    viewCount: `1,204${i}`,
    createDate: dayjs(new Date()).format('DD-MM-YYYY'),
  });
}

const FreeBoard = ({ history }) => {
  const handleSearch = async () => {
    try {
      await axios.get(`${BaseUrl}/boards`).then(res => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const writeBoard = () => {
    history.push('/writeboard');
  };

  return (
    <>
      <BoardWrapper>
        <Button onClick={handleSearch} style={{ float: 'right', padding: 5 }} color={'deepskyblue'}>
          조회
        </Button>
        <table>
          <caption>자유게시판</caption>
          <thead>
            <tr>
              <th>게시글 유형</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>생성일</th>
            </tr>
          </thead>
          <tbody>
            {DummyBoard.map(el => (
              <tr key={el.id}>
                <td>{el.category}</td>
                <td>
                  <Link to={`/freeboard/${el.id}`}>{el.title}</Link>
                </td>
                <td>{el.nickName}</td>
                <td>{el.createDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button onClick={writeBoard} style={{ float: 'right', padding: 5 }} color={'deepskyblue'}>
          글쓰기
        </Button>
      </BoardWrapper>
    </>
  );
};
export default FreeBoard;

const BoardWrapper = styled.div`
  height: 700px;
  width: 1200px;
  border: 2px solid lightskyblue;
  padding: 5px;
  margin: 0 auto;
  margin-top: 150px;
`;
