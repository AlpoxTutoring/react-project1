import React from 'react';
import { ReactModal } from 'components';

export const LoginModal = ({ isOpen, onRequestConfirm, onRequestClose }) => {
	return(
		<ReactModal isOpen={true} onRequestConfirm={onRequestConfirm} onRequestClose={onRequestClose}>
			<span>
                ID&nbsp;&nbsp;&nbsp;&nbsp;
				<input placeholder="아이디를 입력하세요" />
			</span>

			<span>
				PW&nbsp;&nbsp;
				<input placeholder="비밀번호를 입력하세요" />
			</span>
		</ReactModal>
	)
}