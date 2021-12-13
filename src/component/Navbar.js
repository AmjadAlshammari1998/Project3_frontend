
import React from 'react'
import { Link } from "react-router-dom";
import {SignUp} from "../component/SignUp";
import {logIn} from "../component/LogIn";
import Home from "../component/Home";
import "../App.css";
export default function Navbar() {
    return (
        <div id="Nav">
            <Link to="/SignUp" >SignUp</Link> 
            <Link to="/logIn">logIn</Link>
            <Link to="/Home">Home</Link>
        </div>
    )
}
