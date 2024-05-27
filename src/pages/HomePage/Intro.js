import { Container, Row, Col } from "reactstrap";
import me from "../../assets/Me.JPEG";
import "./HomePage.css";

export const Intro = () => {
  return (
    <>
      <Container fluid className="container text-start mt-3">
        <Row className="row justify-content-start row-cols-3">
          <Col lg="2">
            <p className="hello text-light text-start mb-lg-5 pb-lg-5">Hello</p>
          </Col>
          <Col lg="3">
            <p className="iAm text-light text-start mt-5 pt-xl-5 ms-xl-4">
              I am ...
            </p>
          </Col>
          <Col lg="6">
              <Container fluid className='container text-start'>
                <Row className='justify-content-start'>
                  <Col>
    
                      <img
                        className="my-image rounded mt-5 d-flex"
                        src={me}
                        alt="me"
                      />
                  </Col>
                </Row>
              </Container>
          </Col>
         
        </Row>
      </Container>
      
      <Container fluid className="text-center mt-4 ms-5">
        <Row>
          <Col lg="12">
            <p className="text-center mx-md-5 me-xxl-5 pe-xxl-5 name">
              Michael Wilson
            </p>
          </Col>
          <Col>
            <p className="text-light fs-3">Software Engineer</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};