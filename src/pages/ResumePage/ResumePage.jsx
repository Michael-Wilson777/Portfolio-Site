import { Container, Button } from "reactstrap";
// import Navigation from "../../components/nav/Navigation";
import Resume from "./Resume";

const ResumePage = () => {
  return (
    <div >

    <Container fluid>
    <Resume />
    <Container className="text-center">
        <Button className="mt-5" href="/">
          Home
        </Button>
      </Container>
    </Container>
    
    </div>
    
  );
};
export default ResumePage;
