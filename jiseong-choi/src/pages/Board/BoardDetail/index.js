import React,{useState, useEffect, useCallback} from 'react'
import axios from 'axios'

function BoardDetail(props) {

    const boardId = props.match.params.id

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


    return (
        <>
            <div>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <p>{content}</p>
                <br />
                <p>{updatedAt}</p>
                <h4>{userId}</h4>
            </div>
        </>
    )
}


export default BoardDetail
