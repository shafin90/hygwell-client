// Component's explaination================================================
// This component contains three other components. 
// CustomNavbar: Contains the navigation bar of this website
// Herosection: Contains the hero section of this website.
// DotAfterHeroSection: After HeroSection, there are some dot img. it contains those images.

// This component takes four props for herosection. Explaination of those props is available in that component.

import { Container } from "react-bootstrap";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import HeroSection from "../HeroSection/HeroSection";

const Banner = ({ heading, article, btn, fontweightOfArticle }) => {
    return (
        <Container fluid style={{ zIndex: "1" }} className=" px-0  position-relative">
            {/* This component contains navigation bar of this website */}

            <CustomNavbar></CustomNavbar>

            {/* This component contains hero section of this website*/}
            <HeroSection
                heading={heading}
                article={article}
                btn={btn}
                fontweightOfArticle={fontweightOfArticle}
            ></HeroSection>

        </Container>
    );
};

export default Banner;