import { useState } from "react";
import {
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import './Navigation.css';


const MainNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container fluid className="text-center">
      {/* <Navbar className="d-flex ps-lg-5 ms-lg-5" dark sticky="top" expand="md">
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar> */}
          <Nav className="justify-content-center navbar">
            <NavItem>
              <NavLink className="nav-link fs-3 me-md-5 pe-md-2" to="/">
                <i className="fa fa-home fa-lg home text-light mb-2"><p className='home-text text-light'> Home</p></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link fs-3 ms-5 me-5" to="/projects">
                <i className="fa fa-list fa-lg proj-icon text-light mb-2" /> <p className='proj-text text-light'> Projects</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link fs-3 ms-5 me-5" to="/about">
                <i className="fa fa-info fa-lg about-icon text-light mb-2" /><p className='about-text text-light'> About Me</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link fs-3 ms-5 me-5" to="/contact">
                <i className="fa fa-address-card fa-lg contact-icon text-light mb-2" /><p className='contact-text text-light'> Contact Me</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link fs-3 ms-5 me-xxl-5" to="/resume">
                <i className="fa fa-file fa-lg resume-icon text-light mb-2" /><p className='resume-text text-light'> Resume</p> 
              </NavLink>
            </NavItem>
          </Nav>
        {/* </Collapse>
      </Navbar> */}
    </Container>
  );
};

export default MainNavigation;