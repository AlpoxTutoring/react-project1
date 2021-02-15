import React from 'react'
import styled from 'styled-components';
import oc from 'open-color';

// import { shadow, media } from 'lib/styleUtils';

// 상단 고정, 그림자
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
    
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
    width: 1200px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
`;

// 로고
const Logo = styled.div`
    font-size: 1.4rem;
    letter-spacing: 2px;
    color: ${oc.teal[7]};
    font-family: 'Rajdhani';
`;

// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
    height: 3px;
    background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;

export const Header = ({children}) => {
    return (
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                    <Logo>MintCamp</Logo>
                    <Spacer/>
                    {children}
                </HeaderContents>
            </WhiteBackground>
            <GradientBorder/>
        </Positioner>
    );
};

//
// const HeaderWrapper = styled.div`
//     display: flex;
//     position: fixed;
//     align-items: center;
//     justify-content: left;
//     height: 60px;
//     width: 100%;
//     top: 0px;
//     z-index: 5;
//
//     background: white;
//     color: black;
//     border-bottom: 1px solid ${oc.indigo[7]};
//     box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);
//
//     /* 폰트 */
//     font-size: 2.5rem;
// `;
//
// export const Header = () => {
//     return (<HeaderWrapper>
//         <span>Mint Camp</span>
//     <button>Login</button>
//         <button>Join</button>
//     </HeaderWrapper>)
// }
