import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
        <div>
           <div className="about-name mt-5">
                    <h2>Contact</h2>
                </div>
          <form className="form">
            <input
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="First Name"
            />
            <input
              value={this.state.lastName}
              name="lastName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Last Name"
            />
            <input
              value={this.state.email}
              name="email"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Email"
            />
            <textarea
              value={this.state.message}
              name="Message"
              onChange={this.handleInputChange}
              row="10"
              placeholder="Message"
            />
            <button onClick={this.handleFormSubmit}>Submit</button>
          </form>
          <ul className="socials">
                            <li><a href="#"><span className="fab fa-github"></span></a> </li>
                            <li><a href="#"><span className="fab fa-linkedin"></span></a> </li>
                            <li><a href="#"><span className="fab fa-twitter"></span></a> </li>
                            <li><a href="#"><span className="fab fa-instagram"></span></a> </li>
                        </ul>
        </div>
      );
  }
}

export default Form;
