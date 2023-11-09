import { Col, Container, Row } from "react-bootstrap";
import SmallDescriptionWithHeading from "../SmallDescriptionWithHeading/SmallDescriptionWithHeading";
import "./OurValues_HomePage.css"

const OurValues_HomePage = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={6}>

                </Col>
                <Col md={6}>
                    <SmallDescriptionWithHeading
                        heading="Experience the Benefits of Hygwell"
                        fontWeight="500"
                        fontFamily="font-family: 'Roboto', sans-serif"
                        textAlign="Start"
                        article="We strive to serve as a trusted healthcare partner to our customers. Our team of experts uphold the highest industry standards, leading us to create products and services that are distinguished by their quality, reliability, and innovation."
                        fontSizeOfHeading="1.9444444444444444vw"
                        fontSizeOfArticle="1.25vw"
                    ></SmallDescriptionWithHeading>

                 

                    <div className="allValues">
                        <div>
                            <img style={{width:" 3.161111111111111vw", height:" 2.561111111111111vw"}} src="../../../public/assets/Images/tick.PNG" alt="" />
                            
                            <SmallDescriptionWithHeading
                                heading="Quality Products"
                                article="Our pharmaceutical products meet the highest industry standards ensuring your complete satisfaction."
                                fontSizeOfHeading="1.9444444444444444vw"
                                fontSizeOfArticle="1.25vw"
                                fontWeight="500"
                                fontFamily="font-family: 'Roboto', sans-serif"
                                textAlign="Start"

                            ></SmallDescriptionWithHeading>
                        </div>

                        <div>
                            <img style={{width:" 3.161111111111111vw", height:" 2.561111111111111vw"}} src="../../../public/assets/Images/tick.PNG" alt="" />
                            
                            <SmallDescriptionWithHeading
                                heading="Quality Products"
                                article="Our pharmaceutical products meet the highest industry standards ensuring your complete satisfaction."
                                fontSizeOfHeading="1.9444444444444444vw"
                                fontSizeOfArticle="1.25vw"
                                fontWeight="500"
                                fontFamily="font-family: 'Roboto', sans-serif"
                                textAlign="Start"

                            ></SmallDescriptionWithHeading>
                        </div>

                        <div>
                            <img style={{width:" 3.161111111111111vw", height:" 2.561111111111111vw"}} src="../../../public/assets/Images/tick.PNG" alt="" />
                            
                            <SmallDescriptionWithHeading
                                heading="Quality Products"
                                article="Our pharmaceutical products meet the highest industry standards ensuring your complete satisfaction."
                                fontSizeOfHeading="1.9444444444444444vw"
                                fontSizeOfArticle="1.25vw"
                                fontWeight="500"
                                fontFamily="font-family: 'Roboto', sans-serif"
                                textAlign="Start"

                            ></SmallDescriptionWithHeading>
                        </div>

                        <div>
                            <img style={{width:" 3.161111111111111vw", height:" 2.561111111111111vw"}} src="../../../public/assets/Images/tick.PNG" alt="" />
                            
                            <SmallDescriptionWithHeading
                                heading="Quality Products"
                                article="Our pharmaceutical products meet the highest industry standards ensuring your complete satisfaction."
                                fontSizeOfHeading="1.9444444444444444vw"
                                fontSizeOfArticle="1.25vw"
                                fontWeight="500"
                                fontFamily="font-family: 'Roboto', sans-serif"
                                textAlign="Start"

                            ></SmallDescriptionWithHeading>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default OurValues_HomePage;