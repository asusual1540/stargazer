import React, { Component } from 'react'


export default class AdminPanel extends Component {

    call_server = () => {
        console.log("called")
        fetch('http://localhost:9000/xyz')
            .then(response => response.json())
            .then(data => console.log(data))
    }


    render() {
        return (
            <div>
                <button onClick={this.call_server}>test server</button>
            </div>
        )
    }
}
