import { Container } from "reactstrap";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Nav";
// import PageList from "./PageList";
import { Intro } from "./Intro";

// src\PageList.jsx

const HomePage = () => {
  return (
    <Container fluid>
      {/* <Header /> */}
      <Navigation current="Home" />
      <Intro />
      {/* <PageList /> */}
      {/* <Footer /> */}
    </Container>
  );
};

export default HomePage;
