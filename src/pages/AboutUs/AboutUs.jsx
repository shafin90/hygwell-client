import { Container } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import BackgroundImageContainer from "../../components/BackgroundImageContainer/BackgroundImageContainer";
import AboutUs_AboutUsPage from "../../components/AboutUs_AboutUsPage/AboutUs_AboutUsPage";
import Certification_AboutUsPage from "../../components/Certification_AboutUsPage/Certification_AboutUsPage";
import Footer from "../../components/Footer/Footer";

const AboutUs = () => {
    return (
        <Container fluid className=" px-0 ">
             

            <Banner
                heading="About Us"
                article="HYGWELL is your trusted partner for high-quality pharmaceuticals solutions. We specialize in providing the best healthcare services for you with a dedication to excellence, customer satisfaction, and constant innovation."
                btn={false}
                fontweightOfArticle="500"
            ></Banner>
            <BackgroundImageContainer
                rightSideImg="/assets/Images/Group 1171282607.jpg"
            ></BackgroundImageContainer>
            <AboutUs_AboutUsPage
                heading="About Us"
            ></AboutUs_AboutUsPage>
            <Certification_AboutUsPage></Certification_AboutUsPage>
            <Footer></Footer>
        </Container>
    );
};

export default AboutUs;