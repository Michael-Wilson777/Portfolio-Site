import { useState } from "react";
import {
  Row,
  Col,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
} from "reactstrap";
import { NavLink } from "react-router-dom";
// import './Nav.css'; // Assuming you have a CSS file for custom styles

const NavHomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container className="text-end nav ps-3">
      <Row>
        <Col>
        </Col>
      </Row>
      <Navbar className="d-flex justify-content-end" dark sticky="top" expand="md">
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="flex-column align-items-end" md='5' navbar>
            <NavItem>
              <NavLink className="nav-link fs-3 pt-5 mt-5 mb-3" to="/">
                <i className="fa fa-home fa-lg pt-5" /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link fs-3 mb-3" to="/projects">
                <i className="fa fa-list fa-lg" /> Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link fs-3 mb-3" to="/about">
                <i className="fa fa-info fa-lg" /> About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link fs-3 mb-3" to="/contact">
                <i className="fa fa-address-card fa-lg" /> Contact Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link fs-3 mt-2" to="/resume">
                <i className="fa fa-file fa-lg" /> Resume
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default NavHomePage;


