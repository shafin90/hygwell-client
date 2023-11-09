import "./OfferCard_HomePage.css"

const OfferCard_HomePage = ({leftImg, rightImg, heading, offer1, offer2, offer3, offer4}) => {
    return (
        <div style={{marginRight:"1.8055555555555556vw"}} className="offerCardHomePage position-relative ">
            {/* Image partition = two image space between */}
            <div style={{marginBottom:"3.3333333333333335vw", zIndex:1}} className="imagePartitionOfOffers w-100  d-flex  justify-content-between  align-items-center  position-relative ">
               
                <img style={{ width: "6.25vw", height: '6.25vw', position:"relative", left:"2.4305555555555554vw" }} src={leftImg} alt="" />
               
                <img style={{ width: "18.541666666666668vw", height: "10.694444444444445vw", position:"relative", right:"3.75vw"  }} src={rightImg} alt="" />
            </div>

            {/* Offers */}
            <h2 style={{marginBottom:"2.4305555555555554vw", zIndex:1}} className=" position-relative ourOffersHeading">
                {heading}
            </h2>

            <ul style={{marginBottom:"3.125vw", zIndex:1}} className=" position-relative  offers_homePage">
                <li>{offer1}</li>
                <li>{offer2}</li>
                <li>{offer3}</li>
                <li className={offer4===""&&"d-none "}> {offer4}</li>
            </ul>

            <div style={{height:"80%", backgroundColor:"#e8eed8", zIndex:0}} className=" w-100  position-absolute  bottom-0 rounded-4  "></div>
        </div>
    );
};

export default OfferCard_HomePage;