import { Container, Row, Col } from "reactstrap";
import me from "../../assets/Me.JPEG";

import "./HomePage.css";

export const Intro = () => {
  return (
    <Container fluid className="text-start mt-4 pt-3">
      <Row row-content className="align-items-start">
        <Col sm="4" className="ps-0 align-self-start me-5">
          <p className="fs-1 text-light text-start">Hello</p>
          <br />
          <p className="fs-3 text-light text-start ps-5 ms-5 mt-4">I am ...</p>
        </Col>
        <Col>
          <img
            className="my-image rounded mx-auto d-flex float-start"
            src={me}
            alt="me"
          />
        </Col>
      </Row>
      <Row className="row-content justify-content-center">
        <Col>
          <p className="text-center name me-5">Michael Wilson</p>
          <br />
          <p className="text-end">Software Engineer</p>
        </Col>
      </Row>
    </Container>
  );
};
