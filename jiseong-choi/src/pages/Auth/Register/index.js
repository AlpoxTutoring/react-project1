import React, { useState } from 'react'
import axios from 'axios'
import './index.css'

function Register(props) {

    const [Inputs, setInputs] = useState({
        email: "",
        nickname: "",
        password: ""
    })

    const { email, nickname, password } = Inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]:value
        }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const body = {
            email: email,
            nickname:nickname,
            password:password
        }
        axios.post('https://tutor-dev-api.alpox.dev/auth/register', body)
            .then(response => {
                console.log(response)
                if (response.status === 201) {
                    console.log(response.data.status)
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
                    <input required name="email" className="register-form__input" placeholder="email" type="email" value={email} onChange={onChange} />
                    <input required name="nickname" className="register-form__input" placeholder="NickName" type="text" value={nickname} onChange={onChange} />
                    <input required name="password" className="register-form__input" placeholder="Password" type="password" value={password} onChange={onChange} />

                    <br />
                    <button className="sign-in__button" type='submit' >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register
