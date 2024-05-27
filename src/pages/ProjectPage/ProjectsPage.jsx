import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProjectsList from "./ProjectsList";
import MainNavigation from "../../components/nav/Navigation";
// import './Projects.css';

const ProjectsPage = () => {
  return (
    <div className="projects__page">

      <MainNavigation current="projects" />

      <ProjectsList className='text-dark' />
      
    </div>
  );
};

export default ProjectsPage;
