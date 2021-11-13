import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./signup.css"

export const Signup = () => {
    const navigate = useNavigate()

    const [formSteps, setFormSteps] = useState(0);
    const date = new Date()
    const [user, setUser] = useState({
        academicDetails: {
            institute: "",
            percentage: "",
            year: ""
        }
        ,
        personalDetails: {
            firstName: "",
            lastName: "",
            schoolName: "",
            city: "",
        }
        ,
        contactDetails: {
            contactNumber: "",
            email: "",
        }
        ,
        submit: {
            password: "",
            confirmPassword: "",
        }
    });
    const handleChange = (id, name, value) => {
        setUser({
            ...user,
            ...user[id][name] = value

        })
    }
    const handleNextButton = () => {
        if (formSteps >= 3) {
            setFormSteps(3)
        } else {
            setFormSteps(val => val + 1)
        }
    }
    const handlePreviousButton = () => {
        if (formSteps <= 0) {
            setFormSteps(0);
        } else {
            setFormSteps(val => val - 1)
        }
    }

    const checkPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(user.contactDetails.contactNumber)
    const checkEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user.contactDetails.email)
    const checkConfirmPassword = user.submit.password === user.submit.confirmPassword
    const handleSubmit = () => {
        setUser({
            academicDetails: {
                institute: "",
                percentage: "",
                year: ""
            }
            ,
            personalDetails: {
                firstName: "",
                lastName: "",
                schoolName: "",
                city: "",
            }
            ,
            contactDetails: {
                contactNumber: "",
                email: "",
            }
            ,
            submit: {
                password: "",
                confirmPassword: "",
            }
        })
        navigate("/")
    }

    const rightSide = (
        <div className="sign-right-side">
            <div className="right-content">
                <h1>Hello, Student!</h1>
                <p>If you have already filled the signup form once, just click on login button and start learning.</p>
                <NavLink to="/">
                    <button className="signup-btn students">Login For Students</button>
                </NavLink>
            </div>
        </div>
    )
    const checkAcademicDetail = user.academicDetails.percentage > 100 || user.academicDetails.year > date.getFullYear();
    return (
        <div className="main-container">
            <div className="form-container">
                <div className="sign-left-side">
                    <div className="sign-left-content">
                        <h1>Sign Up</h1>
                        {/* progress bar */}
                        <div className="progressbar">
                            <div className={formSteps >= 0 ? "progress-step progress-step-active" : "progress-step"} data-title="Academics"></div>
                            <div className={formSteps >= 1 ? "progress-step progress-step-active" : "progress-step"} data-title="Personal Details"></div>
                            <div className={formSteps >= 2 ? "progress-step progress-step-active" : "progress-step"} data-title="Contact"></div>
                            <div className={formSteps >= 3 ? "progress-step progress-step-active" : "progress-step"} data-title="Submit"></div>
                        </div>
                        {/* steps */}

                        {/* academic */}
                        <div className={formSteps === 0 ? "form-step active" : "form-step"} >
                            <h2 className="head">Academics Details :</h2>
                            <div className="field-container">
                                <input type="text"
                                    className="input"
                                    placeholder="Institue Name"
                                    id="academicDetails"
                                    name="institute"
                                    value={user.academicDetails.institute}
                                    onChange={(e) => handleChange(e.target.id, e.target.name, e.target.value)}

                                />
                                <input type="number"
                                    className={user.academicDetails.percentage > 100 ? "input error" : "input"}
                                    id="academicDetails"
                                    name="percentage"
                                    placeholder="Percentage"
                                    value={user.academicDetails.percentage}
                                    onChange={(e) => handleChange(e.target.id, e.target.name, e.target.value)}

                                />
                                <input type="number"
                                    className={user.academicDetails.year > date.getFullYear() || user.academicDetails.year < 1 ? "input error" : "input"}
                                    id="academicDetails"
                                    name="year"
                                    placeholder="Year"
                                    value={user.academicDetails.year}
                                    onChange={(e) => handleChange(e.target.id, e.target.name, e.target.value)}
                                />
                            </div>
                            <button disabled={checkAcademicDetail} className="next-btn" onClick={handleNextButton}>Next</button>
                        </div>

                        {/* personal */}
                        <div className={formSteps === 1 ? "form-step active" : "form-step"} >
                            <h2 className="head">Personal Details :</h2>
                            <div className="field-container">
                                <input type="text"
                                    className="input"
                                    placeholder="Firse Name"
                                    id="personalDetails"
                                    name="firstName"
                                    value={user.personalDetails.firstName}
                                    onChange={(e) => handleChange(e.target.id, e.target.name, e.target.value)}
                                />
                                <input type="text"
                                    className="input"
                                    placeholder="Last Name"
                                    id="personalDetails"
                                    name="lastName"
                                    value={user.personalDetails.lastName}
                                    onChange={(e) => handleChange(e.target.id, e.target.name, e.target.value)}
                                />
                                <input type="text"
                                    className="input"
                                    placeholder="School Name"
                                    id="personalDetails"
                                    name="schoolName"
                                    value={user.personalDetails.schoolName}
                                    onChange={(e) => handleChange(e.target.id, e.target.name, e.target.value)} />
                                <input type="text"
                                    className="input"
                                    placeholder="City Name"
                                    id="personalDetails"
                                    name="city"
                                    value={user.personalDetails.city}
                                    onChange={(e) => handleChange(e.target.id, e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="button-container">
                                <button className="next-btn" onClick={handlePreviousButton}>Previous</button>
                                <button className="next-btn" onClick={handleNextButton}>Next</button>
                            </div>
                        </div>

                        {/* contact */}
                        <div className={formSteps === 2 ? "form-step active" : "form-step"} >
                            <h2 className="head">Contact Details :</h2>
                            <div className="field-container contact">
                                <input type="text"
                                    className={checkPhone ? "input contact-input" : "input contact-input error"}
                                    placeholder="Contact Number"
                                    id="contactDetails"
                                    name="contactNumber"
                                    value={user.contactDetails.contactNumber}
                                    onChange={(e) => handleChange(e.target.id, e.target.name, e.target.value)}
                                />
                                <input type="email"
                                    className={checkEmail ? "input contact-input" : "input contact-input error"}
                                    placeholder="Email"
                                    id="contactDetails"
                                    name="email"
                                    value={user.contactDetails.email}
                                    onChange={(e) => handleChange(e.target.id, e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="button-container">
                                <button className="next-btn" onClick={handlePreviousButton}>Previous</button>
                                <button className="next-btn" disabled={!checkPhone || !checkEmail} onClick={handleNextButton}>Next</button>
                            </div>
                        </div>

                        {/* submit */}
                        <div className={formSteps === 3 ? "form-step active" : "form-step"} >
                            <h2 className="head">Create Password :</h2>
                            <div className="field-container contact">
                                <input type="password"
                                    className="input contact-input"
                                    placeholder="Password"
                                    id="submit"
                                    name="password"
                                    value={user.submit.password}
                                    onChange={(e) => handleChange(e.target.id, e.target.name, e.target.value)}
                                />
                                <input type="password"
                                    className={checkConfirmPassword ? "input contact-input" : "input contact-input error"}
                                    placeholder="Confirm Password"
                                    id="submit"
                                    name="confirmPassword"
                                    alue={user.submit.confirmPassword}
                                    onChange={(e) => handleChange(e.target.id, e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="button-container">
                                <button className="next-btn" onClick={handlePreviousButton}>Previous</button>
                                <button className="next-btn" disabled={!checkConfirmPassword} onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                {rightSide}
            </div>
        </div>
    )
}
