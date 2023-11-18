import SmallDescriptionWithHeading from '../SmallDescriptionWithHeading/SmallDescriptionWithHeading';

const TechniqalHealthCareCard_HomePage = ({cardImg, heading, article}) => {
    
    return (
        <div className="w-100  position-relative ">
            <div className='w-100 d-flex justify-content-center align-items-center mb-3'>
                <img className='img-fluid mx-auto position-relative z-2'  src={cardImg} alt="" />
            </div>
            <div className='techniqalHealthCareCard_HomePage_text z-2 '>
                <SmallDescriptionWithHeading
                    heading={heading}
                    article={article}
                    headingClass="h4 fw-bold  text-center z-3 position-relative"
                    articleClass={true}
                ></SmallDescriptionWithHeading>
            </div>

            {/* white absolute Backgrount */}
            <div  className='bg-white  w-100  h-75 position-absolute rounded-top-5 bottom-0 z-1 '></div>
        </div>
    );
};

export default TechniqalHealthCareCard_HomePage;