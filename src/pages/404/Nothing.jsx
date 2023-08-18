
import React, { Component } from 'react'
import './Nothing.css'
import { Link } from 'react-router-dom'

export default class Nothing extends Component {
    render() {
        return (
            <div className="c404">
                <div className="c">
                    <div className="_404">404</div>
                    <hr />
                    <div className="_1">THE PAGE</div>
                    <div className="_2">WAS NOT FOUND</div>
                    <Link className="btn" to="/">BACK TO MARS</Link>
                </div>
            </div>
        )
    }
}




