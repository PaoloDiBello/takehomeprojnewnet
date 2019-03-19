import React, { Component } from 'react'
import './SignUp.scss';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import ImageLoader from './ImageLoader'

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            password: ''
        }

    }

    onChange = e => {
        const { id, password } = this.props.match.params;
        this.setState({ [e.target.name]: e.target.value })
        console.log('this.props', id, password)

    };


    render() {
        const { id, password, url } = this.props.match.params;
        //id = 'i'
        console.log(url)
        console.log(id);
        return (
            <div>
                {window.$}
                <h3 style={{ display: "flex", justifyContent: "center" }}>Register {id}!</h3>
                <div className="container">

                    <form id="signup">

                        <div className="header">

                            <h3>Sign Up {id}</h3>

                            <p>You want to fill out this form</p>

                        </div>

                        <div className="sep"></div>

                        <div className="inputs">

                            <input type="email" name="id" placeholder="e-mail" autoFocus defaultValue={id} onChange={this.onChange} />

                            <input type="password" name="password" placeholder="Password" defaultValue={password} onChange={this.onChange} />

                            <div className="checkboxy">
                                <input name="cecky" id="checky" value="1" type="checkbox" /><label className="terms">I accept the terms of use</label>
                            </div>

                            <a id="submit" href="/success">SIGN UP </a>

                        </div>

                    </form>

                </div>
                <LazyLoad
                    width={100}
                    height={100}
                    debounce={true}
                    offsetVertical={500}
                    debounce={false}
                    throttle={1000}
                    onContentVisible onContentVisible={() => console.log('what do you want to do here?')}
                >
                    <div class="img-container">
                        <ImageLoader
                            src="https://wallimpex.com/data/out/645/4k-milky-way-wallpaper-10010240.jpg" //this is the only compulsory prop
                        />
                    </div>

                </LazyLoad>
            </div>
        )
    }
}




