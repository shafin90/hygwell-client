import { Col, Container, Row } from "react-bootstrap";
import './GetYourPharmacy_HomePage.css'
import { useState } from "react";

const GetYourPharmacy_HomePage = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    
    return (
        <Container fluid className="getYourPharmacy">
            <Row>
                <Col md={7}>
                    <h1>
                        Get your pharmacy
                        very easily
                    </h1>
                    <img style={{ width:`${screenWidth<575?"100px":"139px"}`, height:`${screenWidth<575?"2px":"6px"}` }} src="../../../public/assets/Images/Rectangle 42567.png" alt="" />

                    <article>
                        You can download app  in Playstore or Appstore. After
                        that you can create an account in the application
                    </article>

                    <div>
                        <img className="downloadApp" src="../../../public/assets/Images/App Store.png" alt="" />
                        <img className="downloadApp ms-3 " src="../../../public/assets/Images/Group.png" alt="" />
                        <img className="indicatorOfApp" src="../../../public/assets/Images/idicator.png" alt="" />
                    </div>
                </Col>
                <Col md={5}>
                    <img className=" phoneImg " src="../../../public/assets/Images/phone (1).png" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default GetYourPharmacy_HomePage;