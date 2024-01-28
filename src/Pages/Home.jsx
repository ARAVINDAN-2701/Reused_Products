import React from "react";
import "../CSS/Home.css"
import search from "../Images/search.png"
const Home = () => {
    return(
        <div className="Home">
            <form className="search">
                <input type="text" placeholder="SEARCH"></input>
                <button><img src={search}/></button>
            </form>
        </div>
    )
}
export default Home;