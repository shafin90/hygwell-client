import { Container } from "react-bootstrap";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";
import HeroSection from "../../components/HeroSection/HeroSection";


const Home = () => {
    return (
        <Container fluid className=" px-0 ">
            <CustomNavbar></CustomNavbar>
            <HeroSection></HeroSection>
        </Container>
    );
};

export default Home;