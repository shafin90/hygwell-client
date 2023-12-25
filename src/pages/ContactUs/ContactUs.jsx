import { Container } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import BackgroundImageContainer from "../../components/BackgroundImageContainer/BackgroundImageContainer";
import ContactUs_ContactUsPage from "../../components/ContactUs_ContactUsPage/ContactUs_ContactUsPage";
import ContactInformation_ContactUsPage from "../../components/ContactInformation_ContactUsPage/ContactInformation_ContactUsPage";
import Footer from "../../components/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";


const ContactUs = () => {
    return (
        <Container fluid className=" px-0 ">

            {/* customised cursor */}
            <AnimatedCursor
                color='25, 135, 84'
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                  ]}
            />

            <Banner
                heading="Contact Us"
                article="HYGWELL is your trusted partner for high-quality pharmaceuticals solutions. We specialize in providing the best healthcare services for you with a dedication to excellence, customer satisfaction, and constant innovation."
                btn={false}
                fontweightOfArticle="500"
            ></Banner>
            {/* background image of banner */}
            <BackgroundImageContainer
                rightSideImg="/assets/Images/Group 1171282607 (3).jpg"
            ></BackgroundImageContainer>

            <ContactUs_ContactUsPage></ContactUs_ContactUsPage>
            <ContactInformation_ContactUsPage></ContactInformation_ContactUsPage>
            <Footer></Footer>
        </Container>
    );
};

export default ContactUs;