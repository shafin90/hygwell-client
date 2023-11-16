import { Container } from "react-bootstrap";
import "./TechniqalHealthCareSection_HomPage.css"
import TechniqalHealthCareCard_HomePage from "../TechniqalHealthCareCard_HomePage/TechniqalHealthCareCard_HomePage";
import { useState } from "react";

const TechniqalHealthCareSection_HomPage = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    return (
        <Container fluid className="techniqalHealthCareSection_HomPage px-0  overflow-x-hidden ">
            <img src="/assets/Images/Group 1171282611.png" alt="" />
            <h1 className=' text-center z-1  position-relative takingHealthCareHeading '>
                Taking Healthcare Global-Minded
            </h1>
            <p className=' text-center z-1 position-relative takingHealthCarepara mb-5  '>
                Discover the core aspects that drive our organization, and make us a leading choice for pharmaceutical exports.
            </p>

            <Container fluid 
            className="d-flex flex-column  flex-md-row flex-lg-row justify-content-between  align-items-center w-75  px-0 " 
            style={{ marginTop: `${screenWidth<576?"18vw":"9.208333333333333vw"}` }}>
                <TechniqalHealthCareCard_HomePage
                    cardImg="/assets/Images/Group 1171282609 (3).png"
                    heading="Global Reach"
                    article="We help make healthcare accessible worldwide. With us, geographical boundaries do not hinder the supply of quality medication."
                ></TechniqalHealthCareCard_HomePage>

                <TechniqalHealthCareCard_HomePage
                    cardImg="/assets/Images/Group 1171282609 (4).png"
                    heading="Competitive Pricing"
                    article="We deliver top-quality products at competitive prices, making healthcare not only accessible but also affordable across the globe."
                ></TechniqalHealthCareCard_HomePage>

                <TechniqalHealthCareCard_HomePage
                    cardImg="/assets/Images/Group 1171282609 (5).png"
                    heading="Quality Assurance"
                    article="Our products undergo strict quality checks to ensure utmost safety and efficacy, living up to the reputation we have built over the years."
                ></TechniqalHealthCareCard_HomePage>
            </Container>
        </Container>
    );
};

export default TechniqalHealthCareSection_HomPage;