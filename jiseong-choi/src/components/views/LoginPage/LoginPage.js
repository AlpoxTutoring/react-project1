import axios from 'axios';
import React, { useState } from 'react'
import './Loingpage.css'

function LoginPage(props) {

    const [Inputs, setInputs] = useState({
        id: "",
        password:""
    })

    const { id, password } = Inputs;

    const onChange = (e) => {
    const { value, name } = e.target; 
    setInputs(prev=>({
      ...prev, 
      [name]: value 
        })
    )};

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
                console.log(response)
                if (response.status === 200) {
                    window.localStorage.setItem('userId', response.body.userId); //서버 고쳐지면 다시하는걸로
                    props.history.push('/')
                } else {
                    console.log(response.data)
                    alert('loginFailed')
                }
            })
            .catch(err => {
                console.log(err)
                alert("우리 서버가 장애에요")
            })
    }

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <form className="login-form" onSubmit={onSubmitHandler}>
                    <h2 className="login-form__title">Community</h2>
                    <input required name="id" className="login-form__input" placeholder="UserId" type="text" value={id} onChange={onChange} />
                    <input required name="password" className="login-form__input" placeholder="Password" type="password" value={password} onChange={onChange} />
                    <button className="login-button" type='submit' >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
