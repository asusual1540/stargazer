import React, { Component } from "react"

import Back from "./common/Back"

import "./clients.scss"

class Clients extends Component {
    render() {
        return (
            <div className="clients">
                <div className="clients_back">
                    <Back route="/stargazer" />
                </div>
                <div className="clients_all">
                    <h2>Our Clients</h2>
                    <p>Many desktop publishing packages and web page editors now</p>
                </div>
            </div>
        )
    }
}

export default Clients