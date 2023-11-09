//  Component ecplainations: This component contains our all offers. It takes place after "About us" section of home page.

/*
CSS class explaination: 
1. offerings_homepage: This class is the whole component. 
2. heading-offer-homepage: At the top-left position of this component, there is a heading. This class take place in it.
3. btn-explore: At the top right of this component, there is a button "Explore". This class take place in it. 
*/

import OfferCard_HomePage from '../OfferCard_HomePage/OfferCard_HomePage';
import './OurOfferings_HomePage.css'

const OurOfferings_HomePage = () => {
    return (
        <div className="offerings_homepage" >
            <div className=" d-flex justify-content-between  align-items-start ps-5  pe-4  ">
                <h1 className="heading-offer-homepage ">
                    Our Offerings
                </h1>

                <button className="btn-explore">
                    Explore
                </button>
            </div>


            <div style={{ width: "117.98611111111111vw", paddingBottom: "1.097222222222221vw", paddingLeft: "1.4583333333333333vw" }} className=' d-flex  justify-content-between  align-items-center '>
                <OfferCard_HomePage
                    leftImg="../../../public/assets/Images/Group 1171282609.png"
                    rightImg="../../../public/assets/Images/Mask group.png"
                    heading="Hotel and Hospitality"
                    offer1="Shower Gels (Body and Hair)"
                    offer2="Hand Wash"
                    offer3="Lotions"
                    offer4="Hair Conditioner"
                ></OfferCard_HomePage>

                <OfferCard_HomePage
                    leftImg="../../../public/assets/Images/Group 1171282609 (1).png"
                    rightImg="../../../public/assets/Images/Mask group (1).png"
                    heading="Private Labelling"
                    offer1="Custom Labeling"
                    offer2="Innovative Packaging"
                    offer3="Various Product Formats"
                    offer4=""

                ></OfferCard_HomePage>

                <OfferCard_HomePage
                    leftImg="../../../public/assets/Images/Group 1171282609 (2).png"
                    rightImg="../../../public/assets/Images/Mask group (1).png"
                    heading="Turnkey Consultants"
                    offer1="Turnkey Consultation"
                    offer2="Project Execution"
                    offer3="Enterprise for Pharma, Herbal, etc."
                    offer4=""

                ></OfferCard_HomePage>
            </div>

            {/* Slider buttons */}
            <div className=' d-flex  justify-content-end  align-items-center ' >
                <img className='sliderBtn' src="../../../public/assets/Images/Button (1).png" alt="" />
                <img className='sliderBtn' src="../../../public/assets/Images/Button.png" alt="" />
            </div>
        </div>
    );
};

export default OurOfferings_HomePage;