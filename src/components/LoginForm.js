import React, { useState } from 'react'
import '../style.css'
import { useDispatch } from 'react-redux'
import { login } from "../features/userSlice"


function LoginForm({Login, error, adminUser}) {

    const [details, setDetails] = useState({name: "", email: "", password: ""})
    const dispatch = useDispatch()

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
        dispatch(login({
            name: details.name,
            email: details.email,
            password: details.password,
        }))
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <h1><strong>Login</strong></h1>
                <div className="textbox">
                    <i className="fas fa-user"></i>
                    <label htmlFor="name"></label>
                    <input id="name"type="text" placeholder="Name" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="textbox">
                    <i className="fas fa-envelope"></i>
                    <label htmlFor="email" ></label>
                    <input  id="email" type="text" placeholder="Email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="textbox">
                    <i className="fas fa-lock"></i>
                    <label htmlFor="password"></label>
                    <input id="password" type="password" placeholder="Password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <div>
                    <input id="submit" type="submit" value="Login"/>
                </div>
            </div>
        </form>
    )
}

export default (LoginForm);
