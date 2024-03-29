import { Col, Container, Row } from "react-bootstrap";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";
import MeetOurTeamCard from "../../components/MeetOurTeamCard/MeetOurTeamCard";
import './OurTeam.css'
import Footer from "../../components/Footer/Footer";

const OurTeam = () => {
    return (
        <Container fluid className=" px-0 ">

            {/* background image */}
            {/* <img src="/assets/Images/Mask group (3).png" style={{width:"100vw", height:"320vh", position:"absolute", zIndex:"-2"}} alt="" /> */}
            {/* left bg image */}
            <img className=" leftBgImg_ourTeam" src="/assets/Images/Subtract (1).png" alt="" />

            {/* right bg image */}
            <img className=" rightBgImg_ourTeam" src="/assets/Images/Subtract (2).png" alt="" />
            <CustomNavbar></CustomNavbar>
            <h1 className=" text-center  fw-bold  mt-4  mb-5  display-4">Meet Our Team</h1>

            <Container fluid className=" pt-4 ">
                <Row className=" d-flex  justify-content-center  align-items-center  mb-4">
                    <Col md={5} className=" d-flex  justify-content-center  align-content-center ">
                        <MeetOurTeamCard
                            img="/assets/Images/Ellipse 15.jpg"
                            name="Nasina Lavanya"
                            designation="Chairman"
                            details="Empowering entrepreneurs to revolutionize healthcare through the PCD franchise network."
                        ></MeetOurTeamCard>
                    </Col>

                    <Col md={5} className=" d-flex  justify-content-center  align-content-center ">
                        <MeetOurTeamCard
                            img="/assets/Images/Untitled design (2)-modified.png"
                            name="Nancharaiah Gowd Nasina"
                            designation="Managing director/Co-Founder"
                            details="The Managing Director orchestrates visionary strategies, driving organizational success with unwavering leadership."
                            firstImg={true}
                        ></MeetOurTeamCard>
                    </Col>
                </Row>

                <Row className=" d-flex  justify-content-center  align-items-center mb-4 ">
                    <Col md={5} className=" d-flex  justify-content-center  align-content-center ">
                        <MeetOurTeamCard
                            img="/assets/Images/Ellipse 14.png"
                            name="Vajrala Amith Babu"
                            designation="CEO & Co-Founder"
                            details="As the CEO, I chart the course, ensuring innovation, growth, and sustainable success for the company."
                        ></MeetOurTeamCard>
                    </Col>
                    <Col sm={12} md={5} className="d-flex  justify-content-center align-items-center ">
                        <MeetOurTeamCard
                            img="/assets/Images/WhatsApp Image 2024-01-22 at 1.21.11 AM-modified.png"
                            name="Sameer Kumar Kalapala"
                            designation=" COO"
                            details=" I lead our operational efforts, focusing on process enhancements, customer satisfaction, and team excellence."
                        ></MeetOurTeamCard>
                    </Col>


                </Row>

                <Row className=" d-flex  justify-content-center align-items-center ">
                    <Col sm={12} md={5} className="d-flex  justify-content-center align-items-center ">
                        <MeetOurTeamCard
                            img="/assets/Images/Ellipse 15 (2).png"
                            name="Bhanu Prakash Baina"
                            designation="CFO"
                            details="The CFO optimizes financial performance, ensuring fiscal strength and strategic decision-making."
                        ></MeetOurTeamCard>
                    </Col>
                    <Col md={5} className=" d-flex  justify-content-center  align-content-center ">
                        <MeetOurTeamCard
                            img="/assets/Images/Ellipse 14.jpg"
                            name="Vajrala Asish babu"
                            designation="Director"
                            details="The Director steers the organization towards its goals, inspiring teams to achieve excellence."
                        ></MeetOurTeamCard>
                    </Col>

                </Row>
            </Container>

            <Container
                style={{ width: "100vw", height: " 55vw" }}
            ></Container>

            <Footer></Footer>
        </Container>
    );
};

export default OurTeam;
