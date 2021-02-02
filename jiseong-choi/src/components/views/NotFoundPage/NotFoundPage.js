import React,{useEffect} from 'react'
import './NotFoundPage.css'

function NotFoundPage() {
    useEffect(() => {
        alert("NotFoundPage")
    }, [])
    return (
        <div className="not-found__container">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qZtY8Q0AXbQ?autoplay=1&mute=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen autoPlay="1"></iframe>
        </div>
    )
}

export default NotFoundPage
