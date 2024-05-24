import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProjectsList from "./ProjectsList";
import MainNavigation from "../../components/nav/Navigation";
import './Projects.css';

const ProjectsPage = () => {
  return (
    <div className="projects__page ms-5 ps-5 mt-5">
      <MainNavigation current="projects" />
      <Container className="dflex" fluid>
        <Row className="ps-5 ms-3">
          <Col>
            <ProjectsList className='text-light' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectsPage;
