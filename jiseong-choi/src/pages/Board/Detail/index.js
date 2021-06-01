import React,{useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import './index.css'

function BoardDetail(props) {

    const boardId = props.match.params.id

    const user = localStorage.getItem("accessToken")

    const boardDelete = async() =>{
        const response = await axios.delete(`https://tutor-dev-api.alpox.dev/boards/{id}`)
        console.log(response)
    }

    console.log(user)

    const [board, setBoard] = useState([])

    const getBoard = useCallback(async() =>{
        const url = `https://tutor-dev-api.alpox.dev/boards/${boardId}`
        const response = await axios.get(url)

        if(response.status === 200){
            const { data } = response
            const { board } = data

            setBoard(board)
        } else{
            alert('Cannot get board from the server.')
        }
        console.log(response)
    })

    useEffect(() => {
        getBoard()
    }, [])
    
    
    const { title, subtitle, content, contentType,updatedAt, userId} = board

    const showContent = (content) =>{
        return {__html:`${content}`}
    }

    return (
        <>
            <div className="Board">
                <div>
                <h1 className="boardTitle">제목 : {title}</h1>
                <h3 className="boardSubTitle">부제 : {subtitle}</h3>
                <p className="boardContent" dangerouslySetInnerHTML={showContent(content)}></p>
                <br />
                <p className="boardUpdate">{updatedAt}</p>
                <h4 className="boardUserId">{userId}</h4>

                {
                user === userId
                &&
                <button onClick={boardDelete} >Delete</button>
                }
                </div>
            </div>
            
        </>
    )
}


export default BoardDetail
