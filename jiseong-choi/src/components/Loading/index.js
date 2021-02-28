import React from 'react';
import './index.css';

export const Loading = ({ view }) => {
	if(!view) return null;
	return(
		<div className="LoadingWrapper">
			<h1 className="LoadingText">Loading...</h1>
		</div>
	)
}