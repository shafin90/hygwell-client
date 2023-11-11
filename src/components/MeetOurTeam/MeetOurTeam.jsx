import { Container } from "react-bootstrap";
import MeetOurTeamCard from "../MeetOurTeamCard/MeetOurTeamCard";
import './MeetOurTeam.css'

const MeetOurTeam = () => {
    return (
        <Container style={{ marginTop: "10vw", marginBottom:"20vw" }} className=" meetOurTeamHomePage d-flex  flex-column  justify-content-center align-items-center  position-relative  z-1 " fluid>
           {/* position absolute div. it will stay behind */}
           
           
            <h1 className="z-1 meetOurTeamHeading" >Meet our team</h1>
            <Container className=" d-flex flex-column flex-md-row flex-lg-row  justify-content-between align-items-center  z-3   position-relative ">
                <MeetOurTeamCard
                    img="/assets/Images/Ellipse 15.png"
                    name="Nancharaiah Gowd Nasina"
                    designation="Managing director/Co-Founder"
                    details="The Managing Director orchestrates visionary strategies, driving organizational success with unwavering leadership."
                ></MeetOurTeamCard>

                <MeetOurTeamCard

                    img="/assets/Images/Ellipse 14.png"
                    name="Vajrala Amith Babu"
                    designation="CEO & Co-Founder"
                    details="The Director steers the organization towards its goals, inspiring teams to achieve excellence."
                ></MeetOurTeamCard>
            </Container>

            <button className="seeFullTime z-2 ">See Full Time</button>
            <div className="meetOurTeamHomePageBehind"></div>
        </Container>
    );
};

export default MeetOurTeam;