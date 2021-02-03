import React,{useState} from 'react'
import axios from 'axios'

function ArticleDetailPage(props) {

    const articleId = props.match.params.articleId

    const [Article, setArticle] = useState([])

    React.useEffect(() => {
        axios.get(`https://tutor-dev-api.alpox.dev/boards/${articleId}`)
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    setArticle(response.data.board)
                } else {
                    alert('Cannot get Article from the server.')
                }
            })
    }, [])

    if (Article) {
        return (
            <div style={{display:'flex',alignItems:'center',justifyContent:'center', height:'78vh'}}>
                글
            </div>
        )
    } else {
        return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center', height:'78vh'}}>
            Loading...
        </div>
    )
    }
}

export default ArticleDetailPage
