
import { Container } from "react-bootstrap";
import "./MeetOurTeamCard.css"
import { Fade, Zoom } from "react-awesome-reveal";
import { FiTwitter } from "react-icons/fi";
import { CiMail,  CiLinkedin  } from "react-icons/ci";

const MeetOurTeamCard = ({ img, name, designation, details, firstImg }) => {

    return (

        <Container fluid className="d-flex flex-column justify-content-center align-items-center  border bg-white py-5 z-2 position-relative  px-3 m-2">

            <Zoom className=" d-flex  justify-content-center  align-items-center ">
                <img src={img} className={firstImg?" firstImg mb-3 p-2 p-md-0 p-lg-0 p-xl-0 p-xxl-0":"w-50 mb-3 p-2 p-md-0 p-lg-0 p-xl-0 p-xxl-0 "} alt="" />
            </Zoom>

            <Fade cascade>
                <h1 className="h2 fw-normal text-center text-md-start text-lg-start text-xl-start text-xxl-start mb-1 ">{name}</h1>
                <p className=" text-primary fw-medium ">{designation}</p>
                <article className="text-center text-muted mb-4 px-0 px-xl-4  px-xxl-4  ">
                    {details}
                </article>
            </Fade>

            <div className=" card_social_link d-flex  justify-content-between  align-content-center w-50 px-0 px-md-5 px-lg-5 px-xl-5 px-xxl-5">
                <div style={{borderRadius:"50%", backgroundColor:"#f2f2f2", cursor:"pointer"}} className=" px-2 py-1 ">
                    <FiTwitter />
                </div>

                <div style={{borderRadius:"50%", backgroundColor:"#f2f2f2", cursor:"pointer"}} className=" px-2 py-1 ">
                <CiLinkedin />
                </div>

                <div style={{borderRadius:"50%", backgroundColor:"#f2f2f2", cursor:"pointer"}} className=" px-2 py-1 ">
                    <CiMail />
                </div>
            </div>


        </Container>

    );
};

export default MeetOurTeamCard;