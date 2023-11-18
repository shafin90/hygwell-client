import { Col, Container, Row } from "react-bootstrap";
import './GetYourPharmacy_HomePage.css'
import { useState } from "react";
import { Zoom, Fade, Slide, AttentionSeeker } from "react-awesome-reveal";

const GetYourPharmacy_HomePage = () => {


    return (
        <Container style={{ backgroundColor: "#1755a7" }} className=" position-relative  my-5 py-5 pe-2 pe-md-5 pe-lg-5 pe-xl-5 pe-xxl-5 rounded-5 z-0 " >
            <Row>
                <Col sm={12} md={8} order={1} className="ps-2 p-md-5 p-lg-5 p-xl-5 p-xxl-5">
                    <Fade cascade>
                        <h1 className=" h1 text-white fw-bold  display-3 mb-3 z-2 position-relative  ">

                            Get your pharmacy
                            very easily

                        </h1>
                     
                        <article className=" fs-5 text-white mb-4 mb-md-0  mb-lg-0 z-2 position-relative ">
                            You can download app  in Playstore or Appstore. After
                            that you can create an account in the application
                        </article>
                    </Fade>

                    <AttentionSeeker effect="pulse">
                        <div className=" d-flex flex-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row  justify-content-start  align-items-center" >
                            <img style={{ cursor: "pointer" }} className=" z-2 mb-3 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0" src="/assets/Images/App Store.png" alt="" />
                            <img style={{ cursor: "pointer" }} className="mx-3 z-2 " src="/assets/Images/Google Play.png" alt="" />
                            <img className=" d-none d-md-inline-block  d-lg-inline-block z-2 " src="/assets/Images/idicator.png" alt="" />
                        </div>
                    </AttentionSeeker>

                </Col>
                <Col sm={12} md={4} order={2} className="p-5 p-md-3  p-lg-3 ">
                    <Zoom>
                        <img className="img-fluid z-2" src="/assets/Images/phone.png" alt="" />
                    </Zoom>
                </Col>
            </Row>

            <img src="/assets/Images/Mask group (3).png" className="position-absolute w-100 h-100   z-1 bottom-0  " alt="" />
        </Container>
    );
};

export default GetYourPharmacy_HomePage;