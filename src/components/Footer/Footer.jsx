import { Col, Container, Row } from "react-bootstrap";
import './Footer.css'
import { useEffect, useState } from "react";
import { AttentionSeeker, Slide } from "react-awesome-reveal";

const Footer = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    // Use the useEffect hook to update the screenWidth state whenever the window size changes
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <Container className="footer" fluid>
            <Row>
                <Col lg={4} md={4} className=" position-relative ">

                    <img className="logo" src="/assets/Images/HYGWELL-_-Logo-_-Final-1 1.png" alt="" />
                    <article style={{ width: `${screenWidth < 575 ? "90.791666668vw" : "19.791666666666668vw"}`, marginTop: "1.8055555555555556vw", marginBottom: "0.8333333333333334vw" }}>
                        HYGWELL - Your premier source for top-notch healthcare solutions, designed to enhance health and well-being worldwide.
                    </article>

                    <p>© HYGWELL - 2023. All Rights Reserved.</p>

                    {/* Background */}
                    <img className="bg2Footer" src="/assets/Images/Rectangle (5).png" alt="" />
                    <img className="bg1Footer" src="/assets/Images/Rectangle (6).png" alt="" />

                </Col>



                <Col lg={4} md={6} className="px-3 px-md-0 px-lg-0">
                    <h1 className=" quick_links">Quick Links</h1>

                    <Row className="mb-2 mb-md-5 mb-lg-5 mb-xl-5 mb-xxl-5 ">
                        <Col md={2}><a className="text-decoration-none fw-semibold" href="#">HOME</a></Col>
                        <Col md={3}><a className="text-decoration-none fw-semibold" href="#">SERVICES</a></Col>
                        <Col md={3}><a className="text-decoration-none fw-semibold" href="#">EXPORTS</a></Col>
                        <Col md={4}><a className="text-decoration-none fw-semibold" href="#">SERVICES</a></Col>
                    </Row>


                    <Row>
                        <Col md={2}><a className="text-decoration-none fw-semibold" href="#">SHOP</a></Col>
                        <Col md={3}><a className="text-decoration-none fw-semibold" href="#">ABOUT US</a></Col>
                        <Col md={3}><a className="text-decoration-none fw-semibold" href="#">OUR TEAM</a></Col>
                        <Col md={4}><a className="text-decoration-none fw-semibold" href="#">CONTACT US</a></Col>
                    </Row>
                </Col>




                <Col lg={4} md={2} className=" px-0 " >
                    <ul className=" social_link d-flex  justify-content-center  align-items-center ">
                        <AttentionSeeker effect="rubberBand" cascade>
                            <li className=" me-3 "><a href="#"><img src="/assets/Images/Group 9.png" alt="" /></a></li>
                            <li className=" me-3 "><a href="#"><img src="/assets/Images/Group 9 Copy.png" alt="" /></a></li>
                            <li className=" me-3 "><a href="#"><img src="/assets/Images/Group 9 Copy 2.png" alt="" /></a></li>
                            <li><a href="#"><img src="/assets/Images/Group 9 Copy 3.png" alt="" /></a></li>
                        </AttentionSeeker>
                    </ul>
                </Col>

            </Row>
        </Container>
    );
};

export default Footer;