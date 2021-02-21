import React,{useEffect, useState, useCallback, Suspense} from 'react'
import axios from 'axios'

function BoardList() {

    const [boards, setBoards] = useState([])

    const onGetBoards = useCallback(async()=>{

        const url = `https://tutor-dev-api.alpox.dev/boards`
        const response = await axios.get(url)

        if(response.status === 200){
            const {data} = response
            const {count, rows} = data

            setBoards(rows)
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
            <div className="BoardList">
                {boardList}
            </div>
        </>
    )
}


const BoardItem = ({board}) =>{
    const {id, title, subtitle, content, contentType,updateAt, userId} = board

    return(
        <div>
            <h1 className="title">{title}</h1>
            <p className="subtitle" >{subtitle}</p>
        </div>
    )
}

export default BoardList