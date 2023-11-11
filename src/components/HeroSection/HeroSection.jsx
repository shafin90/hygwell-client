// Component Explaination: Hero section of this website. It takes place after CustomNavbar component.
// CSS class explaination

import { Container } from "react-bootstrap";
import './HeroSection.css'


const HeroSection = ({heading, article, btn, fontweightOfArticle}) => {
    return (
        <Container fluid className="hero-section d-flex  justify-content-lg-start  align-content-center px-0  ">
            <div className="inside-container-herosection">

                {/*===== Hero section heading =======*/}
                <h1 className="hero-section-heading">
                    {heading}
                </h1>

                {/* hero-section-article */}
                <article style={{fontWeight:fontweightOfArticle}} className="hero-section-article">
                    {article}
                </article>

                {/* hero-section-button-container */}
                <div className={!btn?" d-none ":" d-flex  justify-content-start  align-content-center "}>
                    <button className="get-started">Get Started</button>
                    <button className="watch-video">
                        <img className="play-icon" src="../../../public/assets/Images/play-icon.png" alt="" />
                        Watch video
                    </button>
                </div>

            </div>
        </Container>
    );
};

export default HeroSection;