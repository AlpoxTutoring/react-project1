import React,{useState} from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RootRouter } from 'routers';

// import LandingPage from './components/views/LandingPage/LandingPage.js';
// import LoginPage from './components/views/LoginPage/LoginPage.js';
// import NotFoundPage from './components/views/NotFoundPage/NotFoundPage.js';
// import RegisterPage from './components/views/RegisterPage/RegisterPage.js';
// import Header from './components/views/Header/Header'
// import ArticleDetailPage from './components/views/ArticleDetailPage/ArticleDetailPage.js';
// import Footer from './components/views/Footer/Footer.js';
// import ArticleUploadPage from './components/views/ArticleUploadPage/ArticleUploadPage.js';

export default function App() {
	const [accessToken, setAccessToken] = useState(window.localStorage.getItem('accessToken'));

	// const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem('accessToken'))

	// useEffect(() => {
	// 	// setIsLoggedIn( window.localStorage.getItem('accessToken'))
	// }, []);

	return <RootRouter/>;
}
