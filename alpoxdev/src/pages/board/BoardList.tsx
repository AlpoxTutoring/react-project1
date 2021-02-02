import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";

import { getDummyBoards } from "common/dummy";

const onFilterBoards = (searchInput: string, boards: any) => {
  console.log(`onFilterBoards`, searchInput, boards);

  if (searchInput.length === 0) return boards;

  const title = boards.filter(
    (board: any) =>
      board.title.toUpperCase().search(searchInput.toUpperCase()) > -1
  );

  return title.length !== 0 ? title : boards;
};

export const BoardListPage = () => {
  // useState 사용
  const [searchInput, setSearchInput] = useState("");
  const [boards, setBoards] = useState<any[]>([]);

  const [counter, setCounter] = useState<number>(0);

  // useMemo 사용
  const filteredBoards = React.useMemo(
    () => onFilterBoards(searchInput, boards),
    [searchInput, boards]
  );

  // useCallback 사용
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(`onChange`, searchInput);
      const { value } = e.target;
      setSearchInput(value);
    },
    [searchInput]
  );

  const onGetBoards = useCallback(async () => {
    console.log(`onGetBoards`);

    const newBoards = await getDummyBoards();
    setBoards(newBoards);
  }, []);

  const onIncreaseCount = useCallback(() => {
    console.log(`onIncreateCount`, counter);

    setCounter((counter) => counter + 1);
  }, [counter]);

  // useEffect 사용
  useEffect(() => {
    onGetBoards();
  }, [onGetBoards]);

  return (
    <>
      <Title>Hi, This is AlpoxDev : {counter}</Title>

      <CounterButton onClick={onIncreaseCount}>+</CounterButton>

      <InputWrapper>
        <Input value={searchInput} onChange={onChange} placeholder="검색!" />
      </InputWrapper>

      <BoardListView>
        {filteredBoards.map((board: any) => (
          <BoardItemView key={board.id}>{JSON.stringify(board)}</BoardItemView>
        ))}
      </BoardListView>
    </>
  );
};

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.title};
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily.content};
`;

const CounterButton = styled.button``;

const InputWrapper = styled.div`
  margin-top: 15px;
`;

const Input = styled.input`
  border: 0;
  outline: 0;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.subtitle};
`;

const BoardListView = styled.div`
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const BoardItemView = styled.div`
  width: 30%;
  min-height: 250px;

  margin-right: 5%;
  margin-bottom: 30px;
  padding: 12px;

  box-shadow: 1px 5px 5px 3px rgba(142, 142, 142, 0.34);

  &:nth-child(3n) {
    margin-right: 0;
  }
`;
