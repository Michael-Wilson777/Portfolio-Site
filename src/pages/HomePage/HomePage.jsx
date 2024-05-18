import { Container } from "reactstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav";
import PageList from "./PageList";
import { Intro } from "./Intro";

// src\PageList.jsx

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Nav current="Home" />
      <Intro />
      <PageList />
      <Footer />
    </Container>
  );
};

export default HomePage;
