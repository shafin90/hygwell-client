//  Component ecplainations: This component contains our all offers. It takes place after "About us" section of home page.

/*
CSS class explaination: 
1. offerings_homepage: This class is the whole component. 
2. heading-offer-homepage: At the top-left position of this component, there is a heading. This class take place in it.
3. btn-explore: At the top right of this component, there is a button "Explore". This class take place in it. 
*/

import { useEffect, useState } from 'react';
import OfferCard_HomePage from '../OfferCard_HomePage/OfferCard_HomePage';
import './OurOfferings_HomePage.css'
import { Col, Container, Row } from 'react-bootstrap';
import { IoArrowForwardSharp, IoArrowBackOutline } from "react-icons/io5";
import { AttentionSeeker, Bounce, Fade, Slide } from 'react-awesome-reveal';

const OurOfferings_HomePage = () => {

    return (
        <Container style={{ backgroundColor: "#f3f3eb" }} fluid className="position-relative  py-5 px-0 mb-5  z-0 ">
            <Container className="mb-5  d-flex flex-column  flex-md-row flex-lg-row  justify-content-between  align-items-start  px-md-0 px-lg-0 px-xl-0 px-xxl-0  ">
                <h1 className="h1 fw-bold  display-5 mb-3 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0">

                    <Slide duration={500}>
                        Our Offerings
                    </Slide>
                </h1>
                <AttentionSeeker effect='rubberBand' >
                    <button className="btn btn-outline-success  fw-bold  px-5  py-3  rounded-3 ">
                        Explore
                    </button>
                </AttentionSeeker>
            </Container>


            <Container className='px-0 position-relative d-flex justify-content-start  align-items-center mb-5'>
                {/* <Fade duration={2000}> */}
                    <Row>
                        <Col md={4} className=' mb-5 mb-md-0 mb-lg-0  mb-xl-0  mb-xxl-0  px-4 px-md-2  px-lg-2 px-xl-2  px-xxl-1 '>
                            <OfferCard_HomePage
                                leftImg="/assets/Images/Group 1171282609.png"
                                rightImg="/assets/Images/Mask group.png"
                                heading="Hotel and Hospitality"
                                offer1="Shower Gels (Body and Hair)"
                                offer2="Hand Wash"
                                offer3="Lotions"
                                offer4="Hair Conditioner"
                            ></OfferCard_HomePage>
                        </Col>

                        <Col md={4} className=' mb-5 mb-md-0 mb-lg-0  mb-xl-0  mb-xxl-0  px-4 px-md-2  px-lg-2 px-xl-2  px-xxl-1 '>
                            <OfferCard_HomePage
                                leftImg="/assets/Images/Group 1171282609 (1).png"
                                rightImg="/assets/Images/Mask group (1).png"
                                heading="Private Labelling"
                                offer1="Custom Labeling"
                                offer2="Innovative Packaging"
                                offer3="Various Product Formats"
                                offer4=""
                            ></OfferCard_HomePage>
                        </Col>

                        <Col md={4} className=' mb-5 mb-md-0 mb-lg-0  mb-xl-0  mb-xxl-0  px-4 px-md-2  px-lg-2 px-xl-2  px-xxl-1 '>
                            <OfferCard_HomePage
                                leftImg="/assets/Images/Group 1171282609 (2).png"
                                rightImg="/assets/Images/Mask group (1).png"
                                heading="Turnkey Consultants"
                                offer1="Turnkey Consultation"
                                offer2="Project Execution"
                                offer3="Enterprise for Pharma, Herbal, etc."
                                offer4=""
                            ></OfferCard_HomePage>
                        </Col>
                    </Row>
                {/* </Fade> */}
            </Container>

            {/* left band and right band = those are floating object  */}
            <img className=' leftBand z-2 ' src="/assets/Images/Left Band 1.png" alt="" />
            <img className=' rightBand z-2 ' src="/assets/Images/Right Band 2.png" alt="" />

        </Container>
    );
};

export default OurOfferings_HomePage;