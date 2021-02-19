import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios';
import './index.css';

import { Loading } from 'components';

function LandingPage() {
	const [loading, setLoading] = useState(false);
	const [boards, setBoards] = useState([]);

	const onGetBoards = useCallback(async() => {
		setLoading(true);

		const url = 'https://tutor-dev-api.alpox.dev/boards';
		const response = await axios.get(url);

		if(response.status === 200){
			const { data } = response;
			const { count, rows } = data;
			setBoards(rows);
		}

		setLoading(false);
	}, [setBoards]);
	
	useEffect(() => {
		onGetBoards();
	}, [onGetBoards])

    const boardList = boards.map((board) => (
		<BoardItem key={board.id} board={board}/>
	));

    return (
		<>
			<Loading view={false} />
			<div className="BoardList">
				{boardList}
			</div>
		</>
	)
}

const BoardItem = ({ board }) => {
	const { id, title, subtitle, content, contentType, updatedAt, userId } = board

	return(
		<div className="BoardItem">
			<h1 className="title">{title}</h1>
			<p className="subtitle">{subtitle}</p>
		</div>
	)
}


export default LandingPage