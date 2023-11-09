import { Col, Container, Row } from 'react-bootstrap';
import './OurVision.css'
import SmallDescriptionWithHeading from '../SmallDescriptionWithHeading/SmallDescriptionWithHeading';

const OurVision = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={6}>
                    <img className=' img-fluid ' src="../../../public/assets/Images/Shapes.png" alt="" />
                </Col>

                <Col md={6}>
                    <SmallDescriptionWithHeading
                        heading="Unified Healthcare Solutions"
                        article="At Hygwell, we ensure to bring you only the best. From top-notch pharmaceuticals to innovative packing solutions, we understand the ever-changing demands and challenges of the healthcare industry."
                        textAlign="Start"
                        fontFamily="'Roboto', sans-serif"
                        fontWeight="500"
                        fontSizeOfHeading="1.9444444444444444vw"
                        fontSizeOfArticle="1.25vw"
                    ></SmallDescriptionWithHeading>

                    <p>
                        <img src="../../../public/assets/Images/Subtract.png" style={{ width: "7px", height: "7px" }} alt="" />
                        Adapting to Consumer Preferences
                    </p>

                    <p>
                        <img src="../../../public/assets/Images/Subtract.png" style={{ width: "7px", height: "7px" }} alt="" />
                        International presence & high-quality healthcare.
                    </p>

                    <p>
                        <img src="../../../public/assets/Images/Subtract.png" style={{ width: "7px", height: "7px" }} alt="" />
                        Personalized and AI Crafted Products
                    </p>

                    <p>
                        <img src="../../../public/assets/Images/Subtract.png" style={{ width: "7px", height: "7px" }} alt="" />
                        Ethical & Responsible Practices
                    </p>

                    <p>
                        <img src="../../../public/assets/Images/Subtract.png" style={{ width: "7px", height: "7px" }} alt="" />
                        Sustainable Compliance Approach
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default OurVision;