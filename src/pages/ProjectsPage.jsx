import { Container } from 'reactstrap';
import Projects from "./ProjectsPage/Projects";
import SubHeader from '../components/SubHeader';

const ProjectsPage = () => {
    return (
        <Container>
            <SubHeader current='projects' />
            <Projects />
        </Container>
    );
}

export default ProjectsPage;