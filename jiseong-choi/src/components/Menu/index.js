import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Menu() {

    const user = window.localStorage.getItem("accessToken");

    if(!user){
        return (
            <>
                <nav>
                    <div>
                        <Link className="AuthLink" to="/register">Register</Link>
                        <Link className="AuthLink" to="/login">Login</Link>
                    </div>
                </nav>   
            </>
        )
    } else{
        return (
            <>
                <nav>
                    <div>
                        <Link className="BoardLink" to="/">Board</Link>
                        <Link className="BoardLink" to="/new">New</Link>
                    </div>
                </nav>   
            </>
        )
    }
}

export default Menu
