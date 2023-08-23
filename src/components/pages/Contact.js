import { useState } from "react";

import { successfulToast } from "../util/toastNotifications";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    successfulToast("Your message has been sent!");
  }

  function isFormFilled() {
    return firstName && lastName && email && message;
  }

  return (
    <div className="contact-page-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have any questions? We'd love to hear from you.</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <p>Name</p>

        <div className="name-fields">
          <div className="name-field">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="first-name">First</label>
          </div>

          <div className="name-field">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="last-name">Last</label>
          </div>
        </div>

        <p>Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p>Message</p>
        <textarea
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div className="submit-btn-wrapper">
          <button
            disabled={!isFormFilled()}
            className="submit-btn"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
