import { Col, Container, Row } from 'react-bootstrap';
import './OurVision.css'
import SmallDescriptionWithHeading from '../SmallDescriptionWithHeading/SmallDescriptionWithHeading';
import { JackInTheBox, Slide } from 'react-awesome-reveal';


const OurVision = () => {

    return (
        <Container className='position-relative mb-5 pb-5 ' fluid>
            <Row className='d-flex justify-content-evenly align-items-center'>
                <Col md={5}>
                    {/* background image */}
                    <img className='bgImgOfOurVisionSection' src="/assets/Images/Group 64.png" alt="" />
                    {/* Our Vision image */}
                    <JackInTheBox>
                        <img className=' img-fluid ' src="/assets/Images/Shapes.png" alt="" />
                    </JackInTheBox>
                </Col>

                <Col md={5} className=' mb-5 mb-md-0 mb-lg-0  ps-5 ps-md-0 ps-lg-0'>
                    <SmallDescriptionWithHeading
                        heading="Unified Healthcare Solutions"
                        article="At Hygwell, we ensure to bring you only the best. From top-notch pharmaceuticals to innovative packing solutions, we understand the ever-changing demands and challenges of the healthcare industry."
                        headingClass="h2 fw-bold mb-3"
                    ></SmallDescriptionWithHeading>

                    <Slide duration={1000} direction='right' cascade >
                        <p className=' mt-4  '>
                            <img className='tickSign' src="/assets/Images/Subtract (2).png" alt="" />
                            Adapting to Consumer Preferences
                        </p>

                        <p >
                            <img className='tickSign' src="/assets/Images/Subtract (2).png" alt="" />
                            International presence & high-quality healthcare.
                        </p>

                        <p >
                            <img className='tickSign' src="/assets/Images/Subtract (2).png" alt="" />
                            Personalized and AI Crafted Products
                        </p>


                        <p >
                            <img className='tickSign' src="/assets/Images/Subtract (2).png" alt="" />
                            Ethical & Responsible Practices
                        </p>


                        <p >
                            <img className='tickSign' src="/assets/Images/Subtract (2).png" alt="" />
                            Sustainable Compliance Approach
                        </p>
                    </Slide>
                </Col>
            </Row>
        </Container>
    );
};

export default OurVision;