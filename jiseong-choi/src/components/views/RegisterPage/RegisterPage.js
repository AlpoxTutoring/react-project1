import React, { useState } from 'react'
import axios from 'axios'
import './RegisterPage.css'

function RegisterPage(props) {

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
                    props.history.push('/login')
                } else {
                    console.log(response.data)
                    alert('registerFailed')
                }
            })
    }

    return (
        <div className="register-wrapper">
            <div className="register-container">
                <form className="register-form" onSubmit={onSubmitHandler}>
                    <h1 className="register-title">Community</h1>
                    <input className="register-form__input" placeholder="UserId" type="text" value={id} onChange={onUserIdHandler} />
                    <input className="register-form__input" placeholder="NickName" type="text" value={nickname} onChange={onNicknamedHandler} />
                    <input className="register-form__input" placeholder="Password" type="password" value={password} onChange={onPasswordHandler} />

                    <br />
                    <button className="sign-in__button" type='submit' >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage
