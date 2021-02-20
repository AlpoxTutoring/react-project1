import useInputs from 'Hooks/useInputs';
import React from 'react';
import { Button } from 'atoms/buttons/Button';
import styled from '@emotion/styled';
import { BaseUrl } from 'config/constants';
import { requestAxios } from 'config/commonRequest';

const Login = ({ history }) => {
  const [{ id, password }, onChange] = useInputs({
    id: '',
    password: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(id, password);

    try {
      await requestAxios.post(`${BaseUrl}/login`, { id, password }).then(res => {
        console.log(res);
        localStorage.setItem('ACCESS_TOKEN', res.data.accessToken);
        alert('로그인에 성공하였습니다');
        history.push('/');
        window.location.reload();
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
            name="id"
            value={id}
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
            로그인
          </Button>
        </ButtonRow>
      </RegisterForm>
    </RegisterWrapper>
  );
};
export default Login;

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
