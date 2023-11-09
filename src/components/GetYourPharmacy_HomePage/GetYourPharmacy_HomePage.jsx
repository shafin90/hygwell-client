import { Col, Container, Row } from "react-bootstrap";
import './GetYourPharmacy_HomePage.css'

const GetYourPharmacy_HomePage = () => {
    return (
        <Container fluid className="getYourPharmacy">
            <Row>
                <Col md={7}>
                    <h1>
                        Get your pharmacy
                        very easily
                    </h1>
                    <img style={{ width: "139px", height: "6px" }} src="../../../public/assets/Images/Rectangle 42567.png" alt="" />

                    <article>
                        You can download app  in Playstore or Appstore. After
                        that you can create an account in the application
                    </article>

                    <div>
                        <img className="downloadApp" src="../../../public/assets/Images/App Store.png" alt="" />
                        <img className="downloadApp ms-3 " src="../../../public/assets/Images/Group.png" alt="" />
                    </div>
                </Col>
                <Col md={5}>
                    {/* <img className=" img-fluid " src="../../../public/assets/Images/phone.png" alt="" /> */}
                </Col>
            </Row>
        </Container>
    );
};

export default GetYourPharmacy_HomePage;