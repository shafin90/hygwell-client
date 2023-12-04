import { Col, Container, Row } from "react-bootstrap";
import './ContactInformation_ContactUsPage.css'
import { useEffect, useState } from "react";
import { BsDiscord, BsInstagram, BsTwitter } from 'react-icons/bs'
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MdWifiCalling3 } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactInformation_ContactUsPage = () => {
    const [isHoverTwitterIcon, setIsHoverTwitterIcon] = useState(false);
    const [isHoverInstaIcon, setIsHoverInstaIcon] = useState(false);
    const [isHoverDiscordIcon, setIsHoverDiscordIcon] = useState(false);

    const googleMapsApiKey = 'AIzaSyDQgjgALjworEY8dTP_PccsMbER0_gZt-k';
    const mapCenter = { lat: 14.444273, lng: 79.975716 };

    return (
        <Container className="contactInformation_ContactUsPage d-flex justify-content-center align-items-center  px-0  py-5  ">
            <Row className=" w-100 " >
                {/* Contact information========== */}
                <Col md={6} className=" h-100  px-0">
                    <div className="contactInformationContainer d-flex flex-column justify-content-between align-items-start ps-5 py-5" >

                        {/* Heading====== */}
                        <div className="mb-5 pb-5 ">
                            <h1 className="mb-3 h2 text-white">Contact Information</h1>
                            <p className="text-white">Say something to start a live chat!</p>
                        </div>


                        {/* Contact Information====== */}
                        <div className="mb-5 pb-5 ">
                            <p className="phone_number text-white mb-4  position-relative ">
                                <MdWifiCalling3 className=" fs-5  me-4" />
                                <span>
                                    +91 <span className=" text-decoration-underline ">9010345117</span>
                                </span>
                            </p>

                            <p className="phone_number mb-4 text-white position-relative   ">
                                <IoMdMail className="fs-5 me-4" />
                                <span>
                                    hello<span className=" text-decoration-underline ">@hygwell.com</span>
                                </span>
                            </p>

                            <p className="phone_number text-white d-flex justify-content-start  align-items-center  position-relative  ">
                                <FaMapMarkerAlt className=" me-4  fs-4 " />
                                <span className="  w-50 ">
                                    D.NO.24-6-707/1 military colony, opp: Lic office, kondayapaleam gate, Nellore 524003
                                </span>
                            </p>
                        </div>



                        {/* Social media link ==============================*/}
                        <div className=" w-100 d-flex justify-content-start align-items-center ">
                            <div
                                style={{ borderRadius: "50%", width:"30px", height:"30px"}}
                                onMouseEnter={() => setIsHoverTwitterIcon(true)}
                                onMouseLeave={() => setIsHoverTwitterIcon(false)}
                                className={isHoverTwitterIcon ? "bg-white me-3 d-flex justify-content-center align-items-center " : "me-3 bg-warning d-flex justify-content-center align-items-center "}
                            >
                                <BsTwitter
                                    style={{ color: isHoverTwitterIcon ? "#545E3B" : "white" }}
                                ></BsTwitter>
                            </div>

                            <div
                                style={{ borderRadius: "50%",  width:"30px", height:"30px" }}
                                onMouseEnter={() => setIsHoverInstaIcon(true)}
                                onMouseLeave={() => setIsHoverInstaIcon(false)}
                                className={isHoverInstaIcon ? "bg-white me-3 d-flex justify-content-center align-items-center" : "me-3 d-flex justify-content-center align-items-center bg-warning"}
                            >
                                <BsInstagram
                                    style={{ color: isHoverInstaIcon ? "#545E3B" : "white" }}
                                ></BsInstagram>
                            </div>

                            <div
                                style={{ borderRadius: "50%",  width:"30px", height:"30px" }}
                                onMouseEnter={() => setIsHoverDiscordIcon(true)}
                                onMouseLeave={() => setIsHoverDiscordIcon(false)}
                                className={isHoverDiscordIcon?"bg-white me-3 d-flex justify-content-center align-items-center":"me-3 d-flex justify-content-center align-items-center bg-warning"}
                            >
                                <BsDiscord

                                    style={{ color: isHoverDiscordIcon ? "#545E3B" : "white" }}
                                ></BsDiscord>
                            </div>

                        </div>
                    </div>
                </Col>

                {/* Google map widgets */}
                <Col md={6} className="px-0 googleMapWidgets">
                    <LoadScript googleMapsApiKey={googleMapsApiKey}>
                        <GoogleMap
                            mapContainerStyle={{ width: "100%", height: "100%" }}
                            center={mapCenter}
                            zoom={15} // Adjust the zoom level as needed
                        >
                            {/* Add markers or other map components if needed */}
                        </GoogleMap>
                    </LoadScript>
                </Col>

            </Row>
        </Container>
    );
};

export default ContactInformation_ContactUsPage;