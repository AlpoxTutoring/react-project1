import React from 'react';
import { Route } from 'react-router-dom';

// import { LoginPage, RegisterPage } from 'pages';
import LoginPage from 'pages/LoginPage/LoginPage'
import RegisterPage from 'pages/RegisterPage/RegisterPage';

export const AuthRouter = () => {
	return(
		<>
			<Route path="/login" component={LoginPage}/>
			<Route path="/register" component={RegisterPage}/>
		</>
	)
}