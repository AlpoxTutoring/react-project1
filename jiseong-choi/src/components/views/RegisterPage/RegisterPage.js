import React, { useState } from 'react'
import axios from 'axios'
import './RegisterPage.css'

function RegisterPage(props) {

    const [Inputs, setInputs] = useState({
        id: "",
        nickname: "",
        password: ""
    })

    const { id, nickname, password } = Inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]:value
        }))
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
            .catch(err => {
                console.log(err)
                alert("우리 서버가 장애에요")
            })
    }

    return (
        <div className="register-wrapper">
            <div className="register-container">
                <form className="register-form" onSubmit={onSubmitHandler}>
                    <h1 className="register-title">Community</h1>
                    <input name="id" className="register-form__input" placeholder="UserId" type="text" value={id} onChange={onChange} />
                    <input name="nickname" className="register-form__input" placeholder="NickName" type="text" value={nickname} onChange={onChange} />
                    <input name="password" className="register-form__input" placeholder="Password" type="password" value={password} onChange={onChange} />

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
