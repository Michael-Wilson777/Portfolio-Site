import { Container } from "reactstrap";
// import Navigation from "../../components/nav/Navigation";
import Resume from "./Resume";

const ResumePage = () => {
  return (
    <div>
    {/* <Container fluid>

      <Navigation current='resume' />     
    </Container> */}
    <Container fluid>
    <Resume />
    </Container>
    
    </div>
    
  );
};
export default ResumePage;
