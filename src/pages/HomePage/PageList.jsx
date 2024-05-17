import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const PageList = () => {

    return (
        <Row className='ms-auto'>
            <Col md='6' className='m-4'>
                <Link to='projects'>Projects</Link>
                <Link to='about'>About Me</Link>
                <Link to='contact'>Contact Me</Link>
                <Link to='resume'>My Resume</Link>
            </Col> 
        </Row>
    );
}

export default PageList