/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const logoHeaderStyle = css`
  font-size: 24px;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  &:hover {
    color: white;
  }
`;

const headerStyle = css`
  background-color: #4b79a1;
  font-size: 24px;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  &:hover {
    color: white;
  }
`;

const menuStyle = css`
  display: flex;
  justify-content: space-around;
  font-size: 18px;
`;

const Header = () => {
  return (
    <>
      <div css={logoHeaderStyle}>Welcome to New Community !</div>
      <div css={headerStyle}>
        <ul css={menuStyle}>
          <li>About Me</li>
          <Link to="/freeboard">
            <li>자유게시판</li>
          </Link>
          <li>Contact Me!</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
