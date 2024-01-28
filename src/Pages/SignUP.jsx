import React from "react";
import cart from "../Images/mobile-app.png";

import { Link } from "react-router-dom";
const Signup = () => {
    return(
        <div>
            <div className="Login">
           <div className="LogBox">
            <br/>
            <form>
                <div className="logsignButton">
                <Link to="/login"><button className="logbut2">LOGIN</button></Link>
                <Link to="/signup"><button className="signbut2">SIGNUP</button></Link><br/>
                </div>
                <div className="SignContents">
                <input type="text" placeholder="UserName"></input><br/>
                <input type="password" placeholder="Password"></input><br/>
                <input type="email" placeholder="email"></input><br/>
                <input type="number" placeholder="PhNumber"></input><br/>
                <input type="password" placeholder="ConfirmPassword"></input><br/>

                <Link to="/login"><button>CreateAccount</button></Link>
                </div>
               
            </form></div>
            <img src={cart} alt="cart"/>
        </div>
        </div>
    )
}
export default Signup;