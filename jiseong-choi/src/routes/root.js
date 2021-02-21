import { Layout } from 'components/Layout'
import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
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
