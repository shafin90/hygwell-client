import { Col, Container, Row } from "react-bootstrap";
import './HeroSection.css';
import Fade, { Bounce, JackInTheBox, Slide, Zoom } from 'react-awesome-reveal'; // Import the specific animation effect you want to use
import { FaRegPlayCircle } from "react-icons/fa";

const HeroSection = ({ heading, article, btn }) => {
    return (
        <Container className="d-flex justify-content-lg-start align-content-center px-0 pt-5 mb-5">
            <Row>
                <Col sm={12} md={8} className=" pb-5 ps-4 ps-md-0 ps-lg-0  ps-xl-0  px-xxl-0 pe-4 pe-md-0 pe-lg-0  pe-xl-0  pe-xxl-0 ">
                    <Bounce duration={500} triggerOnce>
                        <h1 className="fw-bold display-3 my-4 heroSectionHeading">{heading}</h1>
                    </Bounce>
                    <Zoom duration={1500} triggerOnce >
                        <article className=" mb-4 w-75 text-secondary">{article}</article>

                        <div className={!btn ? "d-none" : "d-flex flex-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-start align-content-center w-100"}>
                            <button className="btn btn-success text-white rounded-3 px-4 py-3 fw-semibold mb-4 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0 ">Get Started</button>
                        </div>
                    </Zoom>
                </Col>

                <Col sm={12} md={4}></Col>
            </Row>

        </Container>
    );
};

export default HeroSection;
