/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

import React, { useState } from 'react';
import './Login.css';
import { Route, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';

const closeButtonStyle = css`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
`;

const Login = ({ view, close }) => {
  const [showSignForm, setShowSignForm] = useState(false);
  const activateSingUp = () => {
    setShowSignForm(true);
  };
  const deactivateSingUp = () => {
    setShowSignForm(false);
  };

  return (
    /* 주석주석 주석다는 법 */
    <div className="login-form-wrapper" style={{ display: view === true ? 'block' : 'none' }}>
      {/* 주석주석  */}
      <div style={closeButtonStyle}>
        <FontAwesomeIcon onClick={close} icon={faWindowClose} size="1x" />
      </div>
      <div className={showSignForm === true ? 'container right-panel-active' : 'container'} id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>계정 만들기</h1>
            <div className="social-container">
              <Link to="/">
                <FontAwesomeIcon icon={faFacebookF} size="1x" />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faGooglePlusG} size="1x" />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </Link>
            </div>
            <span>또는 이메일로 가입하기</span>
            <input type="text" placeholder="이름" />
            <input type="email" placeholder="이메일" />
            <input type="password" placeholder="비밀번호" />
            <button>회원가입</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>로그인</h1>
            <div className="social-container">
              <Link to="/">
                <FontAwesomeIcon icon={faFacebookF} size="1x" />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faGooglePlusG} size="1x" />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </Link>
            </div>
            <span>또는 이메일로 로그인</span>
            <input type="email" placeholder="이메일" />
            <input type="password" placeholder="비밀번호" />
            <Link to="/about">비밀번호를 잊으셨나요?</Link>
            <button>로그인</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>민민 스쿨 등교하기</h1>
              <p>계정이 있으신가요? 로그인 해주세요!</p>
              <button className="ghost" id="signIn" onClick={deactivateSingUp}>
                로그인
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>안녕하세요!</h1>
              <p>간단하게 가입하고 민민스쿨로 고고씨잉~ </p>
              <button className="ghost" id="signUp" onClick={activateSingUp}>
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
