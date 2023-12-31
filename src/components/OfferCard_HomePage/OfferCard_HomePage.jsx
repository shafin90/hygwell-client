
import { Zoom } from "react-awesome-reveal";
import { Container } from "react-bootstrap";

const OfferCard_HomePage = ({ leftImg, rightImg, heading, offer1, offer2, offer3, offer4 }) => {


    return (
        <Zoom>
            <div className="position-relative w-100 z-1 pb-5">
                {/* Image partition = two image space between */}
                <Container className="d-flex justify-content-between align-items-center position-relative z-2 px-0  px-md-4 px-lg-4 px-xl-4 px-xxl-4  mb-4 ">
                    <img className="w-25 pe-3  p-md-2 p-lg-2 p-xl-2 p-xxl-2" src={leftImg} alt="" />
                    <img className="w-75 ps-5 px-md-4 px-lg-4 px-xl-4 px-xxl-4" src={rightImg} alt="" />
                </Container>

                {/* Offers */}
                <h2 className=" h5 fw-bold ps-4  mb-4   position-relative z-2 ">
                    {heading}
                </h2>

                <ul className={offer4 === "" ? "position-relative  ps-5 mb-5 pb-4" : "position-relative z-2 ps-5 mb-5"}>
                    <li className=" text-muted z-3 position-relative  ">{offer1}</li>
                    <li className=" text-muted z-3 position-relative  ">{offer2}</li>
                    <li className=" text-muted z-3 position-relative ">{offer3}</li>
                    <li className={offer4 === "" ? "d-none" : "text-muted z-2 position-relative"}> {offer4}</li>
                </ul>

                <div style={{ backgroundColor: "#e8eed8", height: "80%" }} className="w-100  position-absolute  bottom-0 rounded-4 position-relative z-0   "></div>
            </div>
        </Zoom>
    );
};

export default OfferCard_HomePage;