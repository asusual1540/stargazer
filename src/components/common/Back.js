import React from "react"
import back_arrow from "../../static/images/back_arrow.svg"
import { Link } from "react-router-dom"

import "./back.scss"

const Back = ({ route }) => {
    return (
        <div className="back">
            <Link to={route}>
                <div className="box">
                    <img className="box_icon" src={back_arrow} alt="back" />
                    <h3 className="box_text">Back To Universe</h3>
                </div>
            </Link>
            <div></div>
        </div>

    )
}

export default Back