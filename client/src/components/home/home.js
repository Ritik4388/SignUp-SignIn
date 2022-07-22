import React from "react";
import { useNavigate } from "react-router-dom";
import './home.css';

const Home = ({name, setLoginUser}) => {
    const navigate = useNavigate();
    return(
        <div className="home">
            <h1>Hello! {name.toUpperCase()}</h1>
            <div className="button" onClick={() => {
                navigate("/signIn")
                setLoginUser({});
            }}>LogOut</div>
        </div>
    )
}

export default Home;