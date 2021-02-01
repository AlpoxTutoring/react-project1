import axios from 'axios';
import React, { useState } from 'react'
import './Loingpage.css'

function LoginPage() {

    const [id, setid] = useState("")
    const [password, setpassword] = useState("")

    const onUserIdHandler = (e) => {
        setid(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setpassword(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const config = {
            headers:{ 'Authorization': 'Bearer <accessToken>' }
        }

        const body = {
            id: id,
            password:password
        }
        axios.post('https://tutor-dev-api.alpox.dev/auth/login', body, config)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data)
                } else {
                    console.log(response.data)
                }
            })
    }

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <form className="login-form" onSubmit={onSubmitHandler}>
                    <h2 className="login-form__title">Community</h2>
                    <input className="login-form__input" placeholder="UserId" type="text" value={id} onChange={onUserIdHandler} />
                    <input className="login-form__input" placeholder="Password" type="password" value={password} onChange={onPasswordHandler} />
                    <button className="login-button" type='submit' >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
