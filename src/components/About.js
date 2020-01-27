import React, { Component, Fragment } from "react"

import Back from "./common/Back"

import about_pl from "../static/images/about_pl.png"
import logo from "../static/images/logo.svg"

import fb_full from "../static/images/fb_full.svg"
import ytb from "../static/images/youtube.svg"

import "./about.scss"

class About extends Component {
    render() {
        return (
            <Fragment>
                <div className="about">
                    <div className="about_body">
                        <div className="about_body_left">
                            <Back route="/" />
                            <div></div>
                        </div>
                        <div className="about_body_right">
                            <div></div>
                            <img className="about_body_right_logo" src={logo} alt="logo" />
                            <div className="about_body_right_desc">
                                <p className="about_body_right_desc_header">Richard McClintock, a Latin professor</p>
                                <p className="about_body_right_desc_text">
                                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            </p>
                                <p className="about_body_right_desc_text">
                                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.

                                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered ney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            </p>
                                <div className="about_body_right_icons">
                                    <img className="about_body_right_icons_fb" src={fb_full} alt="facebook" />
                                    <img className="about_body_right_icons_ytb" src={ytb} alt="youtube" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <img className="about_planet" src={about_pl} alt="about_planet" />
            </Fragment>
        )
    }
}

export default About