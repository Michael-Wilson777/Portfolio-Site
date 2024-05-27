import { Container, Row, Col } from "reactstrap";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import NavHomePage from "./NavHomePage";
// import PageList from "./PageList";
import { Intro } from "./Intro";

// src\PageList.jsx

const HomePage = () => {
  return (
    <Container className="home-page ms-5 mt-xxl-2 pt-xxl-5" fluid>
      <Row>
        <Col>
          <Intro />
        </Col>
        <Col md="2">
          <NavHomePage current="Home" />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
