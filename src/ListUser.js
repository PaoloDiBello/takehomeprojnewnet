import React, { Component } from 'react'

export default class ListUser extends Component {


    render() {

        const users = [
            {
                name: "John Doe"
            },
            {
                name: "Jessy Jean"
            },
            {
                name: "Mary Poppins"
            },
        ]

        const { input } = this.props;

        let filteredUsers =
            users.filter(user => {
                return user.name.toLowerCase().includes(input.toLowerCase())
            })


        /* */
        filteredUsers = (/^(\s)+/g).test(input) ? users : filteredUsers;

        console.log(this.props.input);

        return (
            <div>
                <ul>
                    {filteredUsers.map((user, i) => <li key={i}> {user.name} </li>)}
                </ul>
            </div>
        )
    }
}
