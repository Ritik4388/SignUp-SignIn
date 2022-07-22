import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signUp.css";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const account = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const refer = () => navigate("/signIn");

  const signUp = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post("http://localhost:7000/api/signUp", user)
        .then((res) => {
          alert(res.data.message);
          refer();
        })
        .catch((err) => console.log(err));
    } else {
      alert("Both password should match");
    }
  };
  return (
    <div className="signUp">
      <h1>Sign Up</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={account}
      ></input>
      <input
        type="email"
        name="email"
        value={user.email}
        placeholder="Your E-mail"
        onChange={account}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter Password"
        onChange={account}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-Enter Password"
        onChange={account}
      ></input>
      <div className="button" onClick={signUp}>
        Sign Up
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/signIn")}>
        Sign In
      </div>
    </div>
  );
};

export default SignUp;
