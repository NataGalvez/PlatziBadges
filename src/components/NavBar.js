import React from "react"
import logo from "../assets/logo-nav.svg"
import "./styles/NavBar.css"
import { Link } from "react-router-dom"


class NavBar extends React.Component{
    render() {
        return (
            <div className="Navbar"> 
            <div className="container-fluid">
                <Link className="Navbar__brand" to = "/">
                    <img src={logo} alt="" className="Navbar__brand-logo"/>
                    <p><span className="font-weight-light">Platzi</span><span className="font-weight-bold">Conf</span></p>
                </Link>
                </div>
            </div>
        )
    }
}

export default NavBar