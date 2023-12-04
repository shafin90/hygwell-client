import { Container } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import BackgroundImageContainer from "../../components/BackgroundImageContainer/BackgroundImageContainer";
import AboutUs_AboutUsPage from "../../components/AboutUs_AboutUsPage/AboutUs_AboutUsPage";
import Footer from "../../components/Footer/Footer";
import BoxContentContainer_ExportPage from "../../components/BoxContentContainer_ExportPage/BoxContentContainer_ExportPage";
import WhyChoose_ExportPage from "../../components/WhyChoose_ExportPage/WhyChoose_ExportPage";
import SmallDescriptionWithHeading from "../../components/SmallDescriptionWithHeading/SmallDescriptionWithHeading";
import BeforeFooter_HomePage from "../../components/BeforeFooter_HomePage/BeforeFooter_HomePage";
import ReasonContainerWhyChoose_ExportsPage from "../../components/ReasonContainerWhyChoose_ExportsPage/ReasonContainerWhyChoose_ExportsPage";


const Exports = () => {
    return (
        <Container fluid className=" px-0 ">
            <Banner
                heading="Exports"
                article="HYGWELL is your trusted partner for high-quality pharmaceuticals solutions. We specialize in providing the best healthcare services for you with a dedication to excellence, customer satisfaction, and constant innovation."
                btn={false}
                fontweightOfArticle="500"
            ></Banner>
            <BackgroundImageContainer
                rightSideImg="/assets/Images/Group 1171282607 (2).jpg"
            ></BackgroundImageContainer>

            <AboutUs_AboutUsPage
                heading="Exports Credo"
            ></AboutUs_AboutUsPage>

            <BoxContentContainer_ExportPage></BoxContentContainer_ExportPage>

            <WhyChoose_ExportPage></WhyChoose_ExportPage>
            <ReasonContainerWhyChoose_ExportsPage></ReasonContainerWhyChoose_ExportsPage>
            <BeforeFooter_HomePage></BeforeFooter_HomePage>
            <Footer></Footer>
        </Container>
    );
};

export default Exports;