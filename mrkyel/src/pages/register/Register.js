import useInputs from 'Hooks/useInputs';
import React from 'react';
import { Button } from 'atoms/buttons/Button';
import styled from '@emotion/styled';
import { BaseUrl } from 'config/constants';
import { requestAxios } from 'config/commonRequest';

const Register = ({ history }) => {
  const [{ email, nickName, password }, onChange] = useInputs({
    email: '',
    nickName: '',
    password: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(email, nickName, password);

    try {
      await requestAxios.post(`${BaseUrl}/register`, { email, nickName, password }).then(res => {
        console.log(res);
        alert('회원가입을 축하합니다');
        history.push('/');
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RegisterWrapper>
      <RegisterForm>
        <InputRow>
          <label style={{ flex: 1 }}>이메일</label>
          <input
            style={{ padding: '5px' }}
            type="email"
            placeholder="E-mail"
            required
            name="email"
            value={email}
            onChange={onChange}
          />
        </InputRow>
        <InputRow>
          <label style={{ flex: 1 }}>닉네임</label>
          <input
            style={{ padding: '5px' }}
            type="text"
            placeholder="닉네임"
            required
            name="nickName"
            value={nickName}
            onChange={onChange}
          />
        </InputRow>
        <InputRow>
          <label style={{ flex: 1 }}>비밀번호</label>
          <input
            style={{ padding: '5px' }}
            type="password"
            name="password"
            placeholder="비밀번호"
            required
            value={password}
            onChange={onChange}
          />
        </InputRow>
        <ButtonRow>
          <Button onClick={handleSubmit} color={'deepskyblue'}>
            회원가입
          </Button>
        </ButtonRow>
      </RegisterForm>
    </RegisterWrapper>
  );
};
export default Register;

const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 450px;
  border: 5px solid lightskyblue;
  padding: 5px;
  margin: 0 auto;
  margin-top: 100px;
`;

const RegisterForm = styled.form`
  width: 300px;
`;

const InputRow = styled.div`
  display: flex;
  padding-bottom: 10px;
  align-items: center;
`;

const ButtonRow = styled.div`
  text-align: center;
  margin-top: 20px;
`;
