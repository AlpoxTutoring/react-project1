import React from 'react'
import { Route } from 'react-router-dom'
import Login from 'pages/Auth/Login'
import Register from 'pages/Auth/Register'

export const AuthRouter = () =>{

    return(
        <>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </>
    )
}