// import React from 'react'
import './Css/LoginSingup.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
        <div className="center">
            <div className="container-form">
                <div className="text">Login</div>
                <form action="#">
                    <div className="data">
                        <label >Username</label>
                        <input type="text" required/>
                    </div>

                    <div className="data">
                        <label >Password</label>
                        <input type="password" required/>
                    </div>

                    <div className="btn-login">
                        <div className="inner"></div>
                        <button type="submit">Login</button>
                    </div>
                    <div className="signup-link">You dont have an account?<Link to='/Signup'>Signup now</Link></div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login