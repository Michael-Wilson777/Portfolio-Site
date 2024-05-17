import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import PROJECT from './shared/PROJECT';

const DisplayCard = ({project}) => {
    
    const { id, name, languages } = PROJECT;
    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{languages}</CardText>
            </CardBody>
        </Card>
    );
};

export default DisplayCard