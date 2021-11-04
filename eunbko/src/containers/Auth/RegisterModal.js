import React, { useState } from 'react';
import { Modal, ReactModal } from 'components';

export const RegisterModal = ({ isOpen, onRequestConfirm, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [nickNm, setNickNm] = useState('');
  const [pwd, setPwd] = useState('');
  const [userInfo, setUserInfo] = useState({
    email: '',
    nickNm: '',
    pwd: '',
  });

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

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestConfirm={onRequestConfirm}
      onRequestClose={onRequestClose}
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
    </ReactModal>
  );
};
