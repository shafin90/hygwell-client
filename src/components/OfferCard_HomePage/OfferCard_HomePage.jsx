
import { Container } from "react-bootstrap";

const OfferCard_HomePage = ({ leftImg, rightImg, heading, offer1, offer2, offer3, offer4 }) => {
   

    return (
        <div className="homePageCard  position-relative    w-100 pb-5 ">
            {/* Image partition = two image space between */}
            <Container className="d-flex justify-content-between align-items-center position-relative z-2 px-4 mb-4 ">
                <img className="w-25 p-2" src={leftImg} alt="" />
                <img className="w-75 px-4 " src={rightImg} alt="" />
            </Container>

            {/* Offers */}
            <h2 className=" h5 fw-bold ps-4  mb-4   position-relative z-1 ">
                {heading}
            </h2>

            <ul className={offer4===""?"position-relative z-1 ps-5 mb-5 pb-4":"position-relative z-1 ps-5 mb-5"}>
                <li className=" text-muted ">{offer1}</li>
                <li className=" text-muted ">{offer2}</li>
                <li className=" text-muted ">{offer3}</li>
                <li className={offer4 === ""? "d-none":"text-muted "}> {offer4}</li>
            </ul>

            <div style={{backgroundColor: "#e8eed8", height:"80%"}} className="w-100  position-absolute  bottom-0 rounded-4 "></div>
        </div>
    );
};

export default OfferCard_HomePage;