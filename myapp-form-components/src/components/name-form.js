import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    alert(
      "You entered name: " + this.state.firstName + " " + this.state.lastName
    );
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="label">Firstname:</div>
        <div className="control">
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.onChange}
          />
        </div>
        <div className="label">Lastname:</div>
        <div className="control">
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.onChange}
          />
        </div>
        <div className="control">
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default NameForm;
