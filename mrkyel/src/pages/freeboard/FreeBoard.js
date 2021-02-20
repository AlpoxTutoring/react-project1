import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSearch = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);
      await axios.get(`${BaseUrl}/boards`).then(res => {
        setData(res.data.rows);
      });
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const writeBoard = () => {
    history.push('/writeboard');
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;

  return (
    <>
      <BoardWrapper>
        <Button onClick={handleSearch} style={{ float: 'right', padding: 5 }} color={'deepskyblue'}>
          조회
        </Button>
        <table css={tableStyle}>
          <thead>
            <tr>
              <th>게시글 유형</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>생성일</th>
            </tr>
          </thead>
          <tbody>
            {data.map(el => (
              <tr key={el.id}>
                <td>{el.subtitle}</td>
                <td>
                  <Link to={`/freeboard/${el.id}`}>{el.title}</Link>
                </td>
                <td>{el.userId}</td>
                <td>{el.createdAt}</td>
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
  height: 600px;
  width: 1200px;
  border: 2px solid lightskyblue;
  padding: 5px;
  margin: 0 auto;
  margin-top: 50px;
`;

const tableStyle = css`
  height: 300px;
  font: initial;
`;
