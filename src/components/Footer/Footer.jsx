import { Col, Container, Row } from "react-bootstrap";
import './Footer.css'

const Footer = () => {
    return (
        <Container className="footer" fluid>
            <Row>
                <Col md={4}  className=" position-relative ">

                    <img className="logo" src="../../../public/assets/Images/logo.png" alt="" />
                    <article style={{ width: "19.791666666666668vw", marginTop: "1.8055555555555556vw", marginBottom: "0.8333333333333334vw" }}>
                        HYGWELL - Your premier source for top-notch healthcare solutions, designed to enhance health and well-being worldwide.
                    </article>

                    <p>© HYGWELL - 2023. All Rights Reserved.</p>

                    {/* Background */}
                    <img className="bg2Footer" src="../../../public/assets/Images/Rectangle (1).png" alt="" />
                    <img className="bg1Footer" src="../../../public/assets/Images/Rectangle (2).png" alt="" />
                    
                </Col>



                <Col md={4}>
                    <h1 className=" quick_links">Quick Links</h1>

                    <ul className=" mb-5">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">EXPORTS</a></li>
                        <li><a href="#">SERVICES</a></li>
                    </ul>


                    <ul>
                        <li><a href="#">SHOP</a></li>
                        <li><a href="#">ABOUT US</a></li>
                        <li><a href="#">OUR TEAM</a></li>
                        <li><a href="#">CONTACT US</a></li>
                    </ul>
                </Col>




                <Col md={4}>
                    <ul className=" social_link d-flex  justify-content-center  align-items-center ">
                        <li className=" me-3 "><a href="#"><img src="../../../public/assets/Images/Group 9.png" alt="" /></a></li>
                        <li className=" me-3 "><a href="#"><img src="../../../public/assets/Images/Group 9 Copy.png" alt="" /></a></li>
                        <li className=" me-3 "><a href="#"><img src="../../../public/assets/Images/Group 9 Copy 2.png" alt="" /></a></li>
                        <li><a href="#"><img src="../../../public/assets/Images/Group 9 Copy 3.png" alt="" /></a></li>
                    </ul>
                </Col>

            </Row>
        </Container>
    );
};

export default Footer;