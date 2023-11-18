import { Col, Container, Row } from "react-bootstrap";
import TechniqalHealthCareCard_HomePage from "../TechniqalHealthCareCard_HomePage/TechniqalHealthCareCard_HomePage";

const TechniqalHealthCareSection_HomPage = () => {  
    return (
        <Container fluid className="px-0  overflow-x-hidden position-relative w-100  mb-5 pb-5 ">
            <img src="/assets/Images/Group 1171282611.png" className=" position-absolute w-100 z-0 " alt="" />
            <h1 className=' text-center z-1 position-relative h1 display-5 fw-bold pt-5'>
                Taking Healthcare Global-Minded
            </h1>
            <p className=' text-center z-1 position-relative fs-5 mb-5  '>
                Discover the core aspects that drive our organization, and make us a leading choice for pharmaceutical exports.
            </p>

            <Container className="d-flex justify-content-between align-items-center w-75 px-0" >
                <Row>
                    <Col md={4}>
                        <TechniqalHealthCareCard_HomePage
                            cardImg="/assets/Images/Group 1171282609 (3).png"
                            heading="Global Reach"
                            article="We help make healthcare accessible worldwide. With us, geographical boundaries do not hinder the supply of quality medication."

                        ></TechniqalHealthCareCard_HomePage>
                    </Col>

                    <Col md={4}>
                        <TechniqalHealthCareCard_HomePage
                            cardImg="/assets/Images/Group 1171282609 (4).png"
                            heading="Competitive Pricing"
                            article="We deliver top-quality products at competitive prices, making healthcare not only accessible but also affordable across the globe."
                            
                        ></TechniqalHealthCareCard_HomePage>
                    </Col>

                    <Col md={4}>
                        <TechniqalHealthCareCard_HomePage
                            cardImg="/assets/Images/Group 1171282609 (5).png"
                            heading="Quality Assurance"
                            article="Our products undergo strict quality checks to ensure utmost safety and efficacy, living up to the reputation we have built over the years."
                        ></TechniqalHealthCareCard_HomePage>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default TechniqalHealthCareSection_HomPage;