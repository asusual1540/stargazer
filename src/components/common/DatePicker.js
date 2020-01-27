import React, { Component } from "react"
import calendar from "../../static/images/calendar.svg"

import "./datePicker.scss"

class DatePicker extends Component {
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
        const { status } = this.state
        return (
            <div className="datepicker-container" data-dropdown-content="true">
                <div className="datepicker-input-container">
                    <div className="form-group">
                        <div onClick={this.handleToggle} className="controls-text">
                            <img src={calendar} alt="calender" />
                            <input type="text" className="ignore-react-onclickoutside" id="datepicker" value="Custom Date" name="" />
                        </div>
                    </div>
                </div>
                {status && <div className="datepicker-popup">
                    <div className="datepicker-header">
                        <p className="datepicker-navigation datepicker-navigation-previous"></p>
                        <div className="datepicker-current-month" tabindex="0">2020 February</div>
                        <p className="datepicker-navigation datepicker-navigation-next"></p>
                        <div className="datepicker-week-header">
                            <div className="datepicker-day">Mo</div>
                            <div className="datepicker-day">Tu</div>
                            <div className="datepicker-day">We</div>
                            <div className="datepicker-day">Th</div>
                            <div className="datepicker-day">Fr</div>
                            <div className="datepicker-day">Sa</div>
                            <div className="datepicker-day">Su</div>
                        </div>
                    </div>
                    <div className="datepicker-month">
                        <div className="datepicker-week">
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-outside-month">25</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-outside-month">26</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-outside-month">27</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-outside-month">28</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-outside-month">29</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-weekend datepicker-day-outside-month">30</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-weekend">1</div>
                        </div>
                        <div className="datepicker-week">
                            <div className="datepicker-day datepicker-day-disabled">2</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-today">3</div>
                            <div className="datepicker-day datepicker-day-disabled">4</div>
                            <div className="datepicker-day datepicker-day-disabled">5</div>
                            <div className="datepicker-day datepicker-day-disabled">6</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-weekend">7</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-weekend">8</div>
                        </div>
                        <div className="datepicker-week">
                            <div className="datepicker-day datepicker-day-disabled">9</div>
                            <div className="datepicker-day datepicker-day-disabled">10</div>
                            <div className="datepicker-day datepicker-day-disabled">11</div>
                            <div className="datepicker-day datepicker-day-disabled">12</div>
                            <div className="datepicker-day datepicker-day-disabled">13</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-weekend">14</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-weekend">15</div>
                        </div>
                        <div className="datepicker-week">
                            <div className="datepicker-day datepicker-day-disabled">16</div>
                            <div className="datepicker-day datepicker-day-disabled">17</div>
                            <div className="datepicker-day datepicker-day-disabled">18</div>
                            <div className="datepicker-day datepicker-day-disabled">19</div>
                            <div className="datepicker-day datepicker-day-disabled">20</div>
                            <div className="datepicker-day datepicker-day-selected datepicker-day-weekend">21</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-weekend">22</div>
                        </div>
                        <div className="datepicker-week">
                            <div className="datepicker-day datepicker-day-disabled">23</div>
                            <div className="datepicker-day datepicker-day-disabled">24</div>
                            <div className="datepicker-day datepicker-day-disabled">25</div>
                            <div className="datepicker-day datepicker-day-disabled">26</div>
                            <div className="datepicker-day datepicker-day-disabled">27</div>
                            <div className="datepicker-day datepicker-day-weekend">28</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-weekend">29</div>
                        </div>
                        <div className="datepicker-week">
                            <div className="datepicker-day datepicker-day-disabled">30</div>
                            <div className="datepicker-day datepicker-day-disabled">31</div>
                            <div className="datepicker-day datepicker-day-outside-month">1</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-outside-month">2</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-outside-month">3</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-weekend datepicker-day-outside-month">4</div>
                            <div className="datepicker-day datepicker-day-disabled datepicker-day-weekend datepicker-day-outside-month">5</div>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default DatePicker