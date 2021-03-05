import { Layout } from 'components/Layout'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthRouter } from './auth'
import BoardRouter from './board'

function RootRouter() {
    return (
        <BrowserRouter>
            <Layout>
                <AuthRouter /> 
                <BoardRouter />
            </Layout>
        </BrowserRouter>
    )
}

export default RootRouter
