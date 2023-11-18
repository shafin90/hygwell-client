// Component explaination======================================================= 
// This component is "About us" section of homepage. It contains an image at the left side and some text at the rightside. At rightSide there are heading, article and some counter. We use "SmallDescriptionWithHeading" component for heading and article and "CounterInAboutUsHomePage" component for counter. 

import { Col, Container, Row } from "react-bootstrap";
import SmallDescriptionWithHeading from "../SmallDescriptionWithHeading/SmallDescriptionWithHeading";
import './AboutUs_HomePage.css'
import CounterInAboutUsHomePage from "../CounterInAboutUsHomePage/CounterInAboutUsHomePage";
import { JackInTheBox, Zoom } from "react-awesome-reveal";

const AboutUs_HomePage = () => {
    return (
        <Container fluid className=" mb-5 ">
            <Row className="d-flex justify-content-evenly align-content-center">
                {/* left side that contains image====================== */}

                <Col md={5} className=" position-relative  d-sm-flex justify-content-sm-center  align-items-sm-center mb-3 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0  ">
                    <JackInTheBox>
                        <div>
                            <h1 className=" aboutUs text-white h1 fw-bold display-6 ">About <br></br> Us</h1>
                            <img className=" img-fluid  " src="/assets/Images/Artwork (1).png" alt="" />
                        </div>
                    </JackInTheBox>
                </Col>


                {/* Right side that contains text======================= */}
                <Col md={5} className=" d-flex flex-column  justify-content-center  align-items-center ">

                    {/* =====Heading and article=====  */}
                    <SmallDescriptionWithHeading
                        heading="We Have You Covered!"
                        article="At HygWell , we are dedicated to delivering top-quality pharmaceutical and healthcare solutions. Explore our wide range of products and services designed to enhance health and well-being."
                        headingClass="h3 fw-bold "

                    ></SmallDescriptionWithHeading>

                    <div className="counterInAbout_HomePage_Container d-flex justify-content-around   align-content-center w-100 mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0 ">

                        {/* ===Counter=== */}
                        <CounterInAboutUsHomePage
                            category="Employee"
                            number={20}
                        ></CounterInAboutUsHomePage>

                        {/* ===Counter=== */}
                        <CounterInAboutUsHomePage
                            category="Products"
                            number={25}
                        ></CounterInAboutUsHomePage>

                        {/* ===Counter=== */}
                        <CounterInAboutUsHomePage
                            category="Clients"
                            number={90}
                        ></CounterInAboutUsHomePage>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs_HomePage;