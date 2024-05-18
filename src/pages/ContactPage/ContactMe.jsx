import React from "react";
import "./ContactMe.css";
import { MdOutlineEmail } from "react-icons/md";
import { Container, Col, Row } from "reactstrap";
import Nav from "../../components/Nav";

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
      <Nav current="/contact" />
      <Container>
        <Row>
          <Col>
            <article className="contact__option mx-5 text-light">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>michaelwilson777@gmail.com</h5>
              <a href="mailto:michaelwilson777@gmail.com">Send a message</a>
            </article>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
