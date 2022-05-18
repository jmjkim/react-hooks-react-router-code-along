import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  
  export default function NavBar() {
    return (
      <div>
        <NavLink exact to="/" style={linkStyles} activeStyle={{background: "darkblue",}}>Home</NavLink>
        <NavLink exact to="/about" style={linkStyles} activeStyle={{background: "darkblue",}}>About</NavLink>
        <NavLink exact to="/login" style={linkStyles} actiavteStyle={{background: "darkblue",}}>Login</NavLink>
      </div>
    );
  }