import { Container, Row, Col } from "reactstrap";
import Navigation from "../../components/nav/Navigation";

import "./AboutMe.css";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";

const About = () => {
  return (
    <div className="about">
      <Container fluid className='ms-4'>
      <Navigation current="about" />
      </Container>
      

      <Container className="mt-1">
        <Row>
          <Col>
            <h2 className="title text-center">About Me</h2>
          </Col>
        </Row>
        <Row>
          <Col className="col-xlg text-start">
            <p className="text-light fs-5 font-monospace my-3">
              I'm a U.S. Army veteran{" "}
              <strong>Software Engineering Student</strong> in the Nucamp Full
              Stack Software Engineering program. I'm an enthusiastic and driven
              Software Engineering student seeking a challenging full-time job
              or internship opportunity to apply and expand my technical skills.
              With a strong academic foundation in software engineering and
              hands-on experience in web development practices, I am eager to
              contribute to innovative projects and learn from experienced
              professionals in the industry. I am a quick learner who is always
              ready to face all challenges that are presented and strive to put
              my best foot forward at all times.
            </p>
          </Col>
        </Row>
        <Row className="align-items-center ps-5">
          <Col lg="4">
            <article className="about__card ms-5 ps-5 text-light text-start pe-2">
              <GiGraduateCap className="about__icon" />
              <h5>Certificate</h5>
              <span>
                HTML, CSS, and Bootsrap <br />
                <i>Nucamp</i>
              </span>
            </article>
          </Col>
          <Col className="align-self-center" md="4">
            <article className="about__card ps-5 ms-5 text-light">
              <GiGraduateCap className="about__icon" />
              <h5>Certificate</h5>
              <span>
                JavaScript Fundamentals <br />
                <i>Nucamp</i>
              </span>
            </article>
          </Col>
          <Col md="4">
            <article className="about__card ps-5 text-light">
              <BsBookmarkStar className="about__icon" />
              <h5>Current GPA</h5>
              <span>95.65</span>
            </article>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
