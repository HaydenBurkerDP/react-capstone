import { useState } from "react";

export default function Contact() {
  return (
    <div className="contact-page-container">
      <h1>Contact</h1>
      <form>
        <div className="name-wrapper">
          <p>Name</p>

          <div className="name-fields">
            <div className="name-field">
              <label htmlFor="first-name">First</label>
              <input type="text" />
            </div>

            <div className="name-field">
              <label htmlFor="last-name">Last</label>
              <input type="text" />
            </div>
          </div>
        </div>

        <div className="email-wrapper">
          <p>Email</p>
          <input type="text" />
        </div>

        <div className="message-wrapper">
          <p>Message</p>
          <textarea></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
