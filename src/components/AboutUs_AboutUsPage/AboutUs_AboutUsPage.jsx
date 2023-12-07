import { Container } from "react-bootstrap";
import './AboutUs_AboutUsPage.css'
import { AiFillCheckCircle } from "react-icons/ai";
import { Fade, Slide } from "react-awesome-reveal";


const AboutUs_AboutUsPage = ({ heading }) => {

    return (
        <Container fluid className=" position-relative ">
            {/* background-right-side image */}
            <img className="bgRightSideImgAboutPage" src="/assets/Images/Subtract (2).png" alt="" />
            <Fade cascade>
                <Container style={{ backgroundColor: "#54A7C40A" }} className="p-3 p-md-5 p-lg-5 p-xl-5 p-xxl-5 rounded-4 mb-5">
                    <h1 className=" fw-bold display-6">
                        {heading}
                    </h1>

                    <article>
                        HYGWell is a fast growing organization and our aim is to offer top-notch healthcare solutions aimed at empowering healthier and happier lives.
                    </article>


                    <ul className=" mt-4">
                        <Fade cascade >
                            <li className=" d-flex  justify-content-start  align-items-start mb-2">
                                <AiFillCheckCircle  className=" text-success me-3 tick" />
                                <p className=" my-auto " >
                                    Every product we produce or sell meets the highest industry standards and is designed with the utmost care to ensure its effectiveness.
                                </p>
                            </li>

                            <li className=" d-flex  justify-content-start  align-items-start mb-2 ">
                                <AiFillCheckCircle  className=" text-success me-3 tick-middle" />
                                <p className=" my-auto ">
                                    Our services go beyond just pharmaceuticals, offering an array of products and services including neutraceuticals, cosmetics, hotel amenities, packaging solutions and more.
                                </p>
                            </li>

                            <li className=" d-flex  justify-content-start  align-items-start ">
                                <AiFillCheckCircle  className=" text-success me-3 tick" />
                                <p className=" my-auto ">
                                    We strongly believe in fostering innovation and excellence in everything we do, setting new standards in the pharmaceutical world.
                                </p>
                            </li>
                        </Fade>
                    </ul>

                    <article>
                        We invite you to explore our extensive range of products and services, and take a step towards a better, healthier, happier life.
                    </article>
                </Container>
            </Fade>
        </Container>
    );
};

export default AboutUs_AboutUsPage;