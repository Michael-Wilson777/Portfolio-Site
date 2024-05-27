import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./resume.css"; // Ensure styles are scoped to this component

const Resume = () => {
  return (
    <div className="resume">
      <Container fluid className="text-start dflex flex-col my-3">
        <Row row-content className="justify-content-start me-5">
          <Col className="col-8 resume-header align-self-start">
            <h1 className="text-light">Michael Wilson</h1>
            <h5 className="text-light">Software Engineer</h5>
          </Col>
          <Col>
            <Container className="text-end text-light ms-5">
              <span className="city text-light">North Branford, CT</span>
              <br />
              <a
                className="email text-light"
                href="mailto:michaelwilson777@gmail.com"
              >
                michaelwilson777@gmail.com
              </a>
              <br />
              <a
                className="email text-light"
                href="https://linkedin.com/in/michael-wilson-649464224"
              >
                linkedin.com/in/michael-wilson-649464224
              </a>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="my-4">
          <Col>
            <Container fluid className="text-center">
              <span className="summary-head text-warning fs-2 mb-2 text-center text-decoration-underline">
                Professional Summary:
              </span>
            </Container>
            <Container fluid>
              <p className="summary text-light text-start lh-sm">
                Dedicated U.S. Army veteran and seasoned professional with a
                proven track record in precision engineering roles, now driven
                to excel in the dynamic field of web development. Adept at
                thriving in collaborative environments, leveraging critical
                thinking and problem-solving skills honed in high-pressure
                settings. Eager to apply a diverse skill set and unwavering work
                ethic to contribute to innovative software solutions.
              </p>
            </Container>
          </Col>
        </Row>
        <Row>
          <h3 className="summary-head text-start text-warning fs-3 ps-4 mt-2 pt-3 border-top text-center text-decoration-underline skills">
            Skills
          </h3>
          <Col>
            <ul className="text-light list-unstyled ps-3 mb-3 fs-5 text-center">
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>React</li>
            </ul>
          </Col>
          <Col
            className="text-light list-unstyled ps-3 fs-5 mb-3 text-center"
            md="6"
          >
            <ul>
              <li>Problem Solving</li>
              <li>Critical Thinking</li>
              <li>Communication</li>
              <li>Time Management</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container
              fluid
              className="text-center fs-3 pt-3  border-top border-secondary summary-head"
            >
              <span className="work-head text-warning text-start text-decoration-underline">
                Work Experience
              </span>
            </Container>
            <div className="job-description text-start ps-3 lh-sm">
              <p className="job-name text-start fs-6">
                <span className="pe-1  text-secondary">
                  Sheetmetal Workers Local Union 40
                </span>{" "}
                |<span className="px-1  text-secondary"> Rocky Hill, CT </span>
                <br />
                <span className="text-secondary fst-italic">
                  06/2022 - Present
                </span>
              </p>
              <ul className="lh-sm text-light list-unstyled">
                <li>
                  Installed ornate architectural metal roofing systems in small
                  teams, demonstrating critical thinking and problem-solving
                  skills.
                </li>
                <li>
                  Adapted quickly to varying job requirements, ensuring
                  efficient and precise installations.
                </li>
                <li>
                  Maintained open communication with supervisors to track
                  project progress and task completion.
                </li>
                <li>
                  Led a team of 5 sheet metal workers to complete a high-profile
                  project ahead of schedule, resulting in a 95% client
                  satisfaction rate and repeat business.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="job-name text-start ps-3">
              <span className="pe-1  text-secondary fs-6">
                Aircraft Welding And Mfg Co.
              </span>{" "}
              |
              <span className="px-1  text-secondary fs-6">
                {" "}
                East Hartford, CT{" "}
              </span>
              <br />
              <span className="text-secondary fst-italic">
                06/2021 - 06/2022
              </span>
            </p>
            <ul className="lh-sm text-light list-unstyled ps-3">
              <li>
                Independently determined optimal welding processes for aircraft
                parts, exhibiting strong critical thinking skills.
              </li>
              <li>
                Managed time effectively to meet production deadlines and ensure
                timely shipment of welded parts to customers.
              </li>
              <li>
                Achieved 100% compliance with industry welding standards,
                ensuring product safety and quality, and passing all regulatory
                inspections with zero non-conformities.
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="job-name text-start ps-3">
              <span className="pe-1 fs-6  text-secondary">Hillery Company</span>{" "}
              |<span className="px-1 fs-6  text-secondary"> Groton, CT </span>
              <br />
              <span className="dates fst-italic text-secondary">
                06/2021 - 11/2021
              </span>
            </p>
            <ul className="text-light list-unstyled ps-3">
              <li>
                Independently determined optimal welding processes for aircraft
                parts, exhibiting strong critical thinking skills.
              </li>
              <li>
                Managed time effectively to meet production deadlines and ensure
                timely shipment of welded parts to customers.
              </li>
              <li>
                Achieved 100% compliance with industry welding standards,
                ensuring product safety and quality, and passing all regulatory
                inspections with zero non-conformities.
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <h2 className="text-center mt-2 pt-3 text-warning summary-head fs-3 text-decoration-underline border-top">
              Education
            </h2>
            <Col>
              <Container className="text-center">
                <h6 className="text-light">Nucamp</h6>
                <article className="pb-1 text-light">
                  Full Stack Software Engineering
                </article>
                <p className="dates text-light fst-italic">11/2024 - Present</p>
              </Container>
            </Col>
          </Col>
          <Col>
            <Container>
              <h3 className="text-center text-warning fs-3 mt-2 pt-3 text-decoration-underline summary-head border-top">
                Projects
              </h3>
              <div className="links text-center">
                <div className="mb-2 fs-5">
                  <a href="/">https://github.com/Michael-Wilson777</a>
                </div>
                <br />
                <div className="fs-5">
                  <a href="/">https://myportfoliosite.com/</a>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Resume;
