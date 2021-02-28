import BoardList from 'pages/Board/BoardList'
import BoardUpload from 'pages/Board/BoardUpload'
import BoardDetail from 'pages/Board/BoardDetail'
import React from 'react'
import {Route} from 'react-router-dom'

function BoardRouter() {
    return (
        <>
            <Route exact path="/boards" component={BoardList} /> 
            <Route exact path="/new" component={BoardUpload} />
            <Route exact path="/boards/:id" component={BoardDetail} />  
        </>
    )
}

export default BoardRouter
