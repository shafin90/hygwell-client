import { Col, Container, Row } from "react-bootstrap";
import './Footer.css'
import { useEffect, useState } from "react";

const Footer = () => {
    const [screenWidth, setScreenWidth] = useState()
    useEffect(()=>{
        setScreenWidth(window.innerWidth)
    },[])
    return (
        <Container className="footer" fluid>
            <Row>
                <Col lg={4} md={4}  className=" position-relative ">

                    <img className="logo" src="/assets/Images/HYGWELL-_-Logo-_-Final-1 1.png" alt="" />
                    <article style={{ width:`${screenWidth<575?"90.791666668vw":"19.791666666666668vw"}` , marginTop: "1.8055555555555556vw", marginBottom: "0.8333333333333334vw" }}>
                        HYGWELL - Your premier source for top-notch healthcare solutions, designed to enhance health and well-being worldwide.
                    </article>

                    <p>© HYGWELL - 2023. All Rights Reserved.</p>

                    {/* Background */}
                    <img className="bg2Footer" src="/assets/Images/Rectangle (5).png" alt="" />
                    <img className="bg1Footer" src="/assets/Images/Rectangle (6).png" alt="" />
                    
                </Col>



                <Col lg={4} md={6} className="px-3 px-md-0 px-lg-0">
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




                <Col lg={4} md={2} className=" px-0 " >
                    <ul className=" social_link d-flex  justify-content-center  align-items-center ">
                        <li className=" me-3 "><a href="#"><img src="/assets/Images/Group 9.png" alt="" /></a></li>
                        <li className=" me-3 "><a href="#"><img src="/assets/Images/Group 9 Copy.png" alt="" /></a></li>
                        <li className=" me-3 "><a href="#"><img src="/assets/Images/Group 9 Copy 2.png" alt="" /></a></li>
                        <li><a href="#"><img src="/assets/Images/Group 9 Copy 3.png" alt="" /></a></li>
                    </ul>
                </Col>

            </Row>
        </Container>
    );
};

export default Footer;