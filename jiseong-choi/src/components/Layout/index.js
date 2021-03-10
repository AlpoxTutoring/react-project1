import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

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
                    {/*여기다가 로그인 회원가입 컴포넌트 집어 넣을 거임*/}
                </nav>
            </div>

            <div className="Content">
                {children}
            </div>
        </>
    )
}