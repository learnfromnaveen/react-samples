import React from 'react'
import {Link} from 'react-router-dom'

export default class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user : { }
        } 
    }

    componentDidMount(){
        const user = this.props.location.state.user;
        const url  = "https://jsonplaceholder.typicode.com/users/" + user.id;
        fetch(url)
        .then(response => response.json())
        .then( data =>{
            this.setState({
                user: data
            });
        }); 
    }
    render(){

        const { fromPath }  = this.props.location.state;
        return(
            <div className="container">
            <div className="card">
                <div className="card-header">User Details</div>
                <div className="card-body">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td><strong>Name</strong></td><td>{this.state.user.name}</td>
                            </tr>
                            <tr>
                                <td><strong>Username</strong></td><td>{this.state.user.username}</td></tr>
                            <tr>
                                <td><strong>Email</strong></td><td>{this.state.user.email}</td>
                            </tr>
                            <tr>
                                <td><strong>Phone</strong></td><td>{this.state.user.phone}</td>
                            </tr>
                            <tr>
                                <td><strong>Website</strong></td><td>{this.state.user.website}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-footer">
                <Link className="btn btn-primary" to={fromPath}>Go Back</Link>
            </div>
            </div>
            
            </div>
        )
    }
}