import React, { useState } from 'react';
import {Modal2} from '../../components/Main'


export function AuthPopup({index, show}){
 const popIdx =index;
 const [isShow, setIsShow] = useState(show);

 const onConfirm = () => {
  setIsShow(false);
};
const onCancel = () => {
  setIsShow(false);
};

  return(<>{popIdx===0 &&(
    <Modal2
title="Login"
confirmText="로그인"
cancelText="취소"
 onConfirm={onConfirm}
  onCancel={onCancel}
  visible={isShow}
>
  <span>ID&nbsp;&nbsp;&nbsp;&nbsp;<input/></span><br/>
  <span>PW&nbsp;&nbsp;<input/></span>
</Modal2> )}

{popIdx===1 &&(
    <Modal2
 title="Join"
 confirmText="가입"
 cancelText="취소"
 onConfirm={onConfirm}
  onCancel={onCancel}
  visible={isShow}
>
  <span>EMAIL&nbsp;&nbsp;&nbsp;&nbsp;<input/></span><br/>
  <span>NICKNAME&nbsp;&nbsp;&nbsp;&nbsp;<input/></span><br/>
  <span>PW&nbsp;&nbsp;<input/></span>
</Modal2> )}</>)
}