import React, { useState, useEffect } from 'react';
import { Modal } from '../../components/Main';
import { Portal } from '../../components';
import { useHistory } from 'react-router-dom';
import { api } from '../../utils/api';

export function AuthPopup({ show, idx }) {
  const [isShow, setIsShow] = useState(show);
  const [popIdx, setPopIdx] = useState(idx);
  const [email, setEmail] = useState('');
  const [nickNm, setNickNm] = useState('');
  const [pwd, setPwd] = useState('');
  const [userInfo, setUserInfo] = useState({
    email: '',
    nickNm: '',
    pwd: '',
  });
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  //
  // const handlePopup = index => {
  //   setIsShow(true);
  //   setPopIdx(index);
  // };

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
      {/* <AuthPopup index={popIdx} isShow={isShow}/> */}
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
    </>
  );
}
