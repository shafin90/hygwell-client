import { Col, Container, Row } from "react-bootstrap";
import MeetOurTeamCard from "../MeetOurTeamCard/MeetOurTeamCard";
import { AttentionSeeker, Fade, JackInTheBox, Slide } from "react-awesome-reveal";


const MeetOurTeam = () => {
    return (
        <Container className="d-flex flex-column bg-body-secondary  justify-content-center align-items-center  position-relative  z-0 my-5 py-5 position-relative " fluid>
            {/* position absolute div. it will stay behind */}

            <h1 className="z-1 my-5 display-4 fw-semibold" >
                <Slide duration={1500}>
                    Meet our team
                </Slide>
            </h1>
            {/* <Fade duration={2500}> */}
            <Container className="d-flex justify-content-between align-items-center     position-relative mb-5 ">

                <Row>
                    <Col md={6}>
                        <MeetOurTeamCard
                            img="/assets/Images/Ellipse 15.png"
                            name="Nancharaiah Gowd Nasina"
                            designation="Managing director/Co-Founder"
                            details="The Managing Director orchestrates visionary strategies, driving organizational success with unwavering leadership."
                        ></MeetOurTeamCard>
                    </Col>

                    <Col md={6}>
                        <MeetOurTeamCard
                            img="/assets/Images/Ellipse 14.png"
                            name="Vajrala Amith Babu"
                            designation="CEO & Co-Founder"
                            details="The Director steers the organization towards its goals, inspiring teams to achieve excellence."
                        ></MeetOurTeamCard>
                    </Col>
                </Row>

            </Container>
            {/* </Fade> */}

            <AttentionSeeker effect="tada">
                <button className="z-3 position-relative  btn btn-green text-white rounded-3 px-4  py-2 mb-5 ">See Full Time</button>
            </AttentionSeeker>

            <img className=" position-absolute  z-1 img-fluid  " src="/assets/Images/Mask group (2).png" alt="" />
        </Container>
    );
};

export default MeetOurTeam;