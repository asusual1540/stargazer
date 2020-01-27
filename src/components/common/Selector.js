import React, { Component } from "react"

import arrow from "../../static/images/select_arrow.svg"

import "./selector.scss"

class Selector extends Component {

    state = {
        status: false
    }

    handleToggle = () => {
        const { status } = this.state
        this.setState({ status: !status })
    }
    handleSelect = (option, index) => {
        this.setState({ status: false })
        this.props.do_select(option, index)
    }


    render() {

        const { data, selected, title } = this.props
        const { status } = this.state
        return (
            <div onClick={this.handleToggle} className="select">
                <div className="select_box">
                    {(data && selected !== null) ?
                        <p className="select_box_title">{data[selected]}</p> :
                        <p className="select_box_title">{title}</p>
                    }
                    <div className="select_box_icon">
                        {status ?
                            <img className="select_box_icon_up" src={arrow} alt="down" /> :
                            <img className="select_box_icon_down" src={arrow} alt="down" />
                        }
                    </div>
                </div>
                {status && <div className={"select_options"}>
                    {data && data.map((option, index) => (
                        <div onClick={() => this.handleSelect(option, index)} key={index} className="select_options_opt">
                            <p className="select_options_opt_title">{option}</p>
                            <div></div>
                        </div>
                    ))}
                </div>}
            </div>

        )
    }
}

export default Selector