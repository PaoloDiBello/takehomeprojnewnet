import React, { Component } from 'react'
export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    handleInput = (e) => {
        e.preventDefault();
        this.setState({ [e.target.value]: e.target.value })
        this.props.passList(e.target.value);
    }

    render() {
        console.log('this.props', this.props)
        return (
            <div>
                <input type="text" name="input" onChange={this.handleInput} />
            </div>
        )
    }
}
