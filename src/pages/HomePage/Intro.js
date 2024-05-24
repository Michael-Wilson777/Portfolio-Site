import { Container, Row, Col } from "reactstrap";
import me from "../../assets/Me.JPEG";

import "./HomePage.css";

export const Intro = () => {
  return (
    <Container fluid className="mt-2 pt-3 ps-4">
      <Row row-content className="align-items-center">
        <Col sm="4" className="align-self-end ps-5">
          <p className="fs-1 text-light text-start ps-4">Hello</p>
          <br />
          <p className="fs-3 text-light text-start ps-5 ms-5 mt-4">I am ...</p>
        </Col>
        <Col className='pt-5' md='8'>
        
          <img
            className="my-image rounded mx-auto d-flex"
            src={me}
            alt="me"
          />
          
        </Col>
      </Row>
      <Container className='mt-5'>
      <Row className="row-content justify-content-center">
        <Col>
          <p className="text-end me-5 name">Michael Wilson</p>
          <br />
          <p className="text-end text-light fs-3">Software Engineer</p>
        </Col>
      </Row>
      </Container>
    </Container>
  );
};
