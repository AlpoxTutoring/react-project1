/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const headerStyle = css`
  background-color: #4b79a1;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: white;
  }
`;

const Header = () => {
  return <div css={headerStyle}>헤더영역입니다</div>;
};

export default Header;
