import { Container } from "reactstrap";
import SubHeader from '../../components/SubHeader';
import PageList from "./PageList";
import { Intro } from "../../Intro";



// src\PageList.jsx

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' />
            <Intro />
            <PageList />
        </Container>
    )
};

export default HomePage;
