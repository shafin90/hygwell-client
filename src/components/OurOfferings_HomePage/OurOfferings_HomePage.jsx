//  Component ecplainations: This component contains our all offers. It takes place after "About us" section of home page.

/*
CSS class explaination: 
1. offerings_homepage: This class is the whole component. 
2. heading-offer-homepage: At the top-left position of this component, there is a heading. This class take place in it.
3. btn-explore: At the top right of this component, there is a button "Explore". This class take place in it. 
*/

import { useEffect, useState } from 'react';
import OfferCard_HomePage from '../OfferCard_HomePage/OfferCard_HomePage';
import './OurOfferings_HomePage.css'

const OurOfferings_HomePage = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [scrollLimit, setScrollLimit] = useState(30)
    const [right, setRight] = useState(0)

    useEffect(() => {
        if (screenWidth < 576) {
            setScrollLimit(250)
        }
    }, [])

    // This function specifies how the slider move to left direction
    const handleSliderMoveToLeft = () => {
        if (right >= 0 && right < scrollLimit) {
            const newSliderPosition = right + 15;
            setRight(newSliderPosition)
        }
        else {
            setRight(0)
        }
    }

    // This function specifies how the slider move to right direction
    const handleSliderMoveToRight = () => {
        if (right >= 0 && right < scrollLimit) {
            const newSliderPosition = right - 15;
            setRight(newSliderPosition)
        }
        else {
            setRight(0)
        }
    }

    return (
        <div className="offerings_homepage position-relative " >
            <div className=" d-flex justify-content-between  align-items-start ps-3 ps-md-5  pe-4  ">
                <h1 className="heading-offer-homepage ">
                    Our Offerings
                </h1>

                <button className="btn-explore">
                    Explore
                </button>
            </div>


            <div style={{ transition: "1s", position: "relative", right: `${right}vw` }} className=' offersContainer d-flex  justify-content-between  align-items-center '>
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
            <div className=' d-flex  justify-content-end  align-items-center mt-5 mt-md-0 mt-lg-0 ' >
                <img onClick={handleSliderMoveToRight} className='sliderBtn' src="../../../public/assets/Images/Button (1).png" alt="" />
                <img onClick={handleSliderMoveToLeft} className='sliderBtn' src="../../../public/assets/Images/Button.png" alt="" />
            </div>

            {/* left band and right band = those are floating object  */}
            <img className=' leftBand' src="../../../public/assets/Images/Left Band 1.png" alt="" />
            <img className=' rightBand' src="../../../public/assets/Images/Right Band 2.png" alt="" />

        </div>
    );
};

export default OurOfferings_HomePage;