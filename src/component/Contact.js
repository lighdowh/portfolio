import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import gif from '../images/Settings.gif';
import '../CSS/Contact.css'

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

  
      const result = await emailjs.sendForm('service_u3ifwyv','template_90j5wtl',form.current,'vyr-Hd-OOvNvupiAZ')
      .then((result) => {
        alert("mail sent!!");
        setLoading(false);
    }, (error) => {
        alert("please enter valid info!!");
    });
    form.current.reset();
  };

  return (
    <div>
      <section className="contact">
        <h2>
          <u>To Contact Us :</u>
        </h2>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="Enter the name!!" />

          <label htmlFor="phone">Phone No:</label>
          <input type="text" name="phone" placeholder="Enter the number!!" />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="example@gmail.com" />

          <label htmlFor="feedback">Feedback / Query:</label>
          <textarea
            name="feedback"
            rows="6"
            placeholder="Enter the feedback here!!"
          ></textarea>

          {loading ? (
            <img src={gif} alt="Loading animation" />
          ) : (
            <button type="submit" className="btn btn2">
              Submit
            </button>
          )}
        </form>
      </section>

      <section className="contact_me">
        <h2>
          <u>Contact</u>
        </h2>
        <p>Email: kchandanputhuraya@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/K_Chandan_Puthuraya </p>
      </section>

      {/* <footer>
        <p>&copy; 2023 K_Chandan_Puthuraya. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default Contact;
