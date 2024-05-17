import { Container } from "reactstrap";
import ProjectsList from "./PojectsList";
import SubHeader from "../../components/SubHeader";

const ProjectsPage = () => {
  return (
    <Container>
      <SubHeader current="projects" />
      <ProjectsList />
    </Container>
  );
};

export default ProjectsPage;
