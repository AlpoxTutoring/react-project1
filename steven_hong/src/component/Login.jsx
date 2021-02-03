import React, { useState } from 'react';
import './Login.css';
import { Route, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [showSignForm, setShowSignForm] = useState(false);

  const activateSingUp = () => {
    setShowSignForm(true);
  };
  const deactivateSingUp = () => {
    setShowSignForm(false);
  };
  return (
    /* 주석주석 */
    <div>
      {/* 주석주석  */}
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
            <button>가입하기</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>민민 스쿨 등교하기!</h1>
              <p>계정이 있으시다면 로그인해주세요</p>
              <button className="ghost" id="signIn" onClick={deactivateSingUp}>
                로그인
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>안녕하세요!</h1>
              <p>간단 가입하고 민민스쿨로 고고씨잉~ </p>
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
