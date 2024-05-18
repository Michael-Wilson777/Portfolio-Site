import { Card, CardImg, Button, CardTitle, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import './ProjectCard.css'; // Make sure to import the CSS file

const ProjectCard = ({ project }) => {
  const { id, img, name, languages, linkFile, linkDemo } = project;
  return (
    <Link to={`${id}`}>
      <Card className='card'>
        <CardImg src={img} alt={name} />
        <CardBody className="text-light fs-6">
          <CardTitle>{name}</CardTitle>
          <CardText>{languages}</CardText>
          <Button
            className='fileBtn me-3'
            color="primary"
            href={linkFile}
            target="_blank"
            rel="noopener noreferrer"
          >
            File
          </Button>
          <Button
            classname='demoBtn'
            color="primary"
            href={linkDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </Button>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProjectCard;
