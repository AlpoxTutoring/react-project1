import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// routers
import { BoardRouter, AuthRouter } from 'routers';

// pages
import { NotFoundPage } from 'pages';

// components
import { Layout } from 'components';

export const RootRouter = () =>{
	return(
		<BrowserRouter>
			<Layout>
				<Switch>
					<BoardRouter/> 
					<AuthRouter/>
					
					
					<NotFoundPage/>
				</Switch>
			</Layout>
		</BrowserRouter>
	)
}