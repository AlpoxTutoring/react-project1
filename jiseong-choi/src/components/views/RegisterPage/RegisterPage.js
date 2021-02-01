import React, { useState } from 'react'
import axios from 'axios'
import './RegisterPage.css'

function RegisterPage() {

    const [id, setid] = useState("")
    const [nickname, setnickname] = useState("")
    const [password, setpassword] = useState("")

    const onUserIdHandler = (e) => {
        setid(e.currentTarget.value);
    }

    const onNicknamedHandler = (e) => {
        setnickname(e.currentTarget.value);
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
            nickname:nickname,
            password:password
        }
        axios.post('https://tutor-dev-api.alpox.dev/auth/register', body, config)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data)
                } else {
                    console.log(response.data)
                }
            })
    }

    return (
        
        <div className="register-container">
            <form className="register-form" onSubmit={onSubmitHandler}>
                <h1 className="register-title">Community</h1>
                <label className="register-form__label">UserId</label>
                <input type="text" value={id} onChange={onUserIdHandler} />
                <label className="register-form__label">NickName</label>
                <input type="text" value={nickname} onChange={onNicknamedHandler} />
                <label className="register-form__label">Password</label>
                <input type="password" value={password} onChange={onPasswordHandler} />

                <br />
                <button className="sign-in__button" type='submit' >
                    Sign in
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
