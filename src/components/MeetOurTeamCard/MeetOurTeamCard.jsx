
import { Container } from "react-bootstrap";
import "./MeetOurTeamCard.css"
import { Fade } from "react-awesome-reveal";

const MeetOurTeamCard = ({ img, name, designation, details }) => {

    return (

        <Container fluid className="d-flex flex-column justify-content-center align-items-center  border bg-white py-5 z-2 position-relative  px-3 m-2">
            
                <img src={img} className="img-fluid mb-3 " alt="" />
                <h1 className="h2 fw-normal mb-1 ">{name}</h1>
                <p className=" text-primary fw-medium ">{designation}</p>
                <article className="text-center text-muted mb-4">
                    {details}
                </article>
                <div className=" card_social_link d-flex  justify-content-between  align-content-center w-25  ">
                    <img style={{ cursor: "pointer" }} className=" img-fluid " src="/assets/Images/Icon Box.png" alt="" />
                    <img style={{ cursor: "pointer" }} className=" img-fluid " src="/assets/Images/Icon Box (1).png" alt="" />
                    <img style={{ cursor: "pointer" }} className=" img-fluid " src="/assets/Images/Icon Box (2).png" alt="" />
                </div>
            
        </Container>

    );
};

export default MeetOurTeamCard;