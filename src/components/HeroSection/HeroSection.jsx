// Component Explaination==================================================== 

/* Hero section of this website. It takes place after CustomNavbar component.
 It takes 3 props===
 1. heading: Large size heading text of this section
 2. article: an article after the heading
 3. btn: btn is either true or false. If btn====true, then button section will be visible otherwise button section will be display none. Because in most case, there is no button in Hero section. 
 */

import { Container } from "react-bootstrap";
import './HeroSection.css'

const HeroSection = ({ heading, article, btn }) => {
    return (      
        <Container className="d-flex  justify-content-lg-start  align-content-center px-0 pt-5 mb-5 ">

            <div className="w-50 pb-5 ">
                <h1 className="fw-bold  text-black  display-3 my-4 ">{heading}</h1>
                <article className="fs-5 mb-4 ">{article}</article>

                {/* hero-section-button-container: It contains the buttons of this component. In some page's there will not be any button. So, if btn props is true, only then it will be visible */}
                <div className={!btn ? " d-none " : " d-flex  justify-content-start  align-content-center w-100 "}>

                    {/* Get started button */}
                    <button className="btn btn-green text-white rounded-3 px-4 py-3 fw-semibold  me-3 ">Get Started</button>

                    {/*  Watch vide button */}
                    <button className="btn focus-ring focus-ring-success text-green px-4 py-3 fw-semibold ">
                        <img className="play-icon" src="/assets/Images/Essential icon.png" alt="" />
                        Watch video
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default HeroSection;