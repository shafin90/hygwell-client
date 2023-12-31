import SmallDescriptionWithHeading from '../SmallDescriptionWithHeading/SmallDescriptionWithHeading';

const TechniqalHealthCareCard_HomePage = ({cardImg, heading, article}) => {
    
    return (
        <div className="w-100 position-relative pb-5 ">
            <div className='w-100 d-flex justify-content-center align-items-center mb-3'>
                <img className=' mx-auto position-relative z-2 img-fluid w-50 p-3 p-md-4 p-lg-4 p-xl-3 p-xxl-2'  src={cardImg} alt="" />
            </div>
            <div className='z-2 pb-0 pb-md-0 pb-lg-0  pb-xl-0  pb-xxl-5 '>
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