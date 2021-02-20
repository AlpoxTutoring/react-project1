import { Layout } from 'components/views/Layout'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BoardRouter from './board'

function RootRouter() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <BoardRouter /> 
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default RootRouter
