import { Container } from "react-bootstrap";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import DotAfterHeroSection from "../DotAfterHeroSection/DotAfterHeroSection";
import HeroSection from "../HeroSection/HeroSection";

const Banner = ({heading, article, btn, fontweightOfArticle}) => {
    return (
        <Container fluid style={{zIndex:"1"}} className=" px-0  position-relative ">
            <CustomNavbar></CustomNavbar>
            <HeroSection
            heading={heading}
            article={article}
            btn={btn}
            fontweightOfArticle={fontweightOfArticle}
            ></HeroSection>
            <DotAfterHeroSection></DotAfterHeroSection>
        </Container>
    );
};

export default Banner;