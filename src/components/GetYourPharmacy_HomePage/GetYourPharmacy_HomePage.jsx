import { Col, Container, Row } from "react-bootstrap";
import './GetYourPharmacy_HomePage.css'
import { useState } from "react";

const GetYourPharmacy_HomePage = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    
    return (
        <Container fluid className="getYourPharmacy">
            <Row>
                <Col sm={12} md={7} order={2} >
                    <h1>
                        Get your pharmacy
                        very easily
                    </h1>
                    <img className="deviderImg" style={{ width:`${screenWidth<575?"100px":"139px"}`, height:`${screenWidth<575?"2px":"6px"}` }} src="/assets/Images/Rectangle 42567.png" alt="" />

                    <article>
                        You can download app  in Playstore or Appstore. After
                        that you can create an account in the application
                    </article>

                    <div>
                        <img className="downloadApp" src="/assets/Images/App Store.png" alt="" />
                        <img className="downloadApp ms-3 " src="/assets/Images/Google Play.png" alt="" />
                        <img className="indicatorOfApp" src="/assets/Images/idicator.png" alt="" />
                    </div>
                </Col>
                <Col sm={12} md={5} order={1}>
                    <img className=" phoneImg " src="/assets/Images/phone.png" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default GetYourPharmacy_HomePage;