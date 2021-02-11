import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'atoms/button/Button';
import { useHistory } from 'react-router-dom';

const LoginBox = styled.div`
  width: 300px;
  height: 200px;
  float: right;
  background: beige;
`;

const Login = () => {
  const history = useHistory();
  const onClick = () => {
    history.push('/register');
  };
  return (
    <LoginBox>
      <Button onClick={onClick} color={'deepskyblue'}>
        회원가입
      </Button>
    </LoginBox>
  );
};
export default Login;
