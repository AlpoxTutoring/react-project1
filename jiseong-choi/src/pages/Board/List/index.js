import React,{useEffect, useState, useCallback, Suspense} from 'react'
import axios from 'axios'
import { Loading } from 'components/Loading'
import { Link } from 'react-router-dom';
import './index.css'

function BoardList() {

    const [loading, setLoading] = useState(false);
    const [boards, setBoards] = useState([])

    const onGetBoards = useCallback(async()=>{
        setLoading(true);

        const url = `https://tutor-dev-api.alpox.dev/boards`
        const response = await axios.get(url)

        if(response.status === 200){
            const {data} = response
            const {count, rows} = data

            setBoards(rows)
            console.log(response)
            setLoading(false);
        } else{
            alert('Cannot get boards from the server.')
        }
    },[setBoards]
    )

    useEffect(() => {
        onGetBoards()
    }, [])

    const boardList = boards.map((board)=>(
        <BoardItem key={board.id} board={board} />
    ))

    return(
        <>
            <Loading view={loading} />
            <div className="BoardList">
                {boardList}
            </div>
        </>
    )
}

const showContent = (content) =>{
    return {__html:`${content}`}
}

const BoardItem = ({board}) =>{
    const {id, title, subtitle, content, contentType,updateAt, userId} = board
    let contents = content ? content.slice(0,50) : "내용없음..."
    return(
        <div className="board">  
            <Link to={`/boards/${id}`}>
                <h1 className="title">{title ? title.slice(0,20) :"무제"}</h1>
                <div className="title-under"></div>
                <p className="subtitle" >{subtitle ? subtitle.slice(0,50): "부제 없음"}</p>
                <p className="content" dangerouslySetInnerHTML={showContent(contents)} ></p>
            </Link>
            </div>
    )
}

export default BoardList