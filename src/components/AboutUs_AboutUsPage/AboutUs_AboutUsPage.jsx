import { Container } from "react-bootstrap";
import './AboutUs_AboutUsPage.css'
import { BsCheckCircleFill } from "react-icons/bs";


const AboutUs_AboutUsPage = ({ heading }) => {

    return (
        <Container fluid className=" position-relative ">
            {/* background-right-side image */}
            <img className="bgRightSideImgAboutPage" src="/assets/Images/Subtract (2).png" alt="" />
            <Container style={{ backgroundColor: "#54A7C40A" }} className="p-5  rounded-4 mb-5">
                <h1 className=" fw-bold display-5">
                    {heading}
                </h1>

                <article>
                    HYGWell is a fast growing organization and our aim is to offer top-notch healthcare solutions aimed at empowering healthier and happier lives.
                </article>


                <ul className=" mt-4">
                    <li className=" d-flex  justify-content-start  align-items-start mb-2">
                        <BsCheckCircleFill className=" text-success me-3 fs-5" />
                        <p className=" my-auto " >
                            Every product we produce or sell meets the highest industry standards and is designed with the utmost care to ensure its effectiveness.
                        </p>
                    </li>

                    <li className=" d-flex  justify-content-start  align-items-start mb-2 ">
                        <BsCheckCircleFill className=" text-success me-3 fs-4 " />
                        <p className=" my-auto ">
                            Our services go beyond just pharmaceuticals, offering an array of products and services including neutraceuticals, cosmetics, hotel amenities, packaging solutions and more.
                        </p>
                    </li>

                    <li className=" d-flex  justify-content-start  align-items-start ">
                        <BsCheckCircleFill className=" text-success me-3 fs-5" />
                        <p className=" my-auto ">
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