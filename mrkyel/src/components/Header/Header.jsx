/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import logo from 'assets/img/logo.png';
import { Menus, USER_INFO } from 'config/constants';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

const logoHeaderStyle = css`
  font-size: 24px;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
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

const ulStyle = css`
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
`;

const welcomeLiStyle = css`
  margin-right: 10px;
  font-weight: bold;
`;

const liStyle = css`
  margin-right: 10px;
`;

const Header = () => {
  const [userInfo, setUserInfo] = useState(null);
  const handleLogout = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token) setUserInfo(jwtDecode(token));
  }, []);

  return (
    <>
      <div css={logoHeaderStyle}>
        <Link to="/">
          <img alt={'main-logo'} src={logo} style={{ width: '25%' }} />
        </Link>
        <ul css={ulStyle}>
          {userInfo && <li css={welcomeLiStyle}>{userInfo.email}님 환영합니다!</li>}
          <Link to="/login">
            {!localStorage.getItem('ACCESS_TOKEN') && <li css={liStyle}>로그인</li>}
          </Link>
          <Link to="/">
            {localStorage.getItem('ACCESS_TOKEN') && (
              <li onClick={handleLogout} css={liStyle}>
                로그아웃
              </li>
            )}
          </Link>
          <Link to="/register">
            <li css={liStyle}>회원가입</li>
          </Link>
        </ul>
      </div>
      <div css={headerStyle}>
        <ul css={menuStyle}>
          {Menus.map((el, index) => (
            <Link key={index} to={`/${el.url}`}>
              <li>{el.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
