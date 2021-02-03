import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage.js';
import LoginPage from './components/views/LoginPage/LoginPage.js';
import NotFoundPage from './components/views/NotFoundPage/NotFoundPage.js';
import RegisterPage from './components/views/RegisterPage/RegisterPage.js';
import Header from './components/views/Header/Header'
import ArticleDetailPage from './components/views/ArticleDetailPage/ArticleDetailPage.js';

function App() {
	return (	  
		<BrowserRouter>
			<Header />
			<div>
				<Switch>					
					<Route exact path="/" component={LandingPage} />					
					<Route exact path="/login" component={LoginPage} />	
					<Route exact path="/register" component={RegisterPage} />	
					<Route exact path="/boards/:articleId" component={ArticleDetailPage} />	
					<NotFoundPage />					
				</Switch>				
			</div>			
		</BrowserRouter>		
	); 
}


export default App;

