import React, { Component } from "react"
import { Link } from "react-router-dom"

import logo from "../static/images/logo.svg"

class FrontPage extends Component {
    render() {
        return (
            <div className="main-container">
                <img src={logo} alt="logo" />
                <div className="main-buttons">
                    <Link to="/events"><h4>EVENTS</h4></Link><div></div>
                    <Link to="/gallery"><h4>GALLERY</h4></Link><div></div>
                    <Link to="/clients"><h4>CLIENTS</h4></Link><div></div>
                    <Link to="/about"><h4>ABOUT</h4></Link><div></div>
                    <Link to="/contact"><h4>CONTACT</h4></Link><div></div>
                </div>
            </div>
        )
    }
}

export default FrontPage