import React from 'react'
import UselrList from './users-list'
import UserList from './users-list'
import USER_RESOURCE from '../resources/user-resource'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
        this.getUsers = this.getUsers.bind(this);

    }

    getUsers(e) {
        fetch(USER_RESOURCE.getUsersUrl)
        .then(response => response.json())
        .then(data => this.updateState(data));
    }

    updateState(data){
        this.setState({users: data});
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <button onClick={this.getUsers} className="btn btn-primary">Get Users</button>
                </div>
                <div className="row">
                    <table className="table table-striped">
                        <thead>
                            <tr><th>Name</th><th>Username</th><th>Email</th></tr>
                        </thead>
                        <UserList users={this.state.users}/>
                    </table>
                </div>

            </div>
        )
    }
}


export default App