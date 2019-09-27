import React from 'react'


class UserList extends React.Component {
    constructor(props){
        super(props);  
    }
    render() {
        const USERS = this.props.users.map(user =>
            (
                <tr key={user.id.toString()}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
            )
        ); 
        return (
            <tbody>
                {USERS}
            </tbody>
        )
    }
}

export default UserList