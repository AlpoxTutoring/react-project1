import BoardList from 'pages/Board/BoardListPage'
import BoardUpload from 'pages/Board/BoardUpload'
import BoardDetail from 'pages/Board/BoardDetailPage'
import React from 'react'
import {Route} from 'react-router-dom'

function BoardRouter() {
    return (
        <>
            <Route exact path="/" component={BoardList} /> 
            <Route exact path="/boards/upload" component={BoardUpload} />
            <Route exact path="/boards/:id" component={BoardDetail} />  
        </>
    )
}

export default BoardRouter
