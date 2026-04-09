import React from 'react';

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Feel free to reach out to us!</p>

      <h3>Contact Details:</h3>
      <ul>
        <li>Email: support@example.com</li>
        <li>Phone: +91 98765 43210</li>
        <li>Address: Udupi, Karnataka, India</li>
      </ul>

      <h3>Send us a message:</h3>
      <form>
        <input type="text" placeholder="Your Name" /><br /><br />
        <input type="email" placeholder="Your Email" /><br /><br />
        <textarea placeholder="Your Message"></textarea><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
