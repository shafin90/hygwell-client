import { Container } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import BackgroundImageContainer from "../../components/BackgroundImageContainer/BackgroundImageContainer";
import AboutUs_HomePage from "../../components/AboutUs_HomePage/AboutUs_HomePage";
import OurOfferings_HomePage from "../../components/OurOfferings_HomePage/OurOfferings_HomePage";
import OurValues_HomePage from "../../components/OurValues_HomePage/OurValues_HomePage";
import ProductShowCase_HomePage from "../../components/ProductShowCase_HomePage/ProductShowCase_HomePage";
import OurVision from "../../components/OurVision/OurVision";


const Home = () => {
    return (
        <Container fluid className=" px-0 ">
            <Banner></Banner>
            {/* background image of banner */}
            <BackgroundImageContainer></BackgroundImageContainer>
            <AboutUs_HomePage></AboutUs_HomePage>
            <OurOfferings_HomePage></OurOfferings_HomePage>
            <OurValues_HomePage></OurValues_HomePage>
            <ProductShowCase_HomePage></ProductShowCase_HomePage>
            <OurVision></OurVision>
        </Container>
    );
};

export default Home;