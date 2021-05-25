import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Menu from '../Menu/index'

export const Layout = ({children}) =>{

    return (
        <>
            <div className="Header">
                <Link className="Link" to="/">
                    <h1 className="Logo">
                        Logo
                    </h1>
                </Link>
                <nav className="menuList">
                    <Menu />
                </nav>
            </div>

            <div className="Content">
                {children}
            </div>
        </>
    )
}