import React, { Component } from "react"

import fb from "../static/images/facebook.svg"
import twt from "../static/images/twitter.svg"
import ytb from "../static/images/youtube.svg"
import scld from "../static/images/soundcloud.svg"
import vol from "../static/images/volume.svg"

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-first">
                    <h5>PRIVACY</h5>
                    <h5>COMMUNITY</h5>
                    <h5>HELP</h5>
                </div>
                <div className="footer-second">
                    <h5>FOLLOW US</h5>
                    <img src={fb} alt="facebook" />
                    <img src={twt} alt="twitter" />
                    <img src={ytb} alt="youtube" />
                    <img src={scld} alt="soundcloud" />
                </div>
                <div className="footer-third">
                    <div></div>
                    <div></div>
                    <div className="copyright-container">
                        <h5>ALL WORK COPYRIGHT OF STARGAZER <span>&copy;</span> 2020-2022 </h5>
                        <img className="volume" src={vol} alt="volume" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer