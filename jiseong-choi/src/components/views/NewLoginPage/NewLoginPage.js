import axios from 'axios';
import React, { useState } from 'react'
import './NewLoginPage'

function NewLoginPage(props) {

    const [Inputs, setInputs] = useState({
        id: '',
        password:''
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
                if (response.data.success) {
                    console.log(response.data)
                    props.history.push('/')
                } else {
                    console.log(response.data)
                    alert('loginFailed')
                }
            })
    }

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <form className="login-form" onSubmit={onSubmitHandler}>
                    <h2 className="login-form__title">Community</h2>
                    <input name="id" className="login-form__input" placeholder="UserId" type="text" value={id} onChange={onChange} />
                    <input name="password" className="login-form__input" placeholder="Password" type="password" value={password} onChange={onChange} />
                    <button className="login-button" type='submit' >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewLoginPage
