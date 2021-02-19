import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

export const Layout = ({ children }) => {
	const user = { id: 1 };

	return(
		<LayoutWrapper>
			<HeaderWrapper>
				<Logo>
					Mint Camp
				</Logo>

				{
					!user && (
						<ButtonWrapper>
							<Button>로그인</Button>
							<Button>회원가입</Button>
						</ButtonWrapper>
					)
				}
				{
					user && <UserProfile src="https://avatars.githubusercontent.com/u/58289110?s=460&u=1c387823d53fe26f38c76f057fca13473fc20f52&v=4"/>
				}
			</HeaderWrapper>

			<LayoutContent>
				{children}
			</LayoutContent>
		</LayoutWrapper>
	)
}

const Header = () => {
	return(
		<HeaderWrapper>

		</HeaderWrapper>
	)
}

const LayoutWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
`;

const LayoutContent = styled.div`
	margin-top: 55px;
	padding: 10px;
`;

const HeaderWrapper = styled.div`
	width: 100%;
	height: 55px;
	padding: 0 22px;
	
	position: fixed;
	top: 0;
	left: 0;

	display: flex;
	align-items: center;
	justify-content: space-between;

	border-bottom: 1px solid black;
`;

const ButtonWrapper = styled.div``;

const Logo = styled.h1`
	font-size: 22px;
	font-weight:400;
`;

const Button = styled.button`
	& + & {
		margin-left: 6px;
	}
`;

const UserProfile = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
`;