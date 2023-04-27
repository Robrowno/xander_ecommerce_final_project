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
        <>  
        <h2>Contact Us</h2>      
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Message:
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        </>

      )}
    </article>
  );
}

export default ContactPage;
