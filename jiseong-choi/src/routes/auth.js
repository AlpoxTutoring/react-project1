import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Login from 'pages/Auth/Login'
import Register from 'pages/Auth/Register'

export const AuthRouter = () =>{

    return(
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
    )
}