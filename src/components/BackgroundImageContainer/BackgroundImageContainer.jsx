// Component explaination ========================================================
// This component contains the images which are in the backside of banner section.
/* This component takes an argument. 

1. rightSideImg: different pages contain different image at the top-right corner. this props take that image.
*/

import { Fade, Slide } from 'react-awesome-reveal';
import './BackgroundImageContainer.css'
const BackgroundImageContainer = ({ rightSideImg }) => {
    return (
        // set z-index:0, because it will be at the backside of all the pages.
        <div style={{ zIndex: "0" }} className=" d-flex  justify-content-between  align-content-center position-absolute top-0  w-100 overflow-x-hidden  ">

            {/* left-side-image-background: This is the left side imaage */}

            <Slide duration={1000}>
                <img className="left-side-image-background" src="/assets/Images/Subtract.png" alt="" />
            </Slide>
            {/* right-side-image-background: This is the right side image */}
            <Fade duration={1000} >
                <img className="right-side-image-background" src={rightSideImg} alt="" />
            </Fade>
        </div>
    );
};

export default BackgroundImageContainer;