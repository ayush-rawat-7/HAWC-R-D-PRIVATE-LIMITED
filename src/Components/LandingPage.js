import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import google from "../images/google.svg.png"
import facebook from "../images/facebook.png"
export const LandingPage = () => {

    const [user, setUser] = useState(
        {
            email: "",
            password: "",
        }
    )

    const handleSubmit = () => {
        console.log(user.email)
        console.log(user.password)
    }
    return (
        <div className="main-container">
            <div className="form-container">
                <div className="left-side">
                    <div className="left-content">
                        <h1>Here for the first time?</h1>
                        <p>Let's interact! Let us know you! And, Let us surprise you by opening the pandora box of infinite knowledge and curiosity.</p>
                        <NavLink to="/signup">
                            <button className="signup-btn">Sign Up</button>
                        </NavLink>
                    </div>
                </div>
                <div className="right-side">
                    <div className="right-content">
                        <h1>Welcome Back!</h1>
                        <input type="email" className="input" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Email Id" />
                        <input type="password" className="input" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} id="pass" placeholder="Password" />
                        <button className="signup-btn login" onClick={handleSubmit}>Login</button>
                        <NavLink to="#">
                            <p>Forget Password?</p>
                        </NavLink>
                        <h3>Quick Login With:</h3>
                        <div className="icon-container">
                            <NavLink to="#">
                                <img className="icon" src={facebook} alt="Facebook" />
                            </NavLink>
                            <NavLink className="icon-link" to="#">
                                <img className="icon" src={google} alt="Google" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
