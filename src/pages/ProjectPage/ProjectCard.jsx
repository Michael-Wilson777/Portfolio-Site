import { Card, CardImg, Button, CardTitle, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

import './ProjectCard.css'; // Make sure to import the CSS file

const ProjectCard = ({ project }) => {
  const { id, img, name, languages, file, demo } = project;
  return (
    <div className='card-item'>
      <Link to={`${id}`} className="card-link">
        <Card className='card'>
          <CardImg src={img} alt={name} className='card-img'/>
          <CardBody className="text-light fs-6 card-body">
            <CardTitle className='card-title text-dark'>{name}</CardTitle>
            <CardText className='card-text text-dark mb-4'>{languages}</CardText>
          </CardBody>
          <CardBody>
            <Button
              className='fileBtn me-1'
              color="primary"
              href={ file }
              target="_blank"
              rel="noopener noreferrer"
            >
              File
            </Button>
            <Button
              className='demoBtn ms-1'
              color="primary"
              href={ demo }
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </Button>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default ProjectCard;



