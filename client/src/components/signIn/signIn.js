import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signIn.css';
import axios from "axios";

const SignIn = ({setLoginUser}) => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const refer = () => navigate("/")

    const logIn = () => {
        const { email, password } = user;
        if(email && password ){
            axios.post("http://localhost:7000/api/signIn", user)
            .then(res => {
                alert(res.data.message)
                console.log(res.data.user);
                setLoginUser(res.data.user)
                refer()
            })
            .catch((err) => {
                console.log(err)
            })
        }else{
            alert("All fields required")
        }
    }

    return(
        <div className="signIn">
            <h1>Sign In</h1>
            <input type="email" multiple placeholder="Enter your E-mail" name="email" value={user.email} onChange={handleChange}></input>
            <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handleChange}></input>
            <div className="button" onClick={logIn}>Sign In</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/signUp")}>Sign Up</div>
        </div>
    )
}

export default SignIn;