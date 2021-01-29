import React, { useState } from 'react'
import axios from 'axios'

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
        axios.post('http://tutor-dev-api.alpox.dev/auth/register', body, config)
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
                <label>닉네임</label>
                <input type="text" value={nickname} onChange={onNicknamedHandler} />
                <label>비밀번호</label>
                <input type="password" value={password} onChange={onPasswordHandler} />
                <button type="submit">
                    회원가입
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
