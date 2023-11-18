import { Zoom } from 'react-awesome-reveal';
import { AiOutlineArrowRight } from 'react-icons/ai'

const ProductShowCaseCard_HomePage = ({ productImg, category }) => {


    return (
        <Zoom>
            <div className="position-relative w-100 pb-5">

                {/* Product Image ================================*/}
                <div className='d-flex justify-content-center align-items-center w-75 mx-auto mb-4 '>
                    <img src={productImg} className="mx-auto  position-relative z-1 img-fluid " alt="" />
                </div>

                {/* Heading ======================================*/}
                <h2 className="position-relative z-1 text-start h4 fw-bold ms-4 mb-4">
                    {category}
                </h2>

                {/* Show more button =============================*/}
                <button className="position-relative z-1 btn btn-outline-success fw-semibold  px-4 ms-4 ">
                    Shop Now
                    <AiOutlineArrowRight></AiOutlineArrowRight>
                </button>

                {/* background transparent image================== */}
                <img src="/assets/Images/Group 44.png" style={{ left: "0px" }} className=' w-100  h-75  position-absolute  z-0 bottom-0 ' alt="" />

            </div>
        </Zoom>
    );
};

export default ProductShowCaseCard_HomePage;
