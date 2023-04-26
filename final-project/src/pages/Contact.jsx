import '../assets/styles/contact.css'
import React, { useState } from "react";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false); // added state for submission status

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(true); // set submission status to true after form is submitted
  };

  return (
    <article className='contact-page-container'>
      {submitted ? (
        <p className="success-message">
          Thanks for contacting us - we'll get back to you as soon as we can.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          <label>
            Message:
            <textarea
              style={{ width: "403px", height: "411px" }}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </article>
  );
}

export default ContactPage;
