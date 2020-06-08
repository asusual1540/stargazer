import React, { Component, Fragment } from "react"

import Back from "./common/Back"
import Selector from "./common/Selector"

import gallery_1 from "../static/images/gallery_1.png"
import gallery_2 from "../static/images/gallery_2.png"
import gallery_3 from "../static/images/gallery_3.png"

import location from "../static/images/location.svg"
import back_arrow from "../static/images/back_arrow.svg"

import "./gallery.scss"

class Gallery extends Component {
    state = {
        event_type: ["Concert Tours", "Music Festivals", "Jazz Events", "Television Specials"],
        selected: null,
        trans_x: 0,
    }

    do_select = (option, index) => {
        this.setState({ selected: index })
    }

    go_left = () => {
        let { trans_x } = this.state
        if (trans_x < 0) {
            trans_x += 520
            this.setState({ trans_x })
        }
    }
    go_right = () => {
        let { trans_x } = this.state
        if (trans_x > -1560) {
            trans_x -= 520
            this.setState({ trans_x })
        }
    }
    render() {
        const { event_type, selected, trans_x } = this.state
        return (
            <Fragment>
                <div className="gallery_back">
                    <Back route="/" />
                </div>
                <div className="gallery_selector">
                    <Selector title="EVENT TYPES" do_select={this.do_select} data={event_type} selected={selected} />
                </div>
                <div className="gallery_bottom_arrows">
                    <div onClick={this.go_left} className="gallery_left">
                        <img src={back_arrow} alt="back" />
                        <p>PREVIOUS</p>
                    </div>
                    <div onClick={this.go_right} className="gallery_right">
                        <p>NEXT</p>
                        <img src={back_arrow} alt="back" />
                    </div>
                </div>
                <div style={{ transform: `translateX(${trans_x}px)` }} className="gallery">

                    <div className="gallery_box">
                        <div className="gallery_desc">
                            <h2>Kelowna Concert and Live Music Events</h2>
                            <div className="gallery_desc_icon">
                                <div className="gallery_desc_icon_body">
                                    <img className="gallery_desc_icon_body_img" src={location} alt="location" />
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <img src={gallery_1} alt="gallery-1" />
                    </div>
                    <div className="gallery_box">
                        <div className="gallery_desc">
                            <h2>Kelowna Concert and Live Music Events</h2>
                            <div className="gallery_desc_icon">
                                <div className="gallery_desc_icon_body">
                                    <img className="gallery_desc_icon_body_img" src={location} alt="location" />
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <img src={gallery_2} alt="gallery-2" />
                    </div>
                    <div className="gallery_box">
                        <div className="gallery_desc">
                            <h2>Kelowna Concert and Live Music Events</h2>
                            <div className="gallery_desc_icon">
                                <div className="gallery_desc_icon_body">
                                    <img className="gallery_desc_icon_body_img" src={location} alt="location" />
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <img src={gallery_3} alt="gallery-3" />
                    </div>
                    <div className="gallery_box">
                        <div className="gallery_desc">
                            <h2>Kelowna Concert and Live Music Events</h2>
                            <div className="gallery_desc_icon">
                                <div className="gallery_desc_icon_body">
                                    <img className="gallery_desc_icon_body_img" src={location} alt="location" />
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <img src={gallery_1} alt="gallery-1" />
                    </div>
                    <div className="gallery_box">
                        <div className="gallery_desc">
                            <h2>Kelowna Concert and Live Music Events</h2>
                            <div className="gallery_desc_icon">
                                <div className="gallery_desc_icon_body">
                                    <img className="gallery_desc_icon_body_img" src={location} alt="location" />
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <img src={gallery_2} alt="gallery-2" />
                    </div>
                    <div className="gallery_box">
                        <div className="gallery_desc">
                            <h2>Kelowna Concert and Live Music Events</h2>
                            <div className="gallery_desc_icon">
                                <div className="gallery_desc_icon_body">
                                    <img className="gallery_desc_icon_body_img" src={location} alt="location" />
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <img src={gallery_3} alt="gallery-3" />
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Gallery