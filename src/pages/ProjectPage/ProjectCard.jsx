import { Card, CardImg, CardImgOverlay, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";


const ProjectCard = ({project}) => {
    const { id, image, name, linkFile, linkDemo } = project;
    return (
      <Link to={`${id}`}>
          <Card>
            <CardImg
              width="100%"
              src={image}
              alt={name}
            />
            <CardImgOverlay>
              <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
            <Button color="primary" href={linkFile} target="_blank" rel="noopener noreferrer">File</Button>
            <Button color="primary" href={linkDemo} target="_blank" rel="noopener noreferrer">Demo</Button>
          </Card>
        </Link>
    );
  };
  
  export default ProjectCard;
  