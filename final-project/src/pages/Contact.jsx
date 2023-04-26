import '../assets/styles/contact.css'
import React, { useState } from "react";

function ContactPage() {
    // Initialise the input states as empty strings
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };
    // Returns a contact form
  return (
    <article className='contact-page-container'>
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
        style={{width:'403px', height:'411px'}}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </article>
  );
}

export default ContactPage;
