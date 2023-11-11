import { Container } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import BackgroundImageContainer from "../../components/BackgroundImageContainer/BackgroundImageContainer";
import AboutUs_HomePage from "../../components/AboutUs_HomePage/AboutUs_HomePage";
import OurOfferings_HomePage from "../../components/OurOfferings_HomePage/OurOfferings_HomePage";
import OurValues_HomePage from "../../components/OurValues_HomePage/OurValues_HomePage";
import ProductShowCase_HomePage from "../../components/ProductShowCase_HomePage/ProductShowCase_HomePage";
import OurVision from "../../components/OurVision/OurVision";
import TechniqalHealthCareSection_HomPage from "../../components/TechniqalHealthCareSection_HomPage/TechniqalHealthCareSection_HomPage";
import MeetOurTeam from "../../components/MeetOurTeam/MeetOurTeam";
import GetYourPharmacy_HomePage from "../../components/GetYourPharmacy_HomePage/GetYourPharmacy_HomePage";
import BeforeFooter_HomePage from "../../components/BeforeFooter_HomePage/BeforeFooter_HomePage";
import Footer from "../../components/Footer/Footer";


const Home = () => {
    return (
        <Container fluid className=" px-0 ">
            <Banner
            heading="Welcome to HYGWELL"
            article="Your Trusted Partner in Healthcare Solutions"
            btn={true}
            fontweightOfArticle="500"
            ></Banner>
            {/* background image of banner */}
            <BackgroundImageContainer 
            rightSideImg="../../../public/assets/Images/right-img-of-banner-homepage.png"
            ></BackgroundImageContainer>
            <AboutUs_HomePage></AboutUs_HomePage>
            <OurOfferings_HomePage></OurOfferings_HomePage>
            <OurValues_HomePage></OurValues_HomePage>
            <ProductShowCase_HomePage></ProductShowCase_HomePage>
            <OurVision></OurVision>
            <TechniqalHealthCareSection_HomPage></TechniqalHealthCareSection_HomPage>
            <MeetOurTeam></MeetOurTeam>
            <GetYourPharmacy_HomePage></GetYourPharmacy_HomePage>
            <BeforeFooter_HomePage></BeforeFooter_HomePage>
            <Footer></Footer>
        </Container>
    );
};

export default Home;