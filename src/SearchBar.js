import React, { Component } from 'react'
import Typed from 'react-typed';
import Input from '@material-ui/core/Input';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
        }
    }

    handleInput = (e) => {
        e.preventDefault();
        this.setState({ [e.target.value]: e.target.value })
        this.props.passList(e.target.value);
    }



    render() {
        // console.log('this.props', this.props)
        return (
            <form autocomplete="off">

                <Typed
                    strings={[
                        'Search for photos',
                        'Look away',
                        'Kill yourself']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr=""
                    loop
                    style={{ display: 'flex', margin: '0 42%', textAlign: 'center' }} style={{ display: 'flex', margin: '0 42%', textAlign: 'center' }}
                >
                    <span ></span>
                </Typed>
                <Input type="text" name="input" onChange={this.handleInput} style={{ display: 'flex', margin: '0 42%', textAlign: 'center' }}></Input>
            </form >
        )
    }
}
