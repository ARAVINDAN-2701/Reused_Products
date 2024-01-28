import React from "react";
import "../CSS/App.css";
import cart from "../Images/mobile-app.png";
import { Link } from "react-router-dom";
const Login = () => {
    return(
        <div className="Login">
           
           <div className="LogBox">
            <br/>
            <form>
                <div className="logsignButton">
                <Link to="/login"><button className="logbut1">LOGIN</button></Link>
                <Link to="/signup"><button className="signbut1">SIGNUP</button></Link><br/>
                </div>
                <div className="loginContents">
                <input type="text" placeholder="UserName"></input><br/>
                <input type="password" placeholder="Password"></input><br/>
               <Link to="/"> <button>Login</button></Link><br/>
                <h5><a href="/login">Forgot password?</a></h5><br/>
                </div> 
               
            </form></div>
            <img src={cart} alt="cart"/>
        </div>
    )
}
export default Login;