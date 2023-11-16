import { Col, Container, Row } from 'react-bootstrap';
import './OurVision.css'
import SmallDescriptionWithHeading from '../SmallDescriptionWithHeading/SmallDescriptionWithHeading';
import { useEffect, useState } from 'react';

const OurVision = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    // Use the useEffect hook to update the screenWidth state whenever the window size changes
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <Container className=' position-relative ' fluid>
            <Row>
                <Col md={6}>
                    {/* background image */}
                    <img className='bgImgOfOurVisionSection' src="/assets/Images/Group 64.png" alt="" />
                    {/* Our Vision image */}
                    <img className=' img-fluid ' src="/assets/Images/Shapes.png" alt="" />
                </Col>

                <Col className=' mb-5 mb-md-0 mb-lg-0  ps-5 ps-md-0 ps-lg-0' style={{ marginTop: " 4.040972222222222vw" }} md={6}>
                    <SmallDescriptionWithHeading
                        heading="Unified Healthcare Solutions"
                        article="At Hygwell, we ensure to bring you only the best. From top-notch pharmaceuticals to innovative packing solutions, we understand the ever-changing demands and challenges of the healthcare industry."
                        textAlign="Start"
                        fontFamily="'Roboto', sans-serif"
                        fontWeight="500"
                        fontSizeOfHeading="1.9444444444444444vw"
                        fontSizeOfArticle="1.25vw"
                    ></SmallDescriptionWithHeading>

                    <p style={{ marginTop: "3.263888888888889vw", fontSize: `${screenWidth < 576 ? "4vw" : "1.25vw"}`, fontWeight: "500" }}>
                        <img className='tickSign' src="/assets/Images/Subtract (2).png" alt="" />
                        Adapting to Consumer Preferences
                    </p>

                    <p style={{ fontSize: `${screenWidth < 576 ? "4vw" : "1.25vw"}`, fontWeight: "500" }}>
                        <img className='tickSign' src="/assets/Images/Subtract (2).png" alt="" />
                        International presence & high-quality healthcare.
                    </p>

                    <p style={{ fontSize: `${screenWidth < 576 ? "4vw" : "1.25vw"}`, fontWeight: "500" }}>
                        <img className='tickSign' src="/assets/Images/Subtract (2).png" alt="" />
                        Personalized and AI Crafted Products
                    </p>

                    <p style={{ fontSize: `${screenWidth < 576 ? "4vw" : "1.25vw"}`, fontWeight: "500" }}>
                        <img className='tickSign' src="/assets/Images/Subtract (2).png" alt="" />
                        Ethical & Responsible Practices
                    </p>

                    <p style={{ fontSize: `${screenWidth < 576 ? "4vw" : "1.25vw"}`, fontWeight: "500" }}>
                        <img className='tickSign' src="/assets/Images/Subtract (2).png" alt="" />
                        Sustainable Compliance Approach
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default OurVision;