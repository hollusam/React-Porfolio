import React from "react";
import { useState } from "react";
import "./style.css";

function Form() {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    access_key: "d9f1e616-b4c4-4363-89fb-cb9288769d6d",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setFormData({
          ...formData,
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <>
      <div id="contact">
        <div className="about-name mt-5">
          <h2>Contact</h2>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form">
            <input
              value={formData.firstName}
              name="firstName"
              onChange={handleChange}
              type="text"
              placeholder="First Name"
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
            />
            <input
              value={formData.email}
              name="email"
              onChange={handleChange}
              type="text"
              placeholder="Email"
            />
            <textarea
              value={formData.message}
              name="message"
              onChange={handleChange}
              placeholder="Enter your message..."
              rows="6"
              cols="50"
            />
            <button className="submitBtn">Get in touch</button>
          </form>
          
          <div className="form-text">
            <p>If you have any questions about me or my projects, or (politely) talk about the best football team around the country, I'm your man!</p>
            <br />
            <p>
              I'm available to grab a coffee and chat! Drop a comment, question, concern, or Spotify playlist, and thanks for stopping by!
            </p>
            <br />
            <p>Straight shot to my inbox: <a href="mailto:oluyomisamuels@gmail.com?subject=Getting in Touch with Samuel Oluyomi" target="_blank" rel="noreferrer">Email</a>
            </p>
          </div>
        </div>
        {success && <p className="success">Form Submitted Successfully</p>}
        <ul className="socials">
          <li><a href="https://github.com/hollusam" target="_blank" rel="noreferrer"><span className="fab fa-github"></span></a> </li>
          <li><a href="https://www.linkedin.com/in/oluyomi-samuel" target="_blank" rel="noreferrer"><span className="fab fa-linkedin"></span></a> </li>
          <li><a href="https://twitter.com/hollusam"><span className="fab fa-twitter" target="_blank" rel="noreferrer"></span></a> </li>
          <li><a href="https://instagram.com/hollusam" target="_blank" rel="noreferrer"><span className="fab fa-instagram"></span></a> </li>
        </ul>
      </div>
    </>
  );
}

export default Form;
