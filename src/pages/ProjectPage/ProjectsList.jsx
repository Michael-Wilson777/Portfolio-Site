import { Row, Col, Container } from "reactstrap";
import { PROJECTS } from "./PROJECTS";
import ProjectCard from "./ProjectCard";
import './ProjectCard.css';

const ProjectsList = () => {
  return (
    <Container className='text-center mt-5 pt-3'>
    <Row className='justify-content-center'>
      {PROJECTS.map((project) => (
        <Col md='2' className='me-auto' key={project.id}>
          <ProjectCard className='cards' project={project} />
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default ProjectsList;
