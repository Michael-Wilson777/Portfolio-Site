import { Container, Row, Col } from "reactstrap";
import Navigation from "../../components/nav/Navigation";

import "./AboutMe.css";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";

const About = () => {
  return (
    <div className="about pt-2">
      <Container fluid>
        <Navigation current="about" />
      </Container>

      <Container fluid className="mt-4">
        <Row>
          <Col>
            <h2 className="title text-center">About Me</h2>
          </Col>
        </Row>
        <Row>
          <Col className="col-xlg text-start">
            <p className="text-light fs-5 font-monospace mt-5 mx-5">
              In December of 2023 I decided to embark on a learning journey for
              a career change and I chose Software Engineering. The institution
              that I chose was NuCamp and I’m glad I did. It has been a rigorous
              path so far and I’m enduring. I have built a decent amount of
              projects in this time and am having a blast doing it. I am
              enthusiastic and driven, seeking a challenging full-time job to
              apply and expand the technical skills that I am developing.
              Because I am a quick learner, I am ready to face all challenges
              that are presented and strive to put my best foot forward at all
              times.
            </p>
            <p className="text-light fs-5 font-monospace mx-5">
              I am a veteran of the U.S. army and served as a Heavy Wheeled
              Vehicle Mechanic in Germany and Texas from 1999-2003. I’m
              currently working as a sheetmetal worker installing metal roofing
              products and spending time with my family. We have a dog who is a
              gentle giant and just loves to just be around wherever we are. I
              also like to hike, fish, and especially smoke meat. Cooking is
              another passion of mine. Whether it's on the grill or in the
              kitchen, I can throw down a pretty tasty plate.
            </p>
            <p className="text-light fs-5 font-monospace mx-5">
              I hope you have enjoyed my portfolio page and be sure to check
              back or even check out my github for new content. Since the only
              way to get better is to do it a lot, I plan on putting out a good
              amount of projects big and small. Have a nice day!
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
