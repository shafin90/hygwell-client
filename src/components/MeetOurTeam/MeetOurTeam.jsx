import { Container } from "react-bootstrap";
import MeetOurTeamCard from "../MeetOurTeamCard/MeetOurTeamCard";
import './MeetOurTeam.css'

const MeetOurTeam = () => {
    return (
        <Container style={{ marginTop: "500px", marginBottom:"500px" }} className=" d-flex  flex-column  justify-content-center align-items-center " fluid>
            <h1 >Meet our team</h1>
            <Container className=" d-flex  justify-content-between align-items-center ">
                <MeetOurTeamCard
                    img="../../../public/assets/Images/Ellipse 15.png"
                    name="Nancharaiah Gowd Nasina"
                    designation="Managing director/Co-Founder"
                    details="The Managing Director orchestrates visionary strategies, driving organizational success with unwavering leadership."
                ></MeetOurTeamCard>

                <MeetOurTeamCard

                    img="../../../public/assets/Images/Ellipse 15.png"
                    name="Nancharaiah Gowd Nasina"
                    designation="Managing director/Co-Founder"
                    details="The Managing Director orchestrates visionary strategies, driving organizational success with unwavering leadership."

                ></MeetOurTeamCard>
            </Container>

            <button className="seeFullTime">See Full Time</button>
        </Container>
    );
};

export default MeetOurTeam;