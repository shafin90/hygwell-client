import { Container } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import BackgroundImageContainer from "../../components/BackgroundImageContainer/BackgroundImageContainer";


const Home = () => {
    return (
        <Container fluid className=" px-0 ">
            <Banner></Banner>
            <BackgroundImageContainer></BackgroundImageContainer>
        </Container>
    );
};

export default Home;