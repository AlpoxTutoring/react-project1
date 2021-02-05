import React,{useEffect, useState} from 'react'
import axios from 'axios'

function LandingPage() {

    const [Articles, setArticles] = useState([])

    useEffect(() => {
        axios.get('https://tutor-dev-api.alpox.dev/boards')
            .then(response => {
                console.log(response)
                if (response.data) {
                    setArticles(response.data)
                } else {
                    alert('글을 가져오는데 실패했습니다.')
                    setArticles(null)
                }
            })
    }, [])

    console.log(Articles)

    return (
        <div>
            ...loading
        </div>
    )
}


export default LandingPage