import { Container } from "reactstrap";
import Nav from "../../components/Nav";
import Resume from "./Resume";

const ResumePage = () => {
  return (
    <Container>
      <Nav current='resume' />
      <Resume />
    </Container>
  );
};
export default ResumePage;
