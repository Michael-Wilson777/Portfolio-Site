import React from "react";
import "./ContactMe.css";
import { MdOutlineEmail } from "react-icons/md";
import { Container, Col, Row } from "reactstrap";
import Navigation from "../../components/nav/Navigation";

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
    <div className="contact">
      <Container fluid className="ms-5 mb-5">
        <Navigation current="/contact" />
      </Container>
      <Container className='text-center ps-5'>
        <Row>
          <Col sm='5'>
            <h1 className='text-light'>ThankYou!</h1>
            <p className='text-light fs-4'>
              Feel free to contact me and let me know what you think. I'm still
              learning but I'm also picking it up at a goo pace. I appreciate
              your visit!
            </p>
          </Col>
          <Col>
            <article className="contact__option mx-5 ps-5">
              <MdOutlineEmail className="contact__option-icon" />
              <h4 className='email-head'>Email</h4>
              <h5 className='fs-5 email'>michaelwilson777@gmail.com</h5>
              <a className='sndMsg' href="mailto:michaelwilson777@gmail.com">Send a message</a>
            </article>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          
        </Row>
      </Container>
      
    </div>
  );
};

export default Contact;
