import { Container } from "react-bootstrap";
import './HeroSection.css';
import Fade, { Bounce, JackInTheBox, Slide, Zoom } from 'react-awesome-reveal'; // Import the specific animation effect you want to use

const HeroSection = ({ heading, article, btn }) => {
    return (
        <Container className="d-flex justify-content-lg-start align-content-center px-0 pt-5 mb-5">

            <div className="w-50 pb-5">
                <Bounce duration={500} triggerOnce>
                    <h1 className="fw-bold text-black display-3 my-4">{heading}</h1>
                </Bounce>
                <Zoom duration={1500} triggerOnce >
                    <article className="fs-5 mb-4">{article}</article>

                    <div className={!btn ? "d-none" : "d-flex justify-content-start align-content-center w-100"}>
                        <button className="btn btn-green text-white rounded-3 px-4 py-3 fw-semibold me-3">Get Started</button>
                        <button className="btn focus-ring focus-ring-success text-green px-4 py-3 fw-semibold">
                            <img className="play-icon" src="/assets/Images/Essential icon.png" alt="" />
                            Watch video
                        </button>
                    </div>
                </Zoom>
            </div>

        </Container>
    );
};

export default HeroSection;
