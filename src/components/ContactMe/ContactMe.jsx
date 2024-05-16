import React from 'react';
import './ContactMe.css';
import { MdOutlineEmail } from 'react-icons/md';

const Contact = () => {
  // const form = useRef();

  // const sendEmail = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(form.current);
  //   const data = {
  //     name: formData.get('name'),
  //     email: formData.get('email'),
  //     message: formData.get('message')
  //   };

  //   try {
  //     const response = await fetch('/send-email', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     });

  //     if (response.ok) {
  //       alert('Email sent successfully!');
  //       form.current.reset();
  //     } else {
  //       alert('Failed to send email. Please try again later.');
  //     }
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //     alert('An error occurred. Please try again later.');
  //   }
  // };

  return (
    <section className='contact' id='contacts'>
      {/* <div className='container-fluid pt-5 text-center'>
        <div className='row mb-3'>
          <div className='col'>
            <h2 className='title'>Contact Me</h2>
            
          </div>
        </div>
      </div> */}
      <div className='container text-center pb-5 mb-5'>
        <div className='row row-content justify-content-center'>
          <div className="col-md-6">
            <div className="container-fluid d-flex contact__container contact__options">                
              <article className='contact__option mx-5 text-light'>
                <MdOutlineEmail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>michaelwilson777@gmail.com</h5>
                <a href="mailto:michaelwilson777@gmail.com">Send a message</a>
              </article>
            </div>
          </div>
          {/* <div className='container pt-4 text-center'>
            <div className='row'>
              <div className='col'>
                <form ref={form} onSubmit={sendEmail}>
                  <input type="text" className='mb-2' name="name" placeholder="Your Full Name" required />  
                  <input type="email" className='mb-2' name='email' placeholder='Your Email' required /> 
                  <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                  <button type="submit" className='btn btn-primary mt-3'>Send Message</button>
                </form>
              </div>
            </div>
          </div>          */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
