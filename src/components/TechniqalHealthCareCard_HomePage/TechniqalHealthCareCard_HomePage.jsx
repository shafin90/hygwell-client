import { useState } from 'react';
import SmallDescriptionWithHeading from '../SmallDescriptionWithHeading/SmallDescriptionWithHeading';
import './TechniqalHealthCareCard_HomePage.css'

const TechniqalHealthCareCard_HomePage = ({cardImg, heading, article}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    return (
        <div className="techniqalHealthCareCard_HomePage">
            <div className=' w-100  d-flex  justify-content-center  align-items-center '>
                <img  src={cardImg} alt="" />
            </div>
            <div className='techniqalHealthCareCard_HomePage_text'>
                <SmallDescriptionWithHeading
                    heading={heading}
                    article={article}
                    textAlign="center"
                    fontWeight="700"
                    fontSizeOfHeading="1.875vw"
                    fontSizeOfArticle="1.1111111111111112vw"
                    fontFamily="'Poppins', sans-serif"
                ></SmallDescriptionWithHeading>
            </div>
        </div>
    );
};

export default TechniqalHealthCareCard_HomePage;