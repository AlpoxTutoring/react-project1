import styled from '@emotion/styled';
import * as React from 'react';
import { Link } from 'react-router-dom';

const UsePagination = ({ totalPage, currentPage, perPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
    pageNumbers.push(i);
  }

  React.useEffect(() => {}, []);

  return (
    <>
      <nav>
        <PaginationWrapper>
          {/* <li>&laquo;</li> */}
          {pageNumbers.map(el => (
            <NumberBox onClick={() => paginate(el)} key={el}>
              {el}
            </NumberBox>
          ))}
          {/* <li>&raquo;</li> */}
        </PaginationWrapper>
      </nav>
    </>
  );
};

export default UsePagination;

const PaginationWrapper = styled.ul`
  display: flex;
  justify-content: center;
`;

const NumberBox = styled.li`
  border: 1px solid #ddd;
  margin: 0 4px;
  cursor: pointer;
`;
