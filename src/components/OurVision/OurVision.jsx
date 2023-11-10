import { Col, Container, Row } from 'react-bootstrap';
import './OurVision.css'
import SmallDescriptionWithHeading from '../SmallDescriptionWithHeading/SmallDescriptionWithHeading';

const OurVision = () => {
    return (
        <Container className=' position-relative ' fluid>
            <Row>
                <Col md={6}>
                    {/* background image */}
                    <img className='bgImgOfOurVisionSection' src="../../../public/assets/Images/Group 64.png" alt="" />
                    {/* Our Vision image */}
                    <img className=' img-fluid ' src="../../../public/assets/Images/Shapes.png" alt="" />
                </Col>

                <Col style={{ marginTop: " 4.040972222222222vw" }} md={6}>
                    <SmallDescriptionWithHeading
                        heading="Unified Healthcare Solutions"
                        article="At Hygwell, we ensure to bring you only the best. From top-notch pharmaceuticals to innovative packing solutions, we understand the ever-changing demands and challenges of the healthcare industry."
                        textAlign="Start"
                        fontFamily="'Roboto', sans-serif"
                        fontWeight="500"
                        fontSizeOfHeading="1.9444444444444444vw"
                        fontSizeOfArticle="1.25vw"
                    ></SmallDescriptionWithHeading>

                    <p  style={{ marginTop: "3.263888888888889vw", fontSize:"1.25vw", fontWeight:"500" }}>
                        <img src="../../../public/assets/Images/Subtract.png" style={{ width: "2.2222222222222223vw", height: "2.2222222222222223vw",  marginRight:"1.3888888888888888vw"  }} alt="" />
                        Adapting to Consumer Preferences
                    </p>

                    <p style={{fontSize:"1.25vw", fontWeight:"500"}}>
                        <img src="../../../public/assets/Images/Subtract.png" style={{ width: "2.2222222222222223vw", height: "2.2222222222222223vw", marginRight:"1.3888888888888888vw" }} alt="" />
                        International presence & high-quality healthcare.
                    </p>

                    <p style={{fontSize:"1.25vw", fontWeight:"500"}}>
                        <img src="../../../public/assets/Images/Subtract.png" style={{ width: "2.2222222222222223vw", height: "2.2222222222222223vw",  marginRight:"1.3888888888888888vw"  }} alt="" />
                        Personalized and AI Crafted Products
                    </p>

                    <p style={{fontSize:"1.25vw", fontWeight:"500"}}>
                        <img src="../../../public/assets/Images/Subtract.png" style={{ width: "2.2222222222222223vw", height: "2.2222222222222223vw",  marginRight:"1.3888888888888888vw"  }} alt="" />
                        Ethical & Responsible Practices
                    </p>

                    <p style={{fontSize:"1.25vw", fontWeight:"500"}}>
                        <img src="../../../public/assets/Images/Subtract.png" style={{ width: "2.2222222222222223vw", height: "2.2222222222222223vw",  marginRight:"1.3888888888888888vw"  }} alt="" />
                        Sustainable Compliance Approach
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default OurVision;