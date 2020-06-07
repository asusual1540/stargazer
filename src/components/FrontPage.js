import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"

import logo from "../static/images/logo.svg"
import planets from "../static/images/planets.png"

import "./frontPage.scss"

class FrontPage extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <div className="main-container">
                    <img src={logo} alt="logo" />
                    <div className="main-buttons">
                        <Link to="/stargazer/events/"><h4>EVENTS</h4></Link><div></div>
                        <Link to="/stargazer/gallery/"><h4>GALLERY</h4></Link><div></div>
                        <Link to="/stargazer/clients/"><h4>CLIENTS</h4></Link><div></div>
                        <Link to="/stargazer/about/"><h4>ABOUT</h4></Link><div></div>
                        <Link to="/stargazer/contact/"><h4>CONTACT</h4></Link><div></div>
                    </div>

                </div>
                <img src={planets} className="planets" alt="planets" />
            </Fragment>
        )
    }
}

export default FrontPage