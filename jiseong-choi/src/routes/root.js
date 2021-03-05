import { Layout } from 'components/Layout'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthRouter } from './auth'
import BoardRouter from './board'

function RootRouter(props) {
    return (
        <BrowserRouter>
            <Layout>
                <AuthRouter />
                <BoardRouter accessToken={props.accessToken} />
            </Layout>
        </BrowserRouter>
    )
}

export default RootRouter
