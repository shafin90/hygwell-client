
import { Container } from "react-bootstrap";
import "./MeetOurTeamCard.css"
import { Fade, Zoom } from "react-awesome-reveal";

const MeetOurTeamCard = ({ img, name, designation, details }) => {

    return (

        <Container fluid className="d-flex flex-column justify-content-center align-items-center  border bg-white py-5 z-2 position-relative  px-3 m-2">

            <Zoom>
                <img src={img} className="img-fluid mb-3 p-4 p-md-0 p-lg-0 p-xl-0 p-xxl-0 " alt="" />
            </Zoom>

            <Fade cascade>
                <h1 className="h2 fw-normal text-center text-md-start text-lg-start text-xl-start text-xxl-start mb-1 ">{name}</h1>
                <p className=" text-primary fw-medium ">{designation}</p>
                <article className="text-center text-muted mb-4 px-0 px-xl-4  px-xxl-4  ">
                    {details}
                </article>
            </Fade>
            
            <div className=" card_social_link d-flex  justify-content-between  align-content-center w-50 px-0 px-md-5 px-lg-5 px-xl-5 px-xxl-5">
                <img style={{ cursor: "pointer" }} className=" img-fluid " src="/assets/Images/Icon Box.png" alt="" />
                <img style={{ cursor: "pointer" }} className=" img-fluid " src="/assets/Images/Icon Box (1).png" alt="" />
                <img style={{ cursor: "pointer" }} className=" img-fluid " src="/assets/Images/Icon Box (2).png" alt="" />
            </div>


        </Container>

    );
};

export default MeetOurTeamCard;