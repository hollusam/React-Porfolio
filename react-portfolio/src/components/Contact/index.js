import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    // message:""
  };


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    const message = event.target.message;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value,
      [message]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    const validRegex = '@';

    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.email.match(validRegex)) {
      alert(
        `Valid email address ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else if (this.state.message = "") {
      alert("This space cannot be empty");

    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
        <div id="contact">
           <div className="about-name mt-5">
                    <h2>Contact</h2>
                </div>
            <div className="form-container">
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
              rows="6"
              cols="50"
            />
            <button onClick={this.handleFormSubmit}>Get in touch</button>
          </form>
          <div className="form-text">
            <p>If you have any questions about me or my projects, or (politely) argue about the best albums of the 2010s, I'm your girl!</p>
            <br />
            <p>
            I'm available to grab a coffee and chat! Drop a comment, question, concern, or Spotify playlist, and thanks for stopping by!
            </p>
            <br />
            <p>Straight shot to my inbox: <a href="mailto:oluyomisamuels@gmail.com?subject=Getting in Touch with Samuel Oluyomi" target="_blank" >Email</a>
            </p>
          </div>
            </div>
            <ul className="socials">
            <li><a href="https://github.com/hollusam" target="_blank"><span className="fab fa-github"></span></a> </li>
                            <li><a href="https://www.linkedin.com/in/oluyomi-samuel" target="_blank"><span className="fab fa-linkedin"></span></a> </li>
                            <li><a href="https://twitter.com/hollusam"><span className="fab fa-twitter" target="_blank"></span></a> </li>
                            <li><a href="https://instagram.com/hollusam" target="_blank"><span className="fab fa-instagram"></span></a> </li>
                        </ul>
        </div>
      );
  }
}

export default Form;
