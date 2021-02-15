import React, { useState } from 'react';
import styled from 'styled-components';
import { MainContainer } from '../../containers/Main';
import  { Header , Footer } from "../../components";
import { Button } from "../../lib"

export function MainPage() {
  const [isShow,setIsShow] =useState(false)
  const handlePopup=()=>{

  }

  return (
    <>
      <Header>
      <Button color="white" background="#00BFA5" onclick={handlePopup}>로그인</Button>
      <Button color="black" background="lightgrey">회원가입</Button>
      </Header>
      <MainContainer />
      <Footer/>
    </>
  );
}
