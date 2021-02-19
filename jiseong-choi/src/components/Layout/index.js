import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export const Layout = ({ children }) => {
	
	return(
		<div>
			<div className="Header">
				<Link to="/">
					<h1 className="Logo">
						Logo
					</h1>
				</Link>
			</div>

			<div className="Content">
				{children}
			</div>
		</div>
	)
}