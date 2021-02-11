import React,{useEffect, useState} from 'react'
import axios from 'axios'

function LandingPage() {

    const [Articles, setArticles] = useState([])

    useEffect(() => {
        axios.get('https://tutor-dev-api.alpox.dev/boards')
            .then(response => {
                if (response.data.rows) {
                    setArticles(response.data.rows)
                } else {
                    alert('글을 가져오는데 실패했습니다.')
                    setArticles(null)
                }
            })
    }, [])

    const renderCards = Articles.map((article) => {
        const { id, title, subtitle, content, contentType, updatedAt, userId } = article
        console.log(id, title, subtitle, content, contentType, updatedAt, userId)
        return (
                <div key={id} style={{ position: 'relative' }}>
                <a href={`boards/${id}`} style={{ textDecoration:'none',color:'violet'}} >
                        <h2>
                            {title}
                        </h2>
                        <h3>
                            {subtitle}
                        </h3>
                        <p>{content.slice(0, 20)}...</p>
                        <p>{updatedAt}</p>
                        <p>Writer : { userId }</p>
                    </a>
                </div>
        )
    });
    

    if (Articles) {
        return (
            <>
                {renderCards}
            </>
        )
    } else {
        <div>
            ...Loading
        </div>
    }
}


export default LandingPage