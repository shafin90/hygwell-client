import { Col, Container, Row } from 'react-bootstrap';
import './OurVision.css'
import SmallDescriptionWithHeading from '../SmallDescriptionWithHeading/SmallDescriptionWithHeading';
import { JackInTheBox, Slide } from 'react-awesome-reveal';
import { BsCheckCircleFill } from "react-icons/bs";


const OurVision = () => {

    return (
        <Container className='position-relative mb-5 pb-5 ' fluid>
            <Row className='d-flex justify-content-evenly align-items-center'>
                <Col md={5} className=' position-relative '>
                    <h1 className=' position-absolute ourVisionHeading z-1 text-center text-white fw-bold display-5'>Our <br /> Vision</h1>
                    {/* background image */}
                    <img className='bgImgOfOurVisionSection' src="/assets/Images/Group 64.png" alt="" />
                    {/* Our Vision image */}
                    <JackInTheBox>
                        <img className=' img-fluid z-0  ' src="/assets/Images/Shapes.png" alt="" />
                    </JackInTheBox>
                </Col>

                <Col md={5} className=' mb-5 mb-md-0 mb-lg-0 '>
                    <SmallDescriptionWithHeading
                        heading="Unified Healthcare Solutions"
                        article="At Hygwell, we ensure to bring you only the best. From top-notch pharmaceuticals to innovative packing solutions, we understand the ever-changing demands and challenges of the healthcare industry."
                        headingClass="h2 fw-bold mb-3"
                    ></SmallDescriptionWithHeading>

                    <Slide duration={1000} direction='right' cascade >
                        <p className=' mt-4  '>
                            <BsCheckCircleFill className='me-3 text-success fs-5' />
                            Adapting to Consumer Preferences
                        </p>

                        <p>
                            <BsCheckCircleFill className='me-3 text-success fs-5' />
                            International presence & high-quality healthcare.
                        </p>

                        <p>
                            <BsCheckCircleFill className='me-3 text-success fs-5' />
                            Personalized and AI Crafted Products
                        </p>


                        <p >
                            <BsCheckCircleFill className='me-3 text-success fs-5' />
                            Ethical & Responsible Practices
                        </p>


                        <p >
                            <BsCheckCircleFill className='me-3 text-success fs-5' />
                            Sustainable Compliance Approach
                        </p>
                    </Slide>
                </Col>
            </Row>
        </Container>
    );
};

export default OurVision;