import React from "react";
import s from './Login.module.css';

const Login = (props) =>{
    return(
        <div className={s.loginBlock}>
            <input type='text' placeholder="username" />
            <input type='text' placeholder="password" />
            <button>Login</button>
        </div>
    )
}

export default Login