import React, { Component } from "react"

import Back from "./common/Back"

import "./contact.scss"

class Contacts extends Component {
    render() {
        return (
            <div className="contact">
                <div className="contact_back">
                    <Back route="/" />
                </div>
                <div className="contact_all">
                    <h2>CONTACT US</h2>
                </div>
            </div>
        )
    }
}

export default Contacts