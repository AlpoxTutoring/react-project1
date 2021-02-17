import React from 'react';
// import "../../../assets/css/modal.css";
import styled from 'styled-components';

export const Modal=  (props)=> {
    const { open, close, header } = props;

    const Positioner = styled.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
  `;

  const Wrapper = styled.div`
  width: 90%;
  max-width: 450px;
  margin:0 auto;
  border-radius: .3rem;
  background-color: #fff;
  animation: modal-show .3s;
  overflow: hidden;
`;


const Header = styled.div`
position: relative;
padding: 16px 64px 16px 16px;
background-color: #f1f1f1;
font-weight: 700;
button {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: #999;
  background-color: transparent;
}
`;

const Contents = styled.div`
padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
`;



    return (
        <Positioner>
            { open ? (  
                <Wrapper>
                    <Header>
                        {header}
                        <button className="close" onClick={close}> &times; </button>
                    </Header>
                    <Contents>
                        {props.children}
                    </Contents>
                    
                </Wrapper>
            ) : null }
        </Positioner>
    )
}