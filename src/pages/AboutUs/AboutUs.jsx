import { Container } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import BackgroundImageContainer from "../../components/BackgroundImageContainer/BackgroundImageContainer";
import AboutUs_AboutUsPage from "../../components/AboutUs_AboutUsPage/AboutUs_AboutUsPage";


const AboutUs = () => {
    return (
        <Container fluid>
            <Banner></Banner>
            <BackgroundImageContainer
            rightSideImg="../../../public/assets/Images/Group 1171282607.png"
            ></BackgroundImageContainer>
            <AboutUs_AboutUsPage></AboutUs_AboutUsPage>
        </Container>
    );
};

export default AboutUs;