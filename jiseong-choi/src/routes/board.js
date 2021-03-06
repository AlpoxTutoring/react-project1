import BoardList from 'pages/Board/List'
import BoardUpload from 'pages/Board/Upload'
import BoardDetail from 'pages/Board/Detail'
import React from 'react'
import {Route, Switch} from 'react-router-dom'

function BoardRouter(props) {
    return (
        <Switch>
            <Route exact path="/" component={BoardList} /> 
            <Route exact path="/new" component={BoardUpload} />
            <Route exact path="/boards/:id" accessToken={props.accessToken} component={BoardDetail} />  
        </Switch>  
    )
}

export default BoardRouter
