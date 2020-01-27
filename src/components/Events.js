import React, { Component } from "react"
import Back from "./common/Back"
import Selector from "./common/Selector"
import DatePicker from "./common/DatePicker"

import back_arrow from "../static/images/back_arrow.svg"
import location from "../static/images/location.svg"
import planet1 from "../static/images/planet-1.png"

import "./events.scss"

class Events extends Component {
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
            trans_x += 400
            this.setState({ trans_x })
        }
    }
    go_right = () => {
        let { trans_x } = this.state
        if (trans_x > -2200) {
            trans_x -= 400
            this.setState({ trans_x })
        }
    }

    render() {
        const { event_type, selected, trans_x } = this.state
        return (
            <div className="event">
                <div className="event_head">
                    <Back route="/" />
                    <div className="event_head_controls">
                        <Selector title="EVENT TYPES" do_select={this.do_select} data={event_type} selected={selected} />
                        <DatePicker />
                    </div>
                </div>
                <div className="event_title">
                    <div>
                        <p className="event_title_t">RECENT EVENTS</p>
                        <p className="event_title_desc">Many desktop publishing packages and web page editors now</p>
                    </div>
                </div>
                <div className="event_body">
                    <div className="event_body_top">
                        <div></div>
                        <div className="event_body_top_actions">
                            <img onClick={this.go_left} src={back_arrow} alt="backward" />
                            <img onClick={this.go_right} className="event_body_top_actions_forward" src={back_arrow} alt="forward" />
                        </div>
                    </div>
                    <div className="event_body_elements">

                        <div style={{ transform: `translateX(${trans_x}px)` }} className="event_body_elements_el">
                            <div className="event_body_elements_el_details">
                                <div className="event_body_elements_el_details_header">
                                    <div className="event_body_elements_el_details_header_upcoming">UPCOMING EVENT</div>
                                    <div className="event_body_elements_el_details_header_date">
                                        <h3>26 <span>November</span></h3>
                                        <h2>MULTI DAY EVENT</h2>
                                    </div>
                                </div>
                                <div className="event_body_elements_el_details_body">
                                    <p className="event_body_elements_el_details_body_desc">Page editors now use Lorem Ipsum
                                        as their default model text. Page
                                        editors now use Lorem Ipsum
                                        as their default model text
                                    </p>
                                </div>
                                <div className="event_body_elements_el_details_footer">
                                    <div className="event_body_elements_el_details_footer_icon">
                                        <img src={location} alt="location" />
                                    </div>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <img className="event_body_elements_el_img" src={planet1} alt="planet" />
                        </div>
                        <div style={{ transform: `translateX(${trans_x}px)` }} className="event_body_elements_el">
                            <div style={{ backgroundColor: "rgba(255, 255, 255, .07)" }} className="event_body_elements_el_details">
                                <div className="event_body_elements_el_details_header">
                                    <div></div>
                                    <div className="event_body_elements_el_details_header_date">
                                        <h3>26 <span>November</span></h3>
                                        <h2>MULTI DAY EVENT</h2>
                                    </div>
                                </div>
                                <div className="event_body_elements_el_details_body">
                                    <p className="event_body_elements_el_details_body_desc">Page editors now use Lorem Ipsum
                                        as their default model text. Page
                                        editors now use Lorem Ipsum
                                        as their default model text
                                    </p>
                                </div>
                                <div className="event_body_elements_el_details_footer">
                                    <div className="event_body_elements_el_details_footer_icon">
                                        <img src={location} alt="location" />
                                    </div>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <img className="event_body_elements_el_img" src={planet1} alt="planet" />
                        </div>

                        <div style={{ transform: `translateX(${trans_x}px)` }} className="event_body_elements_el">
                            <div style={{ backgroundColor: "rgba(255, 255, 255, .07)" }} className="event_body_elements_el_details">
                                <div className="event_body_elements_el_details_header">
                                    <div></div>
                                    <div className="event_body_elements_el_details_header_date">
                                        <h3>26 <span>November</span></h3>
                                        <h2>MULTI DAY EVENT</h2>
                                    </div>
                                </div>
                                <div className="event_body_elements_el_details_body">
                                    <p className="event_body_elements_el_details_body_desc">Page editors now use Lorem Ipsum
                                        as their default model text. Page
                                        editors now use Lorem Ipsum
                                        as their default model text
                                    </p>
                                </div>
                                <div className="event_body_elements_el_details_footer">
                                    <div className="event_body_elements_el_details_footer_icon">
                                        <img src={location} alt="location" />
                                    </div>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <img className="event_body_elements_el_img" src={planet1} alt="planet" />
                        </div>
                        <div style={{ transform: `translateX(${trans_x}px)` }} className="event_body_elements_el">
                            <div style={{ backgroundColor: "rgba(255, 255, 255, .07)" }} className="event_body_elements_el_details">
                                <div className="event_body_elements_el_details_header">
                                    <div></div>
                                    <div className="event_body_elements_el_details_header_date">
                                        <h3>26 <span>November</span></h3>
                                        <h2>MULTI DAY EVENT</h2>
                                    </div>
                                </div>
                                <div className="event_body_elements_el_details_body">
                                    <p className="event_body_elements_el_details_body_desc">Page editors now use Lorem Ipsum
                                        as their default model text. Page
                                        editors now use Lorem Ipsum
                                        as their default model text
                                    </p>
                                </div>
                                <div className="event_body_elements_el_details_footer">
                                    <div className="event_body_elements_el_details_footer_icon">
                                        <img src={location} alt="location" />
                                    </div>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <img className="event_body_elements_el_img" src={planet1} alt="planet" />
                        </div>
                        <div style={{ transform: `translateX(${trans_x}px)` }} className="event_body_elements_el">
                            <div style={{ backgroundColor: "rgba(255, 255, 255, .07)" }} className="event_body_elements_el_details">
                                <div className="event_body_elements_el_details_header">
                                    <div></div>
                                    <div className="event_body_elements_el_details_header_date">
                                        <h3>26 <span>November</span></h3>
                                        <h2>MULTI DAY EVENT</h2>
                                    </div>
                                </div>
                                <div className="event_body_elements_el_details_body">
                                    <p className="event_body_elements_el_details_body_desc">Page editors now use Lorem Ipsum
                                        as their default model text. Page
                                        editors now use Lorem Ipsum
                                        as their default model text
                                    </p>
                                </div>
                                <div className="event_body_elements_el_details_footer">
                                    <div className="event_body_elements_el_details_footer_icon">
                                        <img src={location} alt="location" />
                                    </div>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <img className="event_body_elements_el_img" src={planet1} alt="planet" />
                        </div>
                        <div style={{ transform: `translateX(${trans_x}px)` }} className="event_body_elements_el">
                            <div style={{ backgroundColor: "rgba(255, 255, 255, .07)" }} className="event_body_elements_el_details">
                                <div className="event_body_elements_el_details_header">
                                    <div></div>
                                    <div className="event_body_elements_el_details_header_date">
                                        <h3>26 <span>November</span></h3>
                                        <h2>MULTI DAY EVENT</h2>
                                    </div>
                                </div>
                                <div className="event_body_elements_el_details_body">
                                    <p className="event_body_elements_el_details_body_desc">Page editors now use Lorem Ipsum
                                        as their default model text. Page
                                        editors now use Lorem Ipsum
                                        as their default model text
                                    </p>
                                </div>
                                <div className="event_body_elements_el_details_footer">
                                    <div className="event_body_elements_el_details_footer_icon">
                                        <img src={location} alt="location" />
                                    </div>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <img className="event_body_elements_el_img" src={planet1} alt="planet" />
                        </div>
                        <div style={{ transform: `translateX(${trans_x}px)` }} className="event_body_elements_el">
                            <div style={{ backgroundColor: "rgba(255, 255, 255, .07)" }} className="event_body_elements_el_details">
                                <div className="event_body_elements_el_details_header">
                                    <div></div>
                                    <div className="event_body_elements_el_details_header_date">
                                        <h3>26 <span>November</span></h3>
                                        <h2>MULTI DAY EVENT</h2>
                                    </div>
                                </div>
                                <div className="event_body_elements_el_details_body">
                                    <p className="event_body_elements_el_details_body_desc">Page editors now use Lorem Ipsum
                                        as their default model text. Page
                                        editors now use Lorem Ipsum
                                        as their default model text
                                    </p>
                                </div>
                                <div className="event_body_elements_el_details_footer">
                                    <div className="event_body_elements_el_details_footer_icon">
                                        <img src={location} alt="location" />
                                    </div>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <img className="event_body_elements_el_img" src={planet1} alt="planet" />
                        </div>
                        <div style={{ transform: `translateX(${trans_x}px)` }} className="event_body_elements_el">
                            <div style={{ backgroundColor: "rgba(255, 255, 255, .07)" }} className="event_body_elements_el_details">
                                <div className="event_body_elements_el_details_header">
                                    <div></div>
                                    <div className="event_body_elements_el_details_header_date">
                                        <h3>26 <span>November</span></h3>
                                        <h2>MULTI DAY EVENT</h2>
                                    </div>
                                </div>
                                <div className="event_body_elements_el_details_body">
                                    <p className="event_body_elements_el_details_body_desc">Page editors now use Lorem Ipsum
                                        as their default model text. Page
                                        editors now use Lorem Ipsum
                                        as their default model text
                                    </p>
                                </div>
                                <div className="event_body_elements_el_details_footer">
                                    <div className="event_body_elements_el_details_footer_icon">
                                        <img src={location} alt="location" />
                                    </div>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <img className="event_body_elements_el_img" src={planet1} alt="planet" />
                        </div>
                        <div style={{ transform: `translateX(${trans_x}px)` }} className="event_body_elements_el">
                            <div style={{ backgroundColor: "rgba(255, 255, 255, .07)" }} className="event_body_elements_el_details">
                                <div className="event_body_elements_el_details_header">
                                    <div></div>
                                    <div className="event_body_elements_el_details_header_date">
                                        <h3>26 <span>November</span></h3>
                                        <h2>MULTI DAY EVENT</h2>
                                    </div>
                                </div>
                                <div className="event_body_elements_el_details_body">
                                    <p className="event_body_elements_el_details_body_desc">Page editors now use Lorem Ipsum
                                        as their default model text. Page
                                        editors now use Lorem Ipsum
                                        as their default model text
                                    </p>
                                </div>
                                <div className="event_body_elements_el_details_footer">
                                    <div className="event_body_elements_el_details_footer_icon">
                                        <img src={location} alt="location" />
                                    </div>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <img className="event_body_elements_el_img" src={planet1} alt="planet" />
                        </div>
                        <div style={{ transform: `translateX(${trans_x}px)` }} className="event_body_elements_el">
                            <div style={{ backgroundColor: "rgba(255, 255, 255, .07)" }} className="event_body_elements_el_details">
                                <div className="event_body_elements_el_details_header">
                                    <div></div>
                                    <div className="event_body_elements_el_details_header_date">
                                        <h3>26 <span>November</span></h3>
                                        <h2>MULTI DAY EVENT</h2>
                                    </div>
                                </div>
                                <div className="event_body_elements_el_details_body">
                                    <p className="event_body_elements_el_details_body_desc">Page editors now use Lorem Ipsum
                                        as their default model text. Page
                                        editors now use Lorem Ipsum
                                        as their default model text
                                    </p>
                                </div>
                                <div className="event_body_elements_el_details_footer">
                                    <div className="event_body_elements_el_details_footer_icon">
                                        <img src={location} alt="location" />
                                    </div>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <img className="event_body_elements_el_img" src={planet1} alt="planet" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events