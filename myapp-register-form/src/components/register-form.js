import React from "react";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      gender: "Female",
      country: "India",
      agreementAccepted: false,
      isValid: false,
      countries: [
        { id: 0, name: "--Nothing Selected--", value: "-1" },
        { id: 1, name: "India", value: "India" },
        { id: 2, name: "US", value: "US" },
        { id: 3, name: "Russia", value: "Russia" },
        { id: 4, name: "China", value: "China" }
      ]
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onGenderChange = this.onGenderChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onAccept = this.onAccept.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

    this.validateInputs();
  }

  onGenderChange(e) {
    console.log("control value", e.target.value);
    console.log("control checked", e.target.checked);
    this.setState({
      gender: e.target.value
    });
  }

  onSelectChange(e) {
    console.log("selected country: ", e.target.value);
    this.setState({
      country: e.target.value
    });
  }

  onAccept(e) {
    this.setState({
      agreementAccepted: e.target.checked
    });
    this.validateInputs();
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  validateInputs() {
    var newState = { isValid: false };

    if (this.state.firstName != "" && this.state.agreementAccepted) {
      newState.isValid = true;
    }

    this.setState(newState);
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
          <div>
            <label>Gender:</label>
            <div className="control">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={this.state.gender === "Male"}
                onChange={this.onGenderChange}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={this.state.gender === "Female"}
                onChange={this.onGenderChange}
              />{" "}
              Female
            </div>
          </div>
        </div>
        <div className="label">
          <div>
            <label>Country:</label>
          </div>
          <div className="control">
            <select value={this.state.country} onChange={this.onSelectChange}>
              {this.state.countries.map(c => (
                <option key={c.id} value={c.value}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="control">
          <input
            type="checkbox"
            onChange={this.onAccept}
            checked={this.state.agreementAccepted}
          />
          <span>I accept all terms &amp; aggreement</span>
        </div>

        <div className="control">
          <input type="submit" value="Submit" disabled={!this.state.isValid} />
        </div>
      </form>
    );
  }
}

export default RegisterForm;
