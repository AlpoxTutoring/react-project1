import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContainer } from '../../containers/Main';
import { Header, Footer, Modal, Portal } from 'components';
import { HeaderButton } from '../../styles';
import { api } from '../../utils/api';
import { AuthPopup } from '../../containers/Main/AuthPopup';

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
      <Header>
        <HeaderButton
          color="white"
          background="#00BFA5"
          onClick={() => handlePopup(0)}
        >
          로그인
        </HeaderButton>
        <HeaderButton
          color="black"
          background="lightgrey"
          onClick={() => handlePopup(1)}
        >
          회원가입
        </HeaderButton>
      </Header>
      <MainContainer />
      <Footer />

      {isShow && (
        <Portal>
          {/* <AuthPopup show={isShow} idx={popIdx}/>  -- show값 없데이트 안됨*/}
          {popIdx === 0 && (
            <Modal
              title="Login"
              confirmText="로그인"
              cancelText="취소"
              onConfirm={onConfirm}
              onCancel={onCancel}
              visible={isShow}
            >
              <span>
                ID&nbsp;&nbsp;&nbsp;&nbsp;
                <input placeholder="아이디를 입력하세요" />
              </span>
              <br />

              <span>
                PW&nbsp;&nbsp;
                <input placeholder="비밀번호를 입력하세요" />
              </span>
            </Modal>
          )}

          {popIdx === 1 && (
            <Modal
              title="Join"
              confirmText="가입"
              cancelText="취소"
              onConfirm={onConfirm}
              onCancel={onCancel}
              visible={isShow}
            >
              <span>
                EMAIL&nbsp;
                <input
                  id="email"
                  placeholder="이메일을 입력해주세요"
                  onChange={e => onChange(e, 'id')}
                />
              </span>
              <br />
              <span>
                NICKNAME&nbsp;
                <input
                  id="nickNm"
                  placeholder="닉네임를 입력하세요"
                  value={nickNm}
                  maxLength={11}
                  onChange={e => onChange(e, 'nickNm')}
                />
              </span>
              <br />
              <span>
                PW&nbsp;
                <input
                  id="pw"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  maxLength={15}
                  onChange={e => onChange(e, 'pw')}
                />
              </span>
            </Modal>
          )}
        </Portal>
      )}
    </>
  );
}
