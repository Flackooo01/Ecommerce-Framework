import { Link } from 'react-router-dom';
import './Css/LoginSingup.css';

const LoginSignup = () => {
    return (
        <>
        <div className="center">
            <div className="container-form">
                <div className="text">Register</div>
                <form action="#">
                    <div className="data">
                        <label >Username</label>
                        <input type="text" required/>
                    </div>
                    <div className="data">
                        <label >Email</label>
                        <input type="email" required/>
                    </div>
                    <div className="data">
                        <label >Password</label>
                        <input type="password" required/>
                    </div>
                    <div className="data">
                        <label >Confirm Password</label>
                        <input type="password" required/>
                    </div>
                    <div className="btn-login">
                        <div className="inner"></div>
                        <button type="submit">Register</button>
                    </div>
                    <div className="signup-link">You Already have an account?<Link to='/Login'>Login now</Link></div>
                </form>
            </div>
        </div>
        </>
    )
}

export default LoginSignup