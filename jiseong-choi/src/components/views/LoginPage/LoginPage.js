import axios from 'axios';
import React, { useState } from 'react'

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
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>아이디</label>
                <input type="text" value={id} onChange={onUserIdHandler} />
                <label>비밀번호</label>
                <input type="password" value={password} onChange={onPasswordHandler} />
                <button type="submit">
                    로그인
                </button>
            </form>
        </div>
    )
}

export default LoginPage
