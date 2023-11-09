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
        <div className="offerings_homepage">
            <div className=" d-flex justify-content-between  align-items-center ">
                <h1 className="heading-offer-homepage">
                    Our Offerings
                </h1>

                <button className="btn-explore">
                    Explore
                </button>
            </div>


            <div style={{width:"1699px", paddingBottom:"9.097222222222221vw"}} className=' d-flex  justify-content-between  align-items-center '>
                <OfferCard_HomePage></OfferCard_HomePage>
                <OfferCard_HomePage></OfferCard_HomePage>
                <OfferCard_HomePage></OfferCard_HomePage>
            </div>
        </div>
    );
};

export default OurOfferings_HomePage;