import React,{useEffect, useState} from 'react'
import axios from 'axios'

function LandingPage() {

    const [Articles, setArticles] = useState([])

    useEffect(() => {
        axios.get('https://tutor-dev-api.alpox.dev/boards')
            .then(response => {
                if (response.data) {
                    setArticles(response.data.boards)
                } else {
                    alert('글을 가져오는데 실패했습니다.')
                }
            })
    }, [])

    const articleCards = Articles.map((article) => {
        const { id, title, content, deletedAt, createdAt, user, category,mainImage } = article
        console.log(article)
        const summary = content.slice(0, 50);
        const createDate = createdAt.slice(0, 10);
        return (
            <div style={{border:'1px solid skyblue'}} key={id} url={`https://tutor-dev-api.alpox.dev/boards/{id}`}>
                <a href={`/article/${id}`}>
                    <h2>Title : {title}</h2>
                    {mainImage && <img alt="thumbnail" src={`https://tutor-dev-api.alpox.dev/boards/${id.mainImage}`} />}
                    <p>Summary : {summary}</p>
                    <p>Created-at : {createDate}</p>
                </a>
            </div>
        )
    })

    return (
        <div>
            {articleCards}
        </div>
    )
}


export default LandingPage
