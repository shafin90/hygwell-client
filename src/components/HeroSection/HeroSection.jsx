// Component Explaination==================================================== 

/* Hero section of this website. It takes place after CustomNavbar component.
 It takes 4 props===
 1. heading: Large size heading text of this section
 2. article: an article after the heading
 3. btn: btn is either true or false. If btn====true, then button section will be visible otherwise button section will be display none. Because in most case, there is no button in Hero section. 
 4. fontweightOfArticle: font-size of article. 
 */

import { Container } from "react-bootstrap";
import './HeroSection.css'

const HeroSection = ({ heading, article, btn, fontweightOfArticle }) => {
    return (

        /* hero-section: this is outer container of the hero section. it contains. inside-container-herosection . */
        <Container fluid className="hero-section d-flex  justify-content-lg-start  align-content-center px-0  ">

            {/* inside-container-herosection: It is the inner container of hero-section. It contains the heading, article and button. */}
            <div className="inside-container-herosection">

                {/*hero-section-heading: heading of this component.*/}
                <h1 className="hero-section-heading">
                    {heading}
                </h1>

                {/* hero-sectiuon-article: article of this component. */}
                <article style={{ fontWeight: fontweightOfArticle }} className="hero-section-article">
                    {article}
                </article>

                {/* hero-section-button-container: It contains the buttons of this component. In some page's there will not be any button. So, if btn props is true, only then it will be visible */}
                <div className={!btn ? " d-none " : " d-flex  justify-content-start  align-content-center w-100 "}>
                    
                    {/* Get started button */}
                    <button className="get-started">Get Started</button>
                    
                    {/*  Watch vide button */}
                    <button className="watch-video">
                        <img className="play-icon" src="/assets/Images/Essential icon.png" alt="" />
                        Watch video
                    </button>
                </div>

            </div>
        </Container>
    );
};

export default HeroSection;