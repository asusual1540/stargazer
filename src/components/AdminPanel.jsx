import React, { Component } from 'react'
import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_API_URL

class AdminPanel extends Component {

    call_server = () => {
        console.log("called")

        axios.get('/xyz', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <button onClick={this.call_server}>test server</button>
            </div>
        )
    }
}

export default AdminPanel
