import React from "react";
import '../CSS/Navbar.css';
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div>
            <ol class="navbar">
                <li className="nav1"><Link to="/" className="nav">HOME</Link></li>
                <li className="nav2"><Link to="/sell" className="nav">SELL</Link></li>
                <li className="nav3"><Link to="/login" className="nav">LOGIN</Link></li>
            </ol>
        </div>
    )
}
export default Navbar;