// Component explaination: This component is about section in homepage


import { Col, Container, Row } from "react-bootstrap";
import SmallDescriptionWithHeading from "../SmallDescriptionWithHeading/SmallDescriptionWithHeading";
import './AboutUs_HomePage.css'
import CounterInAboutUsHomePage from "../CounterInAboutUsHomePage/CounterInAboutUsHomePage";



const AboutUs_HomePage = () => {
    
    return (
        <Container fluid>
            <Row >
                <Col className=" position-relative  d-sm-flex justify-content-sm-center  align-items-sm-center " md={6}>
                    <h1 className=" aboutUs">About <br></br> Us</h1>
                    <img className="aboutUsImage_Homepage_image" src="/public/assets/Images/Artwork.png" alt="" />
                </Col>
                <Col md={5} className=" d-flex flex-column  justify-content-center  align-items-center ">
                    <SmallDescriptionWithHeading

                        heading="We Have You Covered!"
                        article="At HygWell , we are dedicated to delivering top-quality pharmaceutical and healthcare solutions. Explore our wide range of products and services designed to enhance health and well-being."
                        width="100%"
                        textAlign="start"
                        fontSizeOfHeading= "1.9444444444444444vw"
                        fontSizeOfArticle="1.15vw"
                        fontWeight="500"
                        fontFamily="'Roboto', sans-serif"

                    ></SmallDescriptionWithHeading>

                    <div  className="counterInAbout_HomePage_Container d-flex justify-content-around   align-content-center w-100  ">
                        <CounterInAboutUsHomePage
                            num="+20"
                            category="Employee"
                        ></CounterInAboutUsHomePage>

                        <CounterInAboutUsHomePage
                            num="+25"
                            category="Products"
                        ></CounterInAboutUsHomePage>

                        <CounterInAboutUsHomePage
                            num="+90"
                            category="Clients"
                        ></CounterInAboutUsHomePage>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs_HomePage;