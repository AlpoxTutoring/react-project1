import React from 'react';
import { Route } from 'react-router-dom';

import { BoardDetailPage, BaordUploadPage  } from 'pages';
import BoardListPage from 'pages/LandingPage/LandingPage';

export const BoardRouter = () => {
	return(
		<>
			<Route path="/" component={BoardListPage}/>
			<Route exact path="/boards/:id" component={BoardDetailPage}/>
			<Route exact path="/boards/upload" component={BaordUploadPage}/>
		</>
	)
}