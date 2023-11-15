import { Container } from "react-bootstrap";
import './AboutUs_AboutUsPage.css'
import { useState } from "react";

const AboutUs_AboutUsPage = ({heading}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    return (
        <Container fluid className=" position-relative ">
            {/* background-right-side image */}
            <img className="bgRightSideImgAboutPage" src="/assets/Images/Subtract (3).png" alt="" />
            <Container fluid className="aboutUs_AboutUsPage">
                <h1>
                    {heading}
                </h1>

                <article>
                    HYGWell is a fast growing organization and our aim is to offer top-notch healthcare solutions aimed at empowering healthier and happier lives.
                </article>


                <ul className=" mt-4">
                    <li className=" d-flex  justify-content-center  align-items-start ">
                        <img style={{ width: `${screenWidth < 575 ? "4.2222222vw" : "2.2222222222222223vw"}`, height: `${screenWidth < 575 ? "4.2222222vw" : "2.2222222222222223vw"}` }} src="assets/Images/Subtract (2).png" alt="" />
                        <p >
                            Every product we produce or sell meets the highest industry standards and is designed with the utmost care to ensure its effectiveness.
                        </p>
                    </li>

                    <li className=" d-flex  justify-content-center  align-items-start ">
                        <img style={{ width: `${screenWidth < 575 ? "4.2222222vw" : "2.2222222222222223vw"}`, height: `${screenWidth < 575 ? "4.2222222vw" : "2.2222222222222223vw"}` }} src="assets/Images/Subtract (2).png" alt="" />
                        <p>
                            Our services go beyond just pharmaceuticals, offering an array of products and services including neutraceuticals, cosmetics, hotel amenities, packaging solutions and more.
                        </p>
                    </li>

                    <li className=" d-flex  justify-content-center  align-items-start ">
                        <img style={{ width: `${screenWidth < 575 ? "4.2222222vw" : "2.2222222222222223vw"}`, height: `${screenWidth < 575 ? "4.2222222vw" : "2.2222222222222223vw"}` }} src="assets/Images/Subtract (2).png" alt="" />
                        <p>
                            We strongly believe in fostering innovation and excellence in everything we do, setting new standards in the pharmaceutical world.
                        </p>
                    </li>

                </ul>

                <article>
                    We invite you to explore our extensive range of products and services, and take a step towards a better, healthier, happier life.
                </article>
            </Container>
        </Container>
    );
};

export default AboutUs_AboutUsPage;