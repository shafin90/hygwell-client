import { Col, Container, Row } from "react-bootstrap";
import './ContactInformation_ContactUsPage.css'
import { useEffect, useState } from "react";
import { BsDiscord, BsInstagram, BsTwitter } from 'react-icons/bs'

const ContactInformation_ContactUsPage = () => {
    const [screenWidth, setScreenWidth] = useState()
    const [isHoverTwitterIcon, setIsHoverTwitterIcon] = useState(false);
    const [isHoverInstaIcon, setIsHoverInstaIcon] = useState(false);
    const [isHoverDiscordIcon, setIsHoverDiscordIcon] = useState(false);

    
    useEffect(()=>{
        setScreenWidth(window.innerWidth)
    },[])
    return (
        <Container className="contactInformation_ContactUsPage d-flex justify-content-center align-items-center  px-0  py-5  ">
            <Row className=" w-100 " >
                {/* Contact information========== */}
                <Col md={6} className=" h-100  px-0">
                    <div className="contactInformationContainer pt-md-5 pt-lg-5  pt-3 ps-3 ps-md-5 ps-lg-5  " >
                        <h1 className=" mb-3 ">Contact Information</h1>
                        <p className=" text-white ">Say something to start a live chat!</p>

                        <p style={{ top: "5vw" }} className="phone_number text-white mb-4  position-relative ">
                            <img className=" me-4 " style={{ width: `${screenWidth < 575 ? "8.66666667vw" : "1.6666666666666667vw"}`, height: `${screenWidth < 575 ? "8.66666666667vw" : "1.6666666666666667vw"}` }} src="/assets/Images/bxs_phone-call.png" alt="" />
                            <span>
                                +91 <span className=" text-decoration-underline ">9010345117</span>
                            </span>
                        </p>

                        <p style={{ top: "5vw" }} className="phone_number mb-4 text-white position-relative   ">
                            <img className=" me-4 " style={{ width: `${screenWidth < 575 ? "8.66666667vw" : "1.6666666666666667vw"}`, height: `${screenWidth < 575 ? "8.66666666667vw" : "1.6666666666666667vw"}` }} src="/assets/Images/ic_sharp-email.png" alt="" />
                            <span>
                                hello<span className=" text-decoration-underline ">@hygwell.com</span>
                            </span>
                        </p>

                        <p style={{ top: "5vw" }} className="phone_number text-white d-flex justify-content-start  align-items-center  position-relative  ">
                            <img className=" me-4 " style={{ width: `${screenWidth < 575 ? "8.66666667vw" : "1.6666666666666667vw"}`, height: `${screenWidth < 575 ? "8.66666666667vw" : "1.6666666666666667vw"}` }} src="/assets/Images/carbon_location-filled.png" alt="" />
                            <span className="  w-50 ">
                                D.NO.24-6-707/1 military colony, opp: Lic office, kondayapaleam gate, Nellore 524003
                            </span>
                        </p>



                        {/* Social link ==============================*/}
                        <div className="social_icon_contact_information_container">
                            <div
                                onMouseEnter={() => setIsHoverTwitterIcon(true)}
                                onMouseLeave={() => setIsHoverTwitterIcon(false)}
                                className={isHoverTwitterIcon && "bg-white"}
                            >
                                <BsTwitter 
                                
                                style={{color:isHoverTwitterIcon?"#545E3B":"white"}}
                                ></BsTwitter>
                            </div>

                            <div
                                onMouseEnter={() => setIsHoverInstaIcon(true)}
                                onMouseLeave={() => setIsHoverInstaIcon(false)}
                                className={isHoverInstaIcon && "bg-white"}
                            >
                                <BsInstagram 
                                
                                style={{color:isHoverInstaIcon?"#545E3B":"white"}}
                                ></BsInstagram>
                            </div>

                            <div
                                onMouseEnter={() => setIsHoverDiscordIcon(true)}
                                onMouseLeave={() => setIsHoverDiscordIcon(false)}
                                className={isHoverDiscordIcon && "bg-white"}
                            >
                                <BsDiscord 
                                
                                style={{color:isHoverDiscordIcon?"#545E3B":"white"}}
                                ></BsDiscord>
                            </div>

                        </div>
{/* 
                        <img className="floatingImageOne_ContactUsPage" src="/assets/Images/Ellipse 793.png" alt="" />
                        <img className="floatingImageTwo_ContactUsPage" src="/assets/Images/Ellipse 794.png" alt="" /> */}

                    </div>
                </Col>

                {/* Google map image */}
                <Col md={6} className=" px-0 ">
                    <img className="googleMapImage img-fluid " src="/assets/Images/Component 6.png" alt="" />
                </Col>

            </Row>
        </Container>
    );
};

export default ContactInformation_ContactUsPage;