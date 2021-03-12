import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContainer } from 'containers/Main';
import { Header, Footer, Modal, Portal } from 'components';
import { HeaderButton } from 'styles';
import { api } from 'utils/api';
import { LoginModal } from '../../containers/Auth';

export function MainPage() {
  const history = useHistory();
  const [isShow, setIsShow] = useState(false); // 팝업 노출여부
  const [popIdx, setPopIdx] = useState(0); // 로그인,가입팝업 인덱스
  // body 설정
  const [email, setEmail] = useState('');
  const [nickNm, setNickNm] = useState('');
  const [pwd, setPwd] = useState('');

  // 사용자 가입 정보 저장
  const [userInfo, setUserInfo] = useState({
    email: '',
    nickname: '',
    password: '',
  });

  // 사용자 로그인 정보 저장
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: '',
  });

  const handlePopup = index => {
    setIsShow(true);
    setPopIdx(index);
  };

  const onChange = (e, type) => {
    if (type === 'id') {
      setEmail(e.target.value);
    } else if (type === 'nickNm') {
      if (e.target.value.length < 11) {
        setNickNm(e.target.value);
      } else {
        alert('닉네임을 11자이하로 작성하세요.');
      }
    } else {
      if (e.target.value.length < 16) {
        setPwd(e.target.value);
      } else {
        alert('비밀번호를 16자이하로 작성하세요.');
      }
    }
  };

  useEffect(() => {
    setUserInfo({
      email: email,
      nickname: nickNm,
      password: pwd,
    });
  }, [email, nickNm, pwd]);

  // email validation
  const isEmail = email => {
    /* eslint-disable-next-line */
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);
  };

  const onConfirm = () => {
    if (
      userInfo.email === '' ||
      userInfo.nickNm === '' ||
      userInfo.pwd === ''
    ) {
      if (userInfo.email === '') {
        alert('이메일을 입력해주세요');
      } else if (userInfo.nickNm === '') {
        alert('닉네임을 입력해주세요');
      } else {
        alert('비밀번호를 입력해주세요');
      }
    } else {
      if (!isEmail(userInfo.email)) {
        alert('email 형식으로 입력해주세요');
      } else {
        api
          .post('/register', userInfo)
          .then(response => {
            if (response.accessToken) {
              localStorage.setItem('token', response.accessToken);
              alert('가입이 완료되었습니다.');
              setIsShow(false);
            }
          })
          .catch(error => {
            console.log('Error during service worker registration:', error);
          })
          .finally(() =>
            history.push({
              pathname: '/board',
            }),
          );
      }
    }
  };

  const onCancel = () => {
    setIsShow(false);
  };

  return (
    <>
      <MainContainer />
      <Footer />
    </>
  );
}
