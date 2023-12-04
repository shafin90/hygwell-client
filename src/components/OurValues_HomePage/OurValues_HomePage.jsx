import { Col, Container, Row } from "react-bootstrap";
import SmallDescriptionWithHeading from "../SmallDescriptionWithHeading/SmallDescriptionWithHeading";
import "./OurValues_HomePage.css"
import { AttentionSeeker, Fade, JackInTheBox, Zoom } from "react-awesome-reveal";


const OurValues_HomePage = () => {
    return (
        <Container fluid className=" pt-4 px-0 ourValues_HomePage">
            <Row className="d-flex justify-content-evenly align-items-center position-relative">
                {/* Left side image */}
                <Col md={5} className=" d-flex justify-content-center align-items-center">

                    <h1 className="display-5 position-absolute z-1 ourValuesHeading text-white fw-bold text-center h1">

                        Our
                        <br /> Values

                    </h1>

                    <JackInTheBox>
                        <img src="/assets/Images/Decoration.jpg" className=" z-0  img-fluid " alt="" />
                    </JackInTheBox>
                </Col>

                {/* Right side text */}
                <Col md={5} className=" position-relative px-5 px-md-0 ">
                    {/* Background image============== */}
                    <img src="/assets/Images/Subtract (1).png" className="ourvaluesBackgroundImg" alt="" />
                    <SmallDescriptionWithHeading
                        heading="Experience the Benefits of Hygwell"
                        article="We strive to serve as a trusted healthcare partner to our customers. Our team of experts uphold the highest industry standards, leading us to create products and services that are distinguished by their quality, reliability, and innovation."
                        headingClass="h2 fw-bold"
                    ></SmallDescriptionWithHeading>



                    <div className="allValues mt-4 ">
                        <div>
                            <Fade>
                                <img className=" mb-2 " src="/assets/Images/Rectangle (1).png" alt="" />
                            </Fade>

                            <SmallDescriptionWithHeading
                                heading="Quality Products"
                                article="Our pharmaceutical products meet the highest industry standards ensuring your complete satisfaction."
                                headingClass="h4 fw-bold"
                            ></SmallDescriptionWithHeading>
                        </div>

                        <div>
                            <Fade>
                                <img className=" mb-2 " src="/assets/Images/Rectangle (2).png" alt="" />
                            </Fade>
                            <SmallDescriptionWithHeading
                                heading="Professional Team"
                                article="Our team ensures to bring quality and satisfactory service, driven by expertise and unwavering dedication."
                                headingClass="h4 fw-bold"
                            ></SmallDescriptionWithHeading>
                        </div>

                        <div>
                            <Fade>
                                <img className=" mb-2 " src="/assets/Images/Rectangle.png" alt="" />
                            </Fade>

                            <SmallDescriptionWithHeading
                                heading="Customer Satisfaction"
                                article="Providing top-notch healthcare solutions is our utmost priority. Your satisfaction is our success."
                                headingClass="h4 fw-bold"
                            ></SmallDescriptionWithHeading>
                        </div>

                        <div>
                            <Fade>
                                <img className=" mb-2 " src="/assets/Images/Rectangle (3).png" alt="" />
                            </Fade>

                            <SmallDescriptionWithHeading
                                heading="Innovative Solutions"
                                article="We constantly push the boundaries to provide cutting-edge packing solutions for your needs."
                                headingClass="h4 fw-bold"

                            ></SmallDescriptionWithHeading>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default OurValues_HomePage;