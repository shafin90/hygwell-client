//  Component ecplaination: This component contains the images which are in the backside of banner section

import './BackgroundImageContainer.css'
const BackgroundImageContainer = () => {
    return (
        <div style={{zIndex:"0"}} className=" d-flex  justify-content-between  align-content-center position-absolute top-0  w-100 ">
            <img className="left-side-image-background" src="../../../public/assets/Images/left-img-of-banner.png" alt="" />
            <img className="right-side-image-background" src="../../../public/assets/Images/right-img-of-banner-homepage.png" alt="" />
        </div>
    );
};

export default BackgroundImageContainer;