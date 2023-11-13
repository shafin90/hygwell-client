import { AiOutlineArrowRight } from 'react-icons/ai'
import './ProductShowCaseCard_HomePage.css'

const ProductShowCaseCard_HomePage = ({moveTop,productImg,category,productImgWidth,productImgHeight}) => {
    
    const liftUP = {
        position: "relative",
        bottom: moveTop?"2.5vw":"0vw"
    }
    return (
        <div className="ProductShowCaseCard_HomePage position-relative d-flex  flex-column  justify-content-start align-items-start  ">
            
            {/* Product Image ================================*/}
            <div style={{ marginBottom: "1.4583333333333333vw" }} className=' d-flex  justify-content-center  align-items-center  w-100 '>
                <img style={{width:`${productImgWidth}vw`, height:`${productImgHeight}vw`}} src={productImg} className=" mx-auto  position-relative  z-1 " alt="" />
            </div>

            {/* Heading ======================================*/}
            <h2 style={liftUP} className="productCategory_heading position-relative  z-1 text-start  ">
                {category}
            </h2>

            {/* Show more button =============================*/}
            <button style={{  bottom: moveTop&&"2.5vw" }} className="shopNowButton shopNowBtn position-relative z-1">
                Shop Now
                <AiOutlineArrowRight></AiOutlineArrowRight>
            </button>

            {/* background transparent image================== */}
            <img src="/assets/Images/Group 44.png" className=' w-100  h-75  position-absolute  z-0  bottom-0 ' alt="" />
            
        </div>
    );
};

export default ProductShowCaseCard_HomePage;
