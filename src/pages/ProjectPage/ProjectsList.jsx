
// import { showProjects } from "./projectsSlice";
// import React from "react";
import { Row, Col } from "reactstrap";
import { PROJECTS } from "./PROJECTS";
import ProjectCard from "./ProjectCard";
import './ProjectCard.css';

const ProjectsList = () => {
  return (
    <Row className='ms-auto'>
      {PROJECTS.map((project) => (
        <Col md='2' className='m-4' key={project.id}>
          <ProjectCard className='card' project={project} />
        </Col>
      ))}
    </Row>
  );
}

export default ProjectsList;
