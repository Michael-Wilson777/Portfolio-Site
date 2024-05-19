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

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container fluid className="text-center pe-5">
      <Row className='justify-content-center pe-3'>
        <Col md='10' className="justify-self-center pe-5">
          <Navbar className="d-flex" dark sticky="top" expand="md">
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
              <Nav className="ms-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link fs-3 mx-4" to="/">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link fs-3 mx-4" to="/projects">
                    <i className="fa fa-list fa-lg" /> Projects
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link fs-3 mx-4" to="/about">
                    <i className="fa fa-info fa-lg" /> About Me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link fs-3 mx-4" to="/contact">
                    <i className="fa fa-address-card fa-lg" /> Contact Me
                  </NavLink>
                </NavItem>
                {/* <NavItem>
              <NavLink className="nav-link" to="/resume">
                <i className="fa fa-address-card fa-lg" /> Resume
              </NavLink>
            </NavItem> */}
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
