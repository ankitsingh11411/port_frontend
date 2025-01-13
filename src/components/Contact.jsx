import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section className={styles.section}>
      <h1>Contact Me</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
