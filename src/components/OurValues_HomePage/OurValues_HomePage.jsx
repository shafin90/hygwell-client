import { Col, Container, Row } from "react-bootstrap";
import SmallDescriptionWithHeading from "../SmallDescriptionWithHeading/SmallDescriptionWithHeading";
import "./OurValues_HomePage.css"

const OurValues_HomePage = () => {
    return (
        <Container fluid  className=" pt-4 ">
            <Row>
                <Col md={6}>
                    <img src="../../../public/assets/Images/Decoration.png" className=" img-fluid " alt="" />
                </Col>
         
         
                <Col md={5} className=" position-relative ">
                    <img src="../../../public/assets/Images/Subtract (1).png"  className="ourvaluesBackgroundImg" alt="" />
                    <SmallDescriptionWithHeading
                        heading="Experience the Benefits of Hygwell"
                        fontWeight="500"
                        fontFamily="font-family: 'Roboto', sans-serif"
                        textAlign="Start"
                        article="We strive to serve as a trusted healthcare partner to our customers. Our team of experts uphold the highest industry standards, leading us to create products and services that are distinguished by their quality, reliability, and innovation."
                        fontSizeOfHeading="1.9444444444444444vw"
                        fontSizeOfArticle="1.25vw"
                    ></SmallDescriptionWithHeading>



                    <div className="allValues mt-4 ">
                        <div>
                            <img className=" mb-2 " style={{ width: " 2.361111111111111vw", height: " 2.361111111111111vw" }} src="../../../public/assets/Images/Rectangle (3).png" alt="" />

                            <SmallDescriptionWithHeading
                                heading="Quality Products"
                                article="Our pharmaceutical products meet the highest industry standards ensuring your complete satisfaction."
                                fontSizeOfHeading="1.9444444444444444vw"
                                fontSizeOfArticle="1.15vw"
                                fontWeight="500"
                                fontFamily="font-family: 'Roboto', sans-serif"
                                textAlign="Start"

                            ></SmallDescriptionWithHeading>
                        </div>

                        <div>
                            <img className=" mb-2 " style={{ width: " 2.361111111111111vw", height: " 2.361111111111111vw" }} src="../../../public/assets/Images/Rectangle (4).png" alt="" />

                            <SmallDescriptionWithHeading
                                heading="Professional Team"
                                article="Our team ensures to bring quality and satisfactory service, driven by expertise and unwavering dedication."
                                fontSizeOfHeading="1.9444444444444444vw"
                                fontSizeOfArticle="1.15vw"
                                fontWeight="500"
                                fontFamily="font-family: 'Roboto', sans-serif"
                                textAlign="Start"

                            ></SmallDescriptionWithHeading>
                        </div>

                        <div>
                            <img className=" mb-2 " style={{width: " 2.361111111111111vw", height: " 2.361111111111111vw" }} src="../../../public/assets/Images/Rectangle (5).png" alt="" />

                            <SmallDescriptionWithHeading
                                heading="Customer Satisfaction"
                                article="Providing top-notch healthcare solutions is our utmost priority. Your satisfaction is our success."
                                fontSizeOfHeading="1.9444444444444444vw"
                                fontSizeOfArticle="1.15vw"
                                fontWeight="500"
                                fontFamily="font-family: 'Roboto', sans-serif"
                                textAlign="Start"

                            ></SmallDescriptionWithHeading>
                        </div>

                        <div>
                            <img className=" mb-2 " style={{ width: " 2.361111111111111vw", height: " 2.361111111111111vw"}} src="../../../public/assets/Images/Rectangle (6).png" alt="" />

                            <SmallDescriptionWithHeading
                                heading="Innovative Solutions"
                                article="We constantly push the boundaries to provide cutting-edge packing solutions for your needs."
                                fontSizeOfHeading="1.9444444444444444vw"
                                fontSizeOfArticle="1.15vw"
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