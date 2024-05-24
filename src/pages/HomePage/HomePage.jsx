import { Container, Row, Col } from "reactstrap";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import NavHomePage from "./NavHomePage";
// import PageList from "./PageList";
import { Intro } from "./Intro";

// src\PageList.jsx

const HomePage = () => {
  return (
    <Container className='home-page' fluid>
      <Row>
        <Col>
          <Intro />
        </Col>
        <Col md="3">
          <NavHomePage current="Home" />
        </Col>
      </Row>
      {/* <Header /> */}

      {/* <PageList /> */}
      {/* <Footer /> */}
    </Container>
  );
};

export default HomePage;
