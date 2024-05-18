import React from "react";
import { Container } from "reactstrap";
import ProjectsList from "./ProjectsList";
import Nav from "../../components/Nav";

const ProjectsPage = () => {
  return (
    <div className='projects__page'>
      <Container fluid>

          <Nav current="projects" />

      </Container>

      

      <Container fluid>      
          <ProjectsList />
      </Container>

    </div>
  );
};

export default ProjectsPage;
