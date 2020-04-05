import React from "react"
import { NavLink } from "react-router-dom";

function Header(){
    return (
        <div className="bg-top">
            <div className="center ">
            <div className="name">
            <h1>Tiago&nbsp;Patricio</h1>
            <p>IT&nbsp;Engineer,&nbsp;Pinhel&nbsp;GUARDA</p>
            </div>
            <nav className="menu">
            <NavLink className="nav" exact to="/">Home</NavLink>
            <NavLink className="nav" to="/education">Education</NavLink>
            <NavLink className="nav" to="/experience">Experience</NavLink>
            {/*<NavLink className="nav" to="/life">Life</NavLink>*/}
            <NavLink className="nav" to="/contact">Contact</NavLink>
            </nav>
      </div>

        </div>
        
        
    )
}

export default Header